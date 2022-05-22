type head<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? Head
  : never;

type t1 = head<[1, 2, 3]>;

//数组中最后一个元素
type tail<T extends unknown[]> = T extends [...infer Head, infer Tail]
  ? Tail
  : never;
type t2 = tail<[1, 2, 3]>;
