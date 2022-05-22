// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

//js
// const first = (arr) => {
//   return arr[0];
// };

//知识点
//1.extends类型条件判断
//2.获取tuple的length属性
//3.extends union 判断规则
//4.inter的使用
