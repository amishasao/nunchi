// Shrinks a session's heat samples (0 calm to 9 tense) to a fixed number of
// averaged segments, for the bar shown on each past interaction.
export const TIMELINE_SEGMENTS = 13;

export function summarizeHeat(samples: number[], segments = TIMELINE_SEGMENTS): number[] {
  if (samples.length <= segments) return samples.map(round1);
  const result: number[] = [];
  for (let i = 0; i < segments; i++) {
    const bucket = samples.slice(
      Math.floor((i * samples.length) / segments),
      Math.floor(((i + 1) * samples.length) / segments),
    );
    result.push(round1(bucket.reduce((a, b) => a + b, 0) / bucket.length));
  }
  return result;
}

function round1(value: number) {
  return Math.round(value * 10) / 10;
}
