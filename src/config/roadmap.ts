export const PHASE_PROGRESS = {
  p1: 35,
  p2: 0,
  p3: 0,
} as const;

export const MILESTONES = [
  { label: "Piggery rehabilitation", done: true },
  { label: "Solar pump ordered", done: true },
  { label: "Crop fencing complete", done: false },
  { label: "First harvest", done: false },
] as const;
