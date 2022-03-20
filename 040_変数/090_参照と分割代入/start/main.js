// 分割代入
// let {a,b} = Object;
// オブジェクトから特定のプロパティーを抽出して宣言を行う。

const a = {
  prop: 0
}
let { prop: b } = a;

b = 1;

console.log(a.prop, b);

const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;
