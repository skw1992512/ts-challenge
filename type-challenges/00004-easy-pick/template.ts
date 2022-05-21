type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

//js

function myPick(todo, keys) {
  const obj = {};
  keys.foreach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}

//1.返回一个对象
//2.遍历foreach
//3.todo[key]取值
//4.看看key是否在todo中
