// v2
import { useEffect, useState, useId } from "react";
import { motion } from "motion/react";
import { mockService, type AnalyticsDay } from "../services/mockService";

// Custom SVG area chart — avoids recharts internal key collision that
// occurs when multiple AreaChart instances coexist on the same page.
function SvgAreaChart({
  data,
  dataKey,
  color,
  height = 140,
  yMin,
  yMax,
  suffix = "",
}: {
  data: AnalyticsDay[];
  dataKey: keyof AnalyticsDay;
  color: string;
  height?: number;
  yMin?: number;
  yMax?: number;
  suffix?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `area-grad-${uid}`;
  const clipId = `area-clip-${uid}`;

  const padL = 32;
  const padR = 8;
  const padT = 8;
  const padB = 24;

  if (!data.length) return <div style={{ height }} />;

  const values = data.map((d) => Number(d[dataKey]));
  const lo = yMin ?? Math.min(...values) * 0.9;
  const hi = yMax ?? Math.max(...values) * 1.1;

  const W = 300; // viewBox width; scales with container via preserveAspectRatio
  const H = height;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const xPos = (i: number) => padL + (i / (data.length - 1)) * chartW;
  const yPos = (v: number) => padT + (1 - (v - lo) / (hi - lo)) * chartH;

  const pts = data.map((d, i) => [xPos(i), yPos(Number(d[dataKey]))] as [number, number]);

  // Smooth line using cubic bezier
  const lineD = pts.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x} ${y}`;
    const [px, py] = pts[i - 1];
    const cpx = (px + x) / 2;
    return `${acc} C ${cpx} ${py}, ${cpx} ${y}, ${x} ${y}`;
  }, "");

  const areaD = `${lineD} L ${pts[pts.length - 1][0]} ${padT + chartH} L ${pts[0][0]} ${padT + chartH} Z`;

  // Grid lines (4 horizontal)
  const gridLines = [0, 0.33, 0.67, 1].map((t) => padT + t * chartH);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.3} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x={padL} y={padT} width={chartW} height={chartH} />
        </clipPath>
      </defs>

      {/* Grid */}
      {gridLines.map((gy, i) => (
        <line key={i} x1={padL} y1={gy} x2={padL + chartW} y2={gy} stroke="#30363D" strokeWidth={1} strokeDasharray="3 3" />
      ))}

      {/* Area fill */}
      <path d={areaD} fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />

      {/* Line */}
      <path d={lineD} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" clipPath={`url(#${clipId})`} />

      {/* Dots + tooltip labels */}
      {pts.map(([x, y], i) => (
        <g key={data[i].day}>
          <circle cx={x} cy={y} r={3} fill={color} />
          {/* Day label */}
          <text x={x} y={H - 4} textAnchor="middle" fill="#8B949E" fontSize={11} fontFamily="Inter, sans-serif">
            {data[i].day}
          </text>
          {/* Value label on hover — shown as title for accessibility */}
          <title>{`${data[i].day}: ${data[i][dataKey]}${suffix}`}</title>
        </g>
      ))}

      {/* Y-axis labels */}
      {[lo, (lo + hi) / 2, hi].map((v, i) => (
        <text
          key={i}
          x={padL - 4}
          y={yPos(v) + 4}
          textAnchor="end"
          fill="#8B949E"
          fontSize={10}
          fontFamily="Inter, sans-serif"
        >
          {Math.round(v)}
        </text>
      ))}
    </svg>
  );
}

function SvgBarChart({
  data, dataKey, color, height = 140, suffix = "",
}: {
  data: AnalyticsDay[]; dataKey: keyof AnalyticsDay; color: string; height?: number; suffix?: string;
}) {
  const padL = 32; const padR = 8; const padT = 8; const padB = 24;
  if (!data.length) return <div style={{ height }} />;
  const values = data.map((d) => Number(d[dataKey]));
  const hi = Math.max(...values) * 1.15;
  const W = 300; const H = height;
  const chartW = W - padL - padR; const chartH = H - padT - padB;
  const barW = Math.max(4, (chartW / data.length) * 0.5);
  const xPos = (i: number) => padL + (i + 0.5) * (chartW / data.length);
  const barH = (v: number) => (v / hi) * chartH;
  const gridLines = [0, 0.33, 0.67, 1].map((t) => padT + t * chartH);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={height} preserveAspectRatio="none" style={{ overflow: "visible" }}>
      {gridLines.map((gy, i) => (
        <line key={`g-${i}`} x1={padL} y1={gy} x2={padL + chartW} y2={gy} stroke="#30363D" strokeWidth={1} strokeDasharray="3 3" />
      ))}
      {data.map((d, i) => {
        const bh = barH(Number(d[dataKey]));
        const x = xPos(i);
        const y = padT + chartH - bh;
        return (
          <g key={`bar-${i}`}>
            <rect x={x - barW / 2} y={y} width={barW} height={bh} fill={color} opacity={0.85} rx={3} />
            <text x={x} y={H - 4} textAnchor="middle" fill="#8B949E" fontSize={11} fontFamily="Inter, sans-serif">{d.day}</text>
          </g>
        );
      })}
      {[0, hi / 2, hi].map((v, i) => (
        <text key={`y-${i}`} x={padL - 4} y={padT + chartH - (v / hi) * chartH + 4} textAnchor="end" fill="#8B949E" fontSize={10} fontFamily="Inter, sans-serif">
          {Math.round(v)}{suffix}
        </text>
      ))}
    </svg>
  );
}

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div
      className="flex-1 rounded-[20px] p-[16px] flex flex-col gap-[4px]"
      style={{ background: "#201f1f", border: "1px solid #30363D" }}
    >
      <span style={{ fontSize: 12, fontFamily: "Inter, sans-serif", color: "#8B949E" }}>{label}</span>
      <span style={{ fontSize: 22, fontWeight: 700, fontFamily: "Inter, sans-serif", color }}>{value}</span>
      <span style={{ fontSize: 11, fontFamily: "Inter, sans-serif", color: "#8B949E" }}>{sub}</span>
    </div>
  );
}

function ChartSection({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="px-[16px] mb-[20px]">
      <div className="rounded-[20px] p-[16px]" style={{ background: "#161B22", border: "1px solid #30363D" }}>
        <div className="flex items-center gap-[8px] mb-[12px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ background: color }} />
          <span style={{ fontSize: 14, fontWeight: 600, fontFamily: "Inter, sans-serif", color: "#E5E2E1" }}>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AnalyticsScreen() {
  const [data, setData] = useState<AnalyticsDay[]>([]);

  useEffect(() => {
    mockService.getAnalytics().then(setData);
  }, []);

  const avgScore = data.length ? Math.round(data.reduce((a, d) => a + d.score, 0) / data.length) : 0;
  const avgBlinks = data.length ? Math.round(data.reduce((a, d) => a + d.blinks, 0) / data.length) : 0;
  const totalScreen = data.length ? data.reduce((a, d) => a + d.screenTime, 0).toFixed(1) : "0";
  const bestDay = data.length ? data.reduce((a, d) => d.score > a.score ? d : a, data[0]) : null;

  return (
    <div className="size-full flex flex-col overflow-hidden" style={{ background: "#131313" }}>
      <div className="px-[16px] pt-[16px] pb-[8px]">
        <span style={{ fontSize: 24, fontWeight: 700, fontFamily: "Inter, sans-serif", color: "#E5E2E1" }}>Analytics</span>
        <p style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#8B949E", marginTop: 4 }}>Last 7 days</p>
      </div>

      <div className="flex-1 overflow-y-auto pb-[96px]">
        <div className="px-[16px] flex gap-[10px] mb-[20px]">
          <StatCard label="Avg Score" value={`${avgScore}`} sub="out of 100" color="#FFE08A" />
          <StatCard label="Avg Blinks" value={`${avgBlinks}`} sub="per minute" color="#93C5FD" />
        </div>
        <div className="px-[16px] flex gap-[10px] mb-[20px]">
          <StatCard label="Screen Time" value={`${totalScreen}h`} sub="this week" color="#F39C12" />
          <StatCard label="Best Day" value={bestDay?.day ?? "-"} sub={bestDay ? `Score ${bestDay.score}` : ""} color="#2ECC71" />
        </div>

        {/* Eye score — custom SVG (no recharts AreaChart) */}
        <ChartSection title="Weekly Eye Health Score" color="#FFE08A">
          <SvgAreaChart data={data} dataKey="score" color="#FFE08A" height={160} yMin={50} yMax={100} />
        </ChartSection>

        <ChartSection title="Blink Rate (per min)" color="#93C5FD">
          <SvgBarChart data={data} dataKey="blinks" color="#93C5FD" height={140} />
        </ChartSection>

        {/* Screen time — custom SVG (no recharts AreaChart) */}
        <ChartSection title="Daily Screen Time (hours)" color="#F39C12">
          <SvgAreaChart data={data} dataKey="screenTime" color="#F39C12" height={140} suffix="h" />
        </ChartSection>

        {/* Insights */}
        <div className="px-[16px] mb-[16px]">
          <p style={{ fontSize: 18, fontWeight: 700, fontFamily: "Inter, sans-serif", color: "#E5E2E1", marginBottom: 12 }}>Weekly Insights</p>
          {[
            { emoji: "👁️", text: "Your eye health improved by 8% compared to last week." },
            { emoji: "💧", text: "Blink rate is below optimal on weekdays. Try setting hourly reminders." },
            { emoji: "📱", text: "Reduce screen time on Tuesday — it was your highest-strain day." },
          ].map((tip, i) => (
            <motion.div
              key={tip.emoji}
              className="flex gap-[12px] mb-[12px] rounded-[16px] p-[14px]"
              style={{ background: "#161B22", border: "1px solid #30363D" }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <span style={{ fontSize: 20 }}>{tip.emoji}</span>
              <p style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#CFC6B3", lineHeight: "20px" }}>{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
