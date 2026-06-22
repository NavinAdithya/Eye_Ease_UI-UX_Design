/** Start at 100, deduct for low blink rate and unsafe distance, clamp 0–100. */
export function computeScore(blinkRate: number, distance: number): number {
  let score = 100;

  if (blinkRate < 8)       score -= 40;
  else if (blinkRate < 12) score -= 20;

  if (distance < 30)       score -= 30;
  else if (distance < 45)  score -= 15;

  return Math.max(0, Math.min(100, score));
}
