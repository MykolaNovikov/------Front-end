// Confirms
{
    let arr = ['Будеш каву?', 'Будеш чай?', 'Будеш пиво?', 'Може горілочки?'].map(confirm)
    alert(arr)
}

// Prompts
{
    let arr = [];
    arr[0] = prompt('Будеш каву?')
    arr[1] = prompt('Будеш чай?')
    arr[2] = prompt('Будеш пиво?')
    arr[3] = prompt('Може горілочки?')
    alert(arr)
}

// Item access
{
    let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    let user = arr[prompt('Введіть індекс масиву від 0 до 5')];
    alert(user)
}

// Item change
{
    let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    let user = +prompt('Введіть індекс масиву від 0 до 5');
    arr[user] = prompt('Введіть новe значення для цього індексу')
    alert(arr)
}

// Multiply table
{
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    console.log(arr)
}

// Multiply table slice

{
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    arr[0] = arr[0].slice(5);
    arr[1] = arr[1].slice(1);
    arr[2] = arr[2].slice(1);
    arr[3] = arr[3].slice(1);
    arr[4] = arr[4].slice(1);

    console.log(arr)
}

// IndexOf Word
{
    let arr = prompt('Введіть рядок з декількох слів');
    let newArr = arr.split(` `);
    let word = prompt('Яке з введених слів Вас цікавить?');
    let yourWord = newArr.indexOf(word);
    if (yourWord === -1) {
        alert('Такого слова немає в рядку')
    }
    else
        alert('Слово що Вас цікавить займає ' + (yourWord + 1) + ' місце у рядку')
}

// Reverse
{
    let arr = []
    let reverseArr = [];
    arr.push(prompt('Який Ваш улюблений напій?'));
    arr.push(prompt('Яка Ваша улюблена страва?'));
    arr.push(prompt('Яке у Вас хобі?'));
    arr.push(prompt('Який Ваш улюблений фільм?'));
    arr.push(prompt('Яка Ваша улюблена книга?'));
    let book = arr.pop();
    reverseArr.push(book)
    let film = arr.pop();
    reverseArr.push(film)
    let hobby = arr.pop();
    reverseArr.push(hobby)
    let dish = arr.pop();
    reverseArr.push(dish)
    let drink = arr.pop();
    reverseArr.push(drink)
    console.log(reverseArr)
}

// Reverse 2
{
    let arr = []
    let reverseArr = [];
    let reverseReverseArr = []
    arr.push(prompt('Який Ваш улюблений напій?'));
    arr.push(prompt('Яка Ваша улюблена страва?'));
    arr.push(prompt('Яке у Вас хобі?'));
    arr.push(prompt('Який Ваш улюблений фільм?'));
    arr.push(prompt('Яка Ваша улюблена книга?'));
    let book = arr.pop();
    reverseArr.push(book);
    let film = arr.pop();
    reverseArr.push(film);
    let hobby = arr.pop();
    reverseArr.push(hobby);
    let dish = arr.pop();
    reverseArr.push(dish);
    let drink = arr.pop();
    reverseArr.push(drink);
    let reversedrink = reverseArr.shift();
    reverseReverseArr.unshift(reversedrink);
    let reversedish = reverseArr.shift();
    reverseReverseArr.unshift(reversedish);
    let reversehobby = reverseArr.shift();
    reverseReverseArr.unshift(reversehobby);
    let reversefilm = reverseArr.shift();
    reverseReverseArr.unshift(reversefilm);
    let reversebook = reverseArr.shift();
    reverseReverseArr.unshift(reversebook);
    console.log(reverseReverseArr)
}

// Copy
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    const newArr = JSON.parse(JSON.stringify(arr));
    console.log(newArr)
}

// Deep Copy
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    const newArr = arr.slice(0);
    console.log(newArr)
}

// Array Equals
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    const arr2 = arr;
    console.log(arr, arr2)
}

// Flat
{
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    const newArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];
    console.log(newArr)
}

// Destruct 
{
    let [a, , , ,b, , , ,c] = prompt('Введіть рядок');
    console.log(a,b,c)
}

// Destruct default
{
    let [,a = "!", ,b ="!",c ="!"] = prompt('Введіть рядок');
    console.log(a,b,c)
}

// Multiply table rest
{
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    let [a,[f,...otherB],[g,...otherC],[h,...otherD],[i,...otherE]] = arr
    let newArr = [otherB,otherC,otherD,otherE]
    console.log(newArr)
}

// For Alert
{
    const names = ["John", "Paul", "George", "Ringo"];
    for (let name of names) {
        alert(`${name}`)
    }
}

// For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (const currency of currencies) {
        str += `<option>${currency}</option>`
    }
    str += "</select>"
    document.write(str)
}

// For Table Horizontal
{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table>"
    for (const name of names) {
        str += `<td>${name}</td>`
    }
    str += "</table>"
    document.write(str)
}

// For Table Vertical
{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table>"
    for (const name of names) {
        str += `<tr><td>${name}</tr></td>`
    }
    str += "</table>"
    document.write(str)
}

// For Table Letters
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table border = 1px>"
    for (const currency of currencies){ 
        str += `<tr></tr>`
        for (const letter of currency){ 
            str += `<td>${letter}</td>`
        }
    }
    str+= "</table>"
    document.write(str)
}
// For Multiply Table
{
    const arrs = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    let str = "<table border =1px>"
    for (const arr of arrs) {
        str += `<tr></tr>`
        for (const number of arr) {
            str += `<td>${number + ' '}</td>`
        }
    }
    str += "</table>"
    document.write(str)
}

// Function Capitalize
{
    const capitalize = str => {
        let result ;
        result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
        return result
    }
    console.log(capitalize("cANBerRa"))
}

// Map Capitalize
{
    let str = prompt('Введіть рядок');
    let arr = str.split(` `);
    let newArr = arr.map(str => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase())
    let newStr = newArr.join()
    console.log(newStr)
}

// Reduce HTML
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((a, b) => ( a + `<option>${b}</option>`),"")
    str += "</select>"
    document.write(str)
}