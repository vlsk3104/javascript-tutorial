// コールバック関数
// 他の関数に引数として渡される関数

function hello() {
  console.log('hello');
}

function fn (cb) {
  cb();
}

fn(hello);
