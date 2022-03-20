new Promise(function(resolve, reject) {
  console.log('promise');
  reject("bye");
  // resolve("hello");
}).then(function (data) {
  console.log(data);
  return data +  "sara";
}).then(function (data) {
  console.log(data);
}).then(function () {
  // throw new Error();
  console.log('then3');
}).catch(function (data) {
  console.log('catch:' + data);
}).finally(function () {
  console.log('finally');
})

console.log('global end');
