window.name = 'John';

const person = {
    name: 'Tom',
    // hello: function() {
    hello() {
        console.log('Hello ' + this.name);
    }
}
person.hello();
