// Number: odd
{
    let yourNumber = prompt('Введіть число');
    if (isNaN(yourNumber))
        alert('Вам потрібно ввести число,а не те що Ви наклацяли')
    else
        if (yourNumber % 2 === 0)
            alert('Ви ввели парне число');
        else
            alert('Ви ввели непарне число');
}

// String: lexics
{
    let yourText = prompt('Введіть текст');
    let incorrectWord = yourText.includes('хуйло');
    let incorrectWord_0 = yourText.includes('рускій');
    if (incorrectWord, incorrectWord_0)
        alert('навіщо ви пишете непристойні слова')
    else
        alert('дякую що написали без некоректних слів')
}

// Boolean 
{
    let answer = confirm('будеш каву?');
    if (answer) {
        alert('тримай');
    }
    else
        alert('даремно,вона смачна');
}

// Boolean: if
{
    let answer = confirm('будеш каву??') && 'тримай каву' || 'тримай чай'
    alert(answer)
}

// Comparison: sizes
{
    let yourSize = +prompt('Введіть ваш розмір верхньго одягу');
    if (yourSize === 40) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 36')
    }
    if (yourSize === 42) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 38')
    }
    if (yourSize === 44) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 40')
    }
    if (yourSize === 46) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 42')
    }
    if (yourSize === 48) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 44')
    }
    if (yourSize === 50) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 46')
    }
    if (yourSize === 52) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 48')
    }
    if (yourSize === 54) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 50')
    }
    let whiteness = +prompt('Введіть ваш ваш охвал талії');
    if (whiteness === 63 || whiteness === 64 || whiteness === 65) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 38')
    }
    if (whiteness === 66 || whiteness === 67 || whiteness === 68 || whiteness === 69) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 40')
    }
    if (whiteness === 70 || whiteness === 71 || whiteness === 72 || whiteness === 73 || whiteness === 74) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 42')
    }
    if (whiteness === 75 || whiteness === 76 || whiteness === 77 || whiteness === 78) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 44')
    }
    if (whiteness === 79 || whiteness === 80 || whiteness === 81 || whiteness === 82 || whiteness === 83) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 46')
    }
    if (whiteness === 84 || whiteness === 85 || whiteness === 86 || whiteness === 87 || whiteness === 88 || whiteness === 89) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 48')
    }
    if (whiteness === 90 || whiteness === 91 || whiteness === 92 || whiteness === 93 || whiteness === 94) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 50')
    }
    if (whiteness === 95 || whiteness === 96 || whiteness === 97) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 52')
    }
}

// Ternary
{
    let sex = confirm('Яка ваша стать?Ви чоловік') ? 'Ви чоловік' : 'Ви жінка';
    alert(sex)
}

// Prompt: or
{
    let ageUser = prompt('Скільки вам років?');
    if (ageUser === null || ageUser === '') {
        alert('Ви не ввели свій вік')
    }
    else
        alert(`Ви народились ${2023 - ageUser} року`);
}

// Confirm: or this days
{
    let question = confirm('Шопінг?');
    if (question === false) {
        alert('ти-бяка')
    }
    else
        alert('Правильний вибір !!');
}

// Default: or
{
    let name = prompt('Введіть Ваше ім\'я? чи будете Анон') || 'Анон';
    let fatherName = prompt('Введіть Ваше по-батькові? чи будете Анонович') || 'Анонович';
    let surName = prompt('Введіть Ваше прізвище? чи будете Анонов') || 'Анонов'
    alert('Ви зареестровані як ' + surName + ' ' + name + ' ' + fatherName)
}

// Default: if
{
    let name = prompt('Введіть Ваше ім\'я? чи будете Анон');
    let fatherName = prompt('Введіть Ваше по-батькові? чи будете Анонович');
    let surName = prompt('Введіть Ваше прізвище? чи будете Анонов');
    if (name === null || name === '') {
        name = 'Анон'
    }
    if (fatherName === null || fatherName === '') {
        fatherName = 'Анонович'
    }
    if (surName === null || surName === '') {
        surName = 'Анонов'
    }
    alert('Ви зареестровані як ' + surName + ' ' + name + ' ' + fatherName)
}

// Login and password
{
    let login = prompt('Введіть логін');
    let password;
    rightLogin = 'admin';
    rightPassword = 'qwerty';
    if (login !== rightLogin) {
        alert('Логін не вірний')
    }
    else {
        password = prompt('Введіть пароль')
        if (password !== rightPassword) {
            alert('Не вірний пароль')
        }
    }
    if (login === rightLogin && password === rightPassword) {
        alert('Вітаємо у нас на сайті')
    }
}

// Currency exchange
{
    let currencyExchange = prompt('Яка валюта вас цікавить? USD(долар США), EUR(Евро),EPG(Египетський фунт)');
    let operationToCurrencyExchange = confirm('Ви бажаете продати валюту?');
    let rate;
    let suma;
    let yourMoney;
    if (currencyExchange.toUpperCase() === 'USD') {
        rate = operationToCurrencyExchange ? 37.71 : 37.80
    }
    if (currencyExchange.toUpperCase() === 'EUR') {
        rate = operationToCurrencyExchange ? 41.15 : 41.34
    }
    if (currencyExchange.toUpperCase() === 'EPG') {
        rate = operationToCurrencyExchange ? 1.05 : 1.19
    }
    suma = +prompt('Введіть сумму для обміну');
    if (operationToCurrencyExchange) {
        yourMoney = (suma * rate).toFixed(2);
        alert('При продажу ' + suma + ' ' + currencyExchange.toUpperCase() + ' Ви отримаете ' + yourMoney + ' гривень')
    }
    else {
        yourMoney = (suma / rate).toFixed(2);
        alert('За ' + suma + ' гривень' + ' Ви можете придбати ' + yourMoney + ' ' + currencyExchange.toUpperCase())
    }
}

// Scissors
{
    let user = prompt('Зробіть свій вибір ! папір,ножиці чи камінь')
    let computer = Math.round(Math.random() * 3);
    if (user === 'папір' && computer === 2) {
        alert('Ви програли,у комп\'ютера ножиці')
    }
    if (user === 'папір' && computer === 3) {
        alert('Ви перемогли,у комп\'ютера камінь')
    }
    if (user === 'папір' && computer === 1) {
        alert('нічия,у комп\'ютера також папір')
    }
    if (user === 'ножиці' && computer === 3) {
        alert('Ви програли,у комп\'ютера камінь')
    }
    if (user === 'ножиці' && computer === 1) {
        alert('Ви перемогли,у комп\'ютера папір')
    }
    if (user === 'ножиці' && computer === 2) {
        alert('нічия,,у комп\'ютера також ножиці')
    }
    if (user === 'камінь' && computer === 1) {
        alert('Ви програли,у комп\'ютера папір')
    }
    if (user === 'камінь' && computer === 2) {
        alert('Ви перемогли,у комп\'ютера ножиці')
    }
    if (user === 'камінь' && computer === 3) {
        alert('нічия,у комп\'ютера також камінь')
    }
    console.log(computer) // для чистоти результату
}

// Додаткове завдання
{
let yourChoouse = prompt('Введіть назву завдання');
if (yourChoouse === 'Number: odd') {
        let yourNumber = prompt('Введіть число');
        if (isNaN(yourNumber))
            alert('Вам потрібно ввести число,а не те що Ви наклацяли')
        else
            if (yourNumber % 2 === 0)
                alert('Ви ввели парне число');
            else
                alert('Ви ввели непарне число');
    }
if (yourChoouse === 'String: lexics') {
        let yourText = prompt('Введіть текст');
        let incorrectWord = yourText.includes('хуйло');
        let incorrectWord_0 = yourText.includes('рускій');
        if (incorrectWord, incorrectWord_0)
            alert('навіщо ви пишете непристойні слова')
        else
            alert('дякую що написали без некоректних слів')
    }
if (yourChoouse === 'Boolean') {
        let answer = confirm('будеш каву?');
        if (answer) {
            alert('тримай');
        }
        else
            alert('даремно,вона смачна');
    }
if (yourChoouse === 'Boolean: if'){
    let answer = confirm('будеш каву??') && 'тримай каву' || 'тримай чай'
    alert(answer)
   }
if (yourChoouse === 'Comparison: sizes'){
    let yourSize = +prompt('Введіть ваш розмір верхньго одягу');
    if (yourSize === 40) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 36')
    }
    if (yourSize === 42) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 38')
    }
    if (yourSize === 44) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 40')
    }
    if (yourSize === 46) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 42')
    }
    if (yourSize === 48) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 44')
    }
    if (yourSize === 50) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 46')
    }
    if (yourSize === 52) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 48')
    }
    if (yourSize === 54) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 50')
    }
    let whiteness = +prompt('Введіть ваш ваш охвал талії');
    if (whiteness === 63 || whiteness === 64 || whiteness === 65) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 38')
    }
    if (whiteness === 66 || whiteness === 67 || whiteness === 68 || whiteness === 69) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 40')
    }
    if (whiteness === 70 || whiteness === 71 || whiteness === 72 || whiteness === 73 || whiteness === 74) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 42')
    }
    if (whiteness === 75 || whiteness === 76 || whiteness === 77 || whiteness === 78) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 44')
    }
    if (whiteness === 79 || whiteness === 80 || whiteness === 81 || whiteness === 82 || whiteness === 83) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 46')
    }
    if (whiteness === 84 || whiteness === 85 || whiteness === 86 || whiteness === 87 || whiteness === 88 || whiteness === 89) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 48')
    }
    if (whiteness === 90 || whiteness === 91 || whiteness === 92 || whiteness === 93 || whiteness === 94) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 50')
    }
    if (whiteness === 95 || whiteness === 96 || whiteness === 97) {
        alert('Ваш розмір в французькій системі розмірів дорівнюватиме 52')
    }
    }
if (yourChoouse === 'Ternary'){
    let sex = confirm('Яка ваша стать?Ви чоловік') ? 'Ви чоловік' : 'Ви жінка';
    alert(sex)
   }
if (yourChoouse === 'Prompt: or'){
    let ageUser = prompt('Скільки вам років?');
    if (ageUser === null || ageUser === '') {
        alert('Ви не ввели свій вік')
    }
    else
        alert(`Ви народились ${2023 - ageUser} року`);
    }
if (yourChoouse === 'Confirm: or this days'){
    let question = confirm('Шопінг?');
    if (question === false) {
        alert('ти-бяка')
    }
    else
        alert('Правильний вибір !!');
    }
if (yourChoouse === 'Default: or'){
    let name = prompt('Введіть Ваше ім\'я? чи будете Анон') || 'Анон';
    let fatherName = prompt('Введіть Ваше по-батькові? чи будете Анонович') || 'Анонович';
    let surName = prompt('Введіть Ваше прізвище? чи будете Анонов') || 'Анонов'
    alert('Ви зареестровані як ' + surName + ' ' + name + ' ' + fatherName)
    }
if (yourChoouse === 'Default: if'){
    let name = prompt('Введіть Ваше ім\'я? чи будете Анон');
    let fatherName = prompt('Введіть Ваше по-батькові? чи будете Анонович');
    let surName = prompt('Введіть Ваше прізвище? чи будете Анонов');
    if (name === null || name === '') {
        name = 'Анон'
    }
    if (fatherName === null || fatherName === '') {
        fatherName = 'Анонович'
    }
    if (surName === null || surName === '') {
        surName = 'Анонов'
    }
    alert('Ви зареестровані як ' + surName + ' ' + name + ' ' + fatherName)
    }
if (yourChoouse === 'Login and password'){
    let login = prompt('Введіть логін');
    let password;
    rightLogin = 'admin';
    rightPassword = 'qwerty';
    if (login !== rightLogin) {
        alert('Логін не вірний')
    }
    else {
        password = prompt('Введіть пароль')
        if (password !== rightPassword) {
            alert('Не вірний пароль')
        }
    }
    if (login === rightLogin && password === rightPassword) {
        alert('Вітаємо у нас на сайті')
    }
    }
if (yourChoouse === 'Currency exchange'){
    let currencyExchange = prompt('Яка валюта вас цікавить? USD(долар США), EUR(Евро),EPG(Египетський фунт)');
    let operationToCurrencyExchange = confirm('Ви бажаете продати валюту?');
    let rate;
    let suma;
    let yourMoney;
    if (currencyExchange.toUpperCase() === 'USD') {
        rate = operationToCurrencyExchange ? 37.71 : 37.80
    }
    if (currencyExchange.toUpperCase() === 'EUR') {
        rate = operationToCurrencyExchange ? 41.15 : 41.34
    }
    if (currencyExchange.toUpperCase() === 'EPG') {
        rate = operationToCurrencyExchange ? 1.05 : 1.19
    }
    suma = +prompt('Введіть сумму для обміну');
    if (operationToCurrencyExchange) {
        yourMoney = (suma * rate).toFixed(2);
        alert('При продажу ' + suma + ' ' + currencyExchange.toUpperCase() + ' Ви отримаете ' + yourMoney + ' гривень')
    }
    else {
        yourMoney = (suma / rate).toFixed(2);
        alert('За ' + suma + ' гривень' + ' Ви можете придбати ' + yourMoney + ' ' + currencyExchange.toUpperCase())
    }
    }
if (yourChoouse === 'Scissors'){
    let user = prompt('Зробіть свій вибір ! папір,ножиці чи камінь')
    let computer = Math.round(Math.random() * 3);
    if (user === 'папір' && computer === 2) {
        alert('Ви програли,у комп\'ютера ножиці')
    }
    if (user === 'папір' && computer === 3) {
        alert('Ви перемогли,у комп\'ютера камінь')
    }
    if (user === 'папір' && computer === 1) {
        alert('нічия,у комп\'ютера також папір')
    }
    if (user === 'ножиці' && computer === 3) {
        alert('Ви програли,у комп\'ютера камінь')
    }
    if (user === 'ножиці' && computer === 1) {
        alert('Ви перемогли,у комп\'ютера папір')
    }
    if (user === 'ножиці' && computer === 2) {
        alert('нічия,,у комп\'ютера також ножиці')
    }
    if (user === 'камінь' && computer === 1) {
        alert('Ви програли,у комп\'ютера папір')
    }
    if (user === 'камінь' && computer === 2) {
        alert('Ви перемогли,у комп\'ютера ножиці')
    }
    if (user === 'камінь' && computer === 3) {
        alert('нічия,у комп\'ютера також камінь')
    }
    console.log(computer) // для чистоти результату
}
else 
alert ('Ви ввели не правильну назву завдання')
}
