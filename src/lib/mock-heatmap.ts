// Simulated conversation heatmap from the prototype.
// Phase 2 replaces this with scores computed from live audio.

export type HeatCell = {
  value: number; // 0 (calm) to 9 (tense)
  participantIndex: number | null;
};

export const GRID_ROWS = 6;
export const GRID_COLS = 7;

export function createInitialGrid(participantCount: number): HeatCell[][] {
  const grid: HeatCell[][] = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    const row: HeatCell[] = [];
    for (let c = 0; c < GRID_COLS; c++) {
      row.push({
        value: Math.floor(Math.random() * 4),
        participantIndex: Math.random() > 0.7 ? Math.floor(Math.random() * participantCount) : null,
      });
    }
    row[0] = { value: 1, participantIndex: null };
    grid.push(row);
  }
  for (let i = 0; i < participantCount; i++) {
    const r = Math.floor(Math.random() * GRID_ROWS);
    const c = Math.floor(Math.random() * GRID_COLS);
    grid[r][c] = { value: Math.floor(Math.random() * 6) + 2, participantIndex: i };
  }
  return grid;
}

// Nudges roughly 30% of cells one step warmer or cooler.
export function driftGrid(grid: HeatCell[][]): HeatCell[][] {
  return grid.map((row) =>
    row.map((cell) => {
      const delta = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
      return { ...cell, value: Math.max(0, Math.min(9, cell.value + delta)) };
    }),
  );
}

// Mean heat across the whole grid, sampled into the session's heat timeline.
export function averageHeat(grid: HeatCell[][]): number {
  const cells = grid.flat();
  return cells.reduce((sum, cell) => sum + cell.value, 0) / cells.length;
}

export function generateInsights(grid: HeatCell[][], participants: string[]): string[] {
  const intensity: Record<number, number[]> = {};
  grid.forEach((row) =>
    row.forEach((cell) => {
      if (cell.participantIndex !== null) {
        (intensity[cell.participantIndex] ??= []).push(cell.value);
      }
    }),
  );

  const insights = Object.entries(intensity).map(([idx, values]) => {
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const name = participants[Number(idx)] || `Person ${Number(idx) + 1}`;
    const isYou = name === 'You';
    if (avg > 6) return `${name} ${isYou ? 'appear' : 'appears'} tense - consider de-escalating`;
    if (avg < 3) return `${name} ${isYou ? 'are' : 'is'} calm - good energy for deeper discussion`;
    return `${name} ${isYou ? 'are' : 'is'} moderately engaged`;
  });

  if (insights.length === 0) insights.push('Conversation is flowing naturally');
  return insights.slice(0, 3);
}

export function formatElapsed(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
