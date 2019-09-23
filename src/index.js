module.exports = function zeros(expression) {
    function factorial(num) {
        return num ? num * factorial(num - BigInt(1)) : BigInt(1);
    }

    function evenFactorial(num) {
        return num > BigInt(1) ? num * evenFactorial(num - BigInt(2)) : BigInt(1);
    }

    let res = BigInt(1);
    let zeros = 0;

    expression.split('*').map(
        a => (/^\d+[!]{2}$/.test(a)) ? evenFactorial(BigInt(parseInt(a))) : factorial(BigInt(parseInt(a)))).forEach(
        multiply => res *= BigInt(multiply));
    res.toString().split("").reverse().some(digit => {
        if (digit == 0) {
            zeros++;
        } else {
            return true;
        }
    });
    return zeros;
}
