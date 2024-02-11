// Temperature
{
    const temperatureOfFarentgeyt = temperature => (temperature * 9 / 5) + 32;
}

// RGB
{
    const red = (+ prompt('введіть значення насищеності червоного кольору.Від 0 до 255.'));
    const green = (+ prompt('введіть значення насищеності зеленого кольору.Від 0 до 255.'));
    const blue = (+ prompt('введіть значення насищеності синього кольору.Від 0 до 255.'));
    const hex = (r, g, b) => {
        const hexR = r < 16 ? `${r.toString(16).padStart(2, '0')}` : r.toString(16);
        const hexG = g < 16 ? `${g.toString(16).padStart(2, '0')}` : g.toString(16);
        const hexB = b < 16 ? `${b.toString(16).padStart(2, '0')}` : b.toString(16);
        return `#${hexR}${hexG}${hexB}`;
    };
    const newHex = hex(red, green, blue);
    console.log(newHex);
}

// Flats 
{
    const flat = (numberOfFloors, numberOfApartmentsPerFloor, numberOfTheDesiredApartment) => {
        numberOfFloors = prompt('Скільки поверхів у будинку ?');
        numberOfApartmentsPerFloor = prompt('Скільки квартир на поверсі ?');
        numberOfTheDesiredApartment = prompt('Введіть номер потрібної квартири');
        const entrance = Math.floor((numberOfTheDesiredApartment - 1) / (numberOfFloors * numberOfApartmentsPerFloor) + 1);
        const remainderFromDivision = (numberOfTheDesiredApartment - 1) % (numberOfFloors * numberOfApartmentsPerFloor);
        const floor = Math.floor(remainderFromDivision / numberOfApartmentsPerFloor) + 1;
        return { entrance, floor }
    }
    console.log(flat())
}

// Credentials
{
    const credentials = (name, surname, fatherName) => {
        name = prompt("Введіть Ваше ім'я");
        fatherName = prompt('Введіть Ваше по-батькові');
        surname = prompt('Введіть Ваше прізвище');
        const arr = [name, fatherName, surname]
        const newArr = arr.map(arr => arr.slice(0, 1).toUpperCase() + arr.slice(1).toLowerCase())
        name = newArr[0];
        fatherName = newArr[1];
        surname = newArr[2];
        const fullName = surname + ' ' + name + ' ' + fatherName;
        return { name, surname, fatherName, fullName }
    }
    console.log(credentials())
}

// New line
{
    const str = prompt('Введіть рядок. Ви можете вводити \\n як маркер нового рядка.');
    const newStr = () => {
        line = str.split(`\\n`).join(`\n`)
        return (line);
    }
    alert(newStr());
}

// Prompt OR
{
    const age = (value, defaultValue) => prompt(value) || defaultValue;
    const ageUser = age('Скільки вам років?', '32');
    if (ageUser === null || ageUser === '') {
        alert(`Ви народились ${2023 - defaultValue} року`);
    }
    else
        alert(`Ви народились ${2023 - ageUser} року`);
}

// Login And Password
{
    const rightLogin = 'admin';
    const rightPassword = 'qwerty';
    const checkLoginAndPassword = (rightLogin, rightPassword) => {
        let login = prompt('Введіть логін');
        let password;
        if (login !== rightLogin) {
            alert('Логін не вірний');
            return false;
        } else {
            password = prompt('Введіть пароль');
            if (password !== rightPassword) {
                alert('Не вірний пароль');
                return false;
            }
        }
        return true;
    };
    const rightLoginAndRightPassword = checkLoginAndPassword(rightLogin, rightPassword);
    if (rightLoginAndRightPassword === false) {
        alert('Ви не увійшли на сайт');
    } else {
        alert('Вітаємо у нас на сайті')
    }
}

// For Table
{
    const arrs = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    const creatingTable = (arrs) => {
        let str = "<table border =1px>"
        for (const arr of arrs) {
            str += `<tr></tr>`
            for (const number of arr) {
                str += `<td>${number + ' '}</td>`
            }
        }
        str += "</table>"
        return str
    }
    html = creatingTable(arrs)
    console.log(html)
}

// Filter Lexics
{
    const badWords = ['бляха', 'муха', "пляшка", "шабля"];
    function filterWords () {
        const words = str.split(' ');
        const filteredWords = words.filter(word => {
            return !badWords.includes(word);
        });
        const filteredStr = filteredWords.join(' ');
        return filteredStr;
    }
    const str = prompt('Введіть рядок.');
    const newStr = filterWords(str);
    console.log(newStr);
}

// Currency Table
{
    const exchangeRates = () => {
        fetch('https://open.er-api.com/v6/latest/USD')
          .then(res => res.json())
          .then(data => {
            const { rates: currencies } = data;
            const whichCurrency = Object.keys(currencies);
            let arrs = [[...whichCurrency]];
            for (const currency1 of whichCurrency) {
              let arr = [currency1];
              for (const currency2 of whichCurrency) {
                const crossRate = 1 / currencies[currency1] * currencies[currency2];
                arr.push(crossRate.toFixed(2));
              }
              arrs.push(arr);
            }
            const html = creatingTable(arrs);
            document.write(html);
          });
      }
      
      const creatingTable = (arrs) => {
        let str = "<table border =1px>"
        for (const arr of arrs) {
          str += `<tr></tr>`
          for (const number of arr) {
            str += `<td>${number + ' '}</td>`
          }
        }
        str += "</table>"
        return str
      }
      
      exchangeRates();
}
// Form
{
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
      };
      
      const form = document.createElement('form');
      
      Object.entries(car).forEach(([key, value]) => {
        const label = document.createElement('label');
        label.textContent = `${key}: `;
      
        const input = document.createElement('input');
        input.name = key;
        input.type = typeof value === 'boolean' ? 'checkbox' : 'text';
        input.value = value;
        if (input.type === 'checkbox') {
          input.checked = value;
        }
      
        label.appendChild(input);
        form.appendChild(label);
      });
      
      document.body.appendChild(form);
}

// Table
{
    function creatingTable(array) {
        const newArray = [...array];
        const columns = [];
        for (const obj of newArray) {
          for (const key in obj) {
            if (!columns.includes(key)) {
              columns.push(key);
            }
          }
        }
        let table = '<table border = 1px><tr>';
        for (const column of columns) {
          table += `<th>${column}</th>`;
        }
        table += '</tr>';
        for (const obj of newArray) {
          table += '<tr>';
          for (const column of columns) {
            const value = obj[column] ? obj[column] : '';
            table += `<td>${value}</td>`;
          }
          table += '</tr>';
        }
        table += '</table>';
        document.write(table);
      }
      const persons = [
              {
                  name: 'Марія',
                  fatherName: 'Іванівна',
                  surname: 'Іванова',
                  sex: 'female'
              },
              {
                  name: 'Миколай',
                  fatherName: 'Іванович',
                  surname: 'Іванов',
                  age: 15
              },
              {
                  name: 'Петро',
                  fatherName: 'Іванович',
                  surname: 'Іванов',
                  married: true
              },
      ]; 
      creatingTable(persons);
}

// Divide
solution in HTML

// Calc Func
{
    function calculateFuelCost(distance, fuelConsumption, fuelPrice) {
        let needFuel = distance/100 * fuelConsumption;
        let costOfFuel = needFuel * fuelPrice;
        return { needFuel, costOfFuel };
        }
        
        let distance = prompt('Яку відстань треба проїхати, в км?');
        let fuelConsumption = prompt('Який розхід палива на 100 км?');
        let fuelPrice = prompt('Скільки коштує літр палива, в грн?');
        
        let result = calculateFuelCost(distance, fuelConsumption, fuelPrice);
        
        alert(`Вам на паливо потрібно ${result.costOfFuel.toFixed(2)} грн`);
}
// Calc Live
solution in HTML










