// json形式とjsの違３つ
// ①シングルクォテーションで囲めない
// ②key はダブルクォテーションで囲む
// ③一番最後にカンマをつけてはならない

// fetchはpromiseを返す

// fetch('users.json').then(function (res) {
//   console.log(res);
//   return res.json();
// }).then(function (json) {
//   console.log(json);
//   for (const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`);
//   }
// })

async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
  for (const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`);
  }
}
fetchUsers();
