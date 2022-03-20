// bind...thisや引数の参照を変更。使用時点で実行はしない。
// call, apply...thisや引数の参照先を変更。同時に関数を実行する。

function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}
const tim = {name: 'Tim'};

const b = a.bind(tim);

b();
a.apply(tim, ['Tim', 'bob']); //配列を渡せる
a.call(tim, 'Tim', 'Bob'); // 第二引数を送れる

const array = [1,2,3,4,5];
// const result = Math.max.apply(null, array);
const result = Math.max(...array);
console.log(result);
