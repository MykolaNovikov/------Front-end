// blocks
let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d - a=10,b=20,c=30,d=не визначено

        b++
        a *= 10
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d - a=100,b=21,c=50,d=не визначено
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a, b, c, d - a=100500,b=521,c=не визначено,d="value"
        {
            let a = -50
            b = 1000
            //які тут будуть значення змінних a, b, c, d - a=(-50),b=1000,c=не визначено,d="value"
        }
        //які тут будуть значення змінних a, b, c, d - a=100500,b=1000,c=не визначено,d="value"
    }
    //які тут будуть значення змінних a, b, c, d - a=100,b=1000,c=не визначено,d==не визначено
}
//які тут будуть значення змінних a, b, c, d - a=100,b=не визначено,c=не визначено,d=не визначено

// comparison if
{
    var age = +prompt("Скільки вам років?", "");

    if (age < 0) {
        alert("Неможливий вік");
    }
    else if (age < 18) {
        alert("школяр");
    }
    else if (age >= 18 && age < 30) {
        alert("молодь");
    }
    else if (age >= 30 && age < 45) {
        alert("зрілість");
    }
    else if (age >= 45 && age < 60) {
        alert("захід сонця");
    }
    else if (age >= 60) {
        alert("як пенсія?");
    }
    else {
        alert("чи кіборг, чи KERNESS");
    }
}

// switch: sizes
{
    let yourSize = +prompt('Введіть ваш розмір верхньго одягу');
    let whiteness = +prompt('Введіть ваш охват талії');

    switch (yourSize) {
        case 40:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 36');
            break;
        case 42:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 38');
            break;
        case 44:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 40');
            break;
        case 46:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 42');
            break;
        case 48:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 44');
            break;
        case 50:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 46');
            break;
        case 52:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 48');
            break;
        case 54:
            alert('Ваш розмір верхньго одягу в французькій системі розмірів дорівнюватиме 50');
            break;
        default:
            alert('Ваш розмір верхньго одягу не можна перетворити в французьку систему розмірів');
    }

    switch (true) {
        case (whiteness >= 63 && whiteness <= 65):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 38');
            break;
        case (whiteness >= 66 && whiteness <= 69):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 40');
            break;
        case (whiteness >= 70 && whiteness <= 74):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 42');
            break;
        case (whiteness >= 75 && whiteness <= 78):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 44');
            break;
        case (whiteness >= 79 && whiteness <= 83):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 46');
            break;
        case (whiteness >= 84 && whiteness <= 89):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 48');
            break;
        case (whiteness >= 90 && whiteness <= 94):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 50');
            break;
        case (whiteness >= 95 && whiteness <= 97):
            alert('Ваш розмір жіночої білизни в французькій системі розмірів дорівнюватиме 52');
            break;
        default:
            alert('Ваш розмір жіночої білизни не можна перетворити в французьку систему розмірів');
    }
}

// switch: if
{
    let color = prompt("Введіть колір", "");

    if (color === "red") {
    document.write("<div style='background-color: red;'>червоний</div>");
    } else if (color === "black") {
    document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === "blue") {
    document.write("<div style='background-color: blue;'>синій</div>");
    } else if (color === "green") {
    document.write("<div style='background-color: green;'>зелений</div>");
    } else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}

// noswitch
{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (key in cases) {
            return cases[key]();
        } else {
            return cases[defaultKey]();
        }
    }
    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function () {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default() {
            console.log('шото я не зрозумів')
        }
    })
}

// closure calc
{
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const rates = data.rates;
            const container = document.createElement('div');
            container.classList.add('currency-buttons-container');
            document.body.appendChild(container);

            for (let currency in rates) {
                const button = document.createElement('button');
                button.innerHTML = currency;
                button.onclick = () => {
                    const suma = +prompt(`Введіть сумму в ${currency}:`);
                    if (!suma || suma === null || suma === '') {
                        alert('Введіть коректну суму')
                    } else {
                        const convertedAmount = suma / rates[currency];
                        alert(`${suma} ${currency} дорівнюматиме ${convertedAmount.toFixed(2)} USD`);
                    }
                };
                container.appendChild(button);
            }
        });
}

// closure calc 2
fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const rates = data.rates;
        const from = document.getElementById('from');
        const to = document.getElementById('to');
        const rate = document.getElementById('rate');
        const result = document.getElementById('result');
        from.innerHTML = '';
        to.innerHTML = '';
        for (let currency in rates) {
            const fromOption = document.createElement('option');
            const toOption = document.createElement('option');
            fromOption.innerText = currency;
            toOption.innerText = currency;
            fromOption.value = currency;
            toOption.value = currency;
            from.appendChild(fromOption);
            to.appendChild(toOption);
        }
        from.onchange = () => {
            const fromCurrency = from.value;
            const toCurrency = to.value;
            const exchangeRate = rates[toCurrency] / rates[fromCurrency];
            rate.innerText = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
            const suma = +document.getElementById('suma').value;
            if (!isNaN(suma)) {
                result.innerText = 'Результат конвертації відобразиться тут:'
            }
        };
        to.onchange = () => {
            const fromCurrency = from.value;
            const toCurrency = to.value;
            const exchangeRate = rates[toCurrency] / rates[fromCurrency];
            rate.innerText = `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
            const suma = +document.getElementById('suma').value;
            if (!isNaN(suma)) {
                result.innerText = 'Результат конвертації відобразиться тут:'
            }
        };
        document.getElementById('suma').oninput = () => {
            const fromCurrency = from.value;
            const toCurrency = to.value;
            const exchangeRate = rates[toCurrency] / rates[fromCurrency];
            rate.innerText = `1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`;
            const suma = +document.getElementById('suma').value;
            if (!isNaN(suma)) {
                result.innerText = `При обміні ${suma} ${fromCurrency} ви отримаєте ${(suma * exchangeRate).toFixed(2)} ${toCurrency}`;
            }
        };
    });

// countries and cities
{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
        .then(res => res.json())
        .then(data => {
            const countriesSelect = document.querySelector('#countries');
            const citiesSelect = document.querySelector('#cities');
            for (const country of Object.keys(data)) {
                const option = document.createElement('option');
                option.value = country;
                option.innerText = country;
                countriesSelect.appendChild(option);
            }
            const choosedCountry = () => {
                citiesSelect.innerHTML = '';
                const selectedCountry = countriesSelect.value;
                for (const city of data[selectedCountry]) {
                    const option = document.createElement('option');
                    option.value = city;
                    option.innerText = city;
                    citiesSelect.appendChild(option);
                }
            };
            countriesSelect.addEventListener('change', choosedCountry);
            choosedCountry();
        })
}