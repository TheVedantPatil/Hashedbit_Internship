// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(a, b, operator) {
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            if (b === 0) {
                return "Error: Cannot divide by 0";
            }
            else {
                result = a / b;
            }
            break;

        default:
            result = "Invalid operator";
    }

    return result;
};
console.log(calculate(1, 2, "+"));