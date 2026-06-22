export interface Point { x: number; y: number }

function dist(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// EAR = (||p2-p6|| + ||p3-p5||) / (2 * ||p1-p4||)
// Points ordered as returned by face-api.js getLeftEye()/getRightEye():
// [P1=outer-corner, P2=top-outer, P3=top-inner, P4=inner-corner, P5=bottom-inner, P6=bottom-outer]
function computeForEye(pts: Point[]): number {
  const [p1, p2, p3, p4, p5, p6] = pts;
  const denom = 2 * dist(p1, p4);
  if (denom === 0) return 0;
  return (dist(p2, p6) + dist(p3, p5)) / denom;
}

export class EarCalculator {
  private prevEar = 0.3;

  /** Average left + right EAR, then apply exponential smoothing 0.7*prev + 0.3*current */
  compute(leftEyePts: Point[], rightEyePts: Point[]): number {
    const avg = (computeForEye(leftEyePts) + computeForEye(rightEyePts)) / 2;
    this.prevEar = 0.7 * this.prevEar + 0.3 * avg;
    return this.prevEar;
  }

  reset(): void {
    this.prevEar = 0.3;
  }
}
