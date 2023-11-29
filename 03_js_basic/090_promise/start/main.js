// 非同期処理(Promiss)

let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000);
}).then((b) => {
  console.log("thenの実行", b);
  return b;
}).then((b) => {
  console.log("thenの実行2", b);
}).catch((c) => {
  console.log("catchの実行", c);
});

console.log("hello")