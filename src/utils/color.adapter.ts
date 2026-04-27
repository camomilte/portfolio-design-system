export const normalizeScale = (scale: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(scale).map(([key, token]) => [key, token.value])
);