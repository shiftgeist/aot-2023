// https://typehero.dev/challenge/day-7/

type AppendGood<T> = {
  [K in keyof T as `good_${K & string}`]: T[K]
}
