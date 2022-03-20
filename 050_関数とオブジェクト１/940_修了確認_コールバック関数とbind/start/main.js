/**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {
    return {
        plus: function(target) {
            setTimeout(function () {
                const newVal = val + target;
                callback(`${val} + ${target} = ${newVal}`);
                val = newVal;
            }, 1000);
            // val = newVal;
        },
        minus: function(target) {

            setTimeout(function () {
                const newVal = val - target;
                callback(`${val} - ${target} = ${newVal}`);
                val = newVal;
            }, 1000);

        },
        multiply: function(target) {

            setTimeout(function () {
                const newVal = val * target;
                callback(`${val} x ${target} = ${newVal}`);
                val = newVal;
            }, 1000);

        },
        divide: function(target) {

            setTimeout(function () {
                const newVal = val / target;
                callback(`${val} / ${target} = ${newVal}`);
                val = newVal;
            }, 1000);

        }
    };
}

const calc = calcFactory(10, console.log);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);
