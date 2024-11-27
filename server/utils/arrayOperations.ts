export function omitProperties<T, K extends keyof T>(
  array: T[],
  propertiesToOmit: K[],
): Omit<T, K>[] {
  return array.map((item) => {
    const result = { ...item };
    propertiesToOmit.forEach(prop => delete result[prop]);
    return result as Omit<T, K>;
  });
}
