// Await/Async...Promiseを更に直感的に記述できるようにしたもの。
// Async...Promiseを返却する関数の宣言を行う。
// Await...Promiseを返却する関数の非同期処理が完了するまで待つ。

function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}
async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  return val;
}

init().then(function (val) {
  console.log('hello' + val);
});

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
