let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b)

let c = {
  prop: 'hello'
}
// let d = c;
// d.prop = 'bye';
// console.log(c, d);

let d = {};
console.log(c, d);

// プリミティブ値のコピー
// 参照先の値がコピーされる。

// オブジェクトのコピー
// オブジェクトへの参照がコピーされる。
