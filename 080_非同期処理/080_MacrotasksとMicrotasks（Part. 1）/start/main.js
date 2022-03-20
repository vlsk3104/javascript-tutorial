// マクロタスク...これまでのレクチャーでタスクキューと呼んでいたもの。
// マイクロタスク...タスクキューとは別で存在する非同期処理の待ち行列。→ジョブキュー

setTimeout(function task1() {
  console.log('task1');
});

new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

console.log('global end');
