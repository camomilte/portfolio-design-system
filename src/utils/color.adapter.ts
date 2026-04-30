export const normalizeScale = (scale: Record<string, any>) => // eslint-disable-line @typescript-eslint/no-explicit-any
  Object.fromEntries(
    Object.entries(scale).map(([key, token]) => [key, token.value])
);