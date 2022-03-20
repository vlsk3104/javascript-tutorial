// オブジェクトのメソッドとして実行される場合
// this => 呼び出し元オブジェクト

// 関数として実行される場合
// this => グローバルオブジェクト

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();
