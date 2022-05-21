type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

//js
function TupleToObject(array) {
  const obj = {};
  array.foreach((val) => {
    obj[val] = val;
  });
  return obj;
}

//1.返回一个对象
//2.遍历数组
