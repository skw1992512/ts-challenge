// use strick
type If<C extends boolean, T, F> = C extends true ? T : F;

//js
// function newIF(c, t, f) {
//   return c ? t : f;
// }
