export type ArrayPropertyValues<
  T extends readonly object[],
  K extends keyof T[number]
> = T[number][K];
