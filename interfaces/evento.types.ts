export type RequestObject<K, T> = { [P in K as string]: T };
