//アロー関数
//無名関数を記述しやすくした省略記法
// () => {};

const a = () => 'hello';
const b = name => 'hello ' + name;
const c = (name, hi) => name + hi;


// this...無名関数○ アロー関数×
// arguments...無名関数○、アロー関数×
// new...目名関数○、アロー関数×
// prototype...無名関数○、アロー関数×
