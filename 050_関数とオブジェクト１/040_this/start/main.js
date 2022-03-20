// this...呼び出し元のオブジェクトへの参照を保持するキーワード
// 呼び出し元のオブジェクトへの参照を保持する

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();
