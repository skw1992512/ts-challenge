type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// interface user {
//   readonly name: string;
// }

// const xiaoming: user = {
//   name: "xiaoming",
// };

// xiaoming.name = "xiaohong";

function readonly(obj) {
  const result = {};
  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }
  return result;
}

//1.返回一个对象
//2.遍历obj
//3.加入readonly关键字
//4.通过key获取obj里面的值
//5.赋值给result
