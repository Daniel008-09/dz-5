    function calculate(operation) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        let result;

        if (isNaN(num1) || isNaN(num2)) {
            result = "Введите числа";
        } else {
            if (operation === '+') {
                result = add(num1, num2);
            } else if (operation === '-') {
                result = subtract(num1, num2);
            } else if (operation === '*') {
                result = multiply(num1, num2);
            } else if (operation === '/') {
                if (num2 === 0) {
                    result = "Ошибка: деление на ноль";
                } else {
                    result = divide(num1, num2);
                }
            } else if (operation === '**') {
                result = power(num1, num2);
            } else if (operation === 'sqrt') {
                result = sqrt(num1, num2);
            } else {
                result = "Неверная операция";
            }
        }

        document.getElementById('result').textContent = "Результат: " + result;
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function power(num1, num2) {
        return Math.pow(num1, num2);
    }

    function sqrt(num1, num2) {
        let degree = 1 / num2;
        return Math.pow(num1, degree);
    }
