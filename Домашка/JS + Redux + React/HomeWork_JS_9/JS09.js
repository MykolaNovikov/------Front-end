// while confirm
{
    let i = 0
    while (!confirm('Я буду з\'являтись поки Ви не натиснете "OK"')) {
        alert('Та кажу ж що буду з\'являтись поки Ви не натиснете "OK"')
        i++
    }
    alert(`Ви натиснули 'Отмена' ${i} разів.`)
}

// array fill
{
    let arr = [];
    let text;
    while ((text = prompt("Введіть щось і я додам це до масиву")) !== null) {
        arr.push(text);
    }
    console.log(arr);
}

// array fill nopush
{
    let arr = [];
    let text;
    let i = 0;
    while ((text = prompt("Введіть щось і я додам це до масиву")) !== null) {
        arr[i] = text;
        i++;
    }
    console.log(arr);
}

// infinite probability
{
    let i = 0;
    while (true) {
        if (Math.random() > 0.9) {
            break;
        }
        i++;
    }
    alert(`Рандомне число,більше за 0.9 випало через ${i} разів`);
}

// empty loop
{
    while (true) {
        let text = prompt('Можете вводити що завгодно. Натисніть "Скасувати", щоб продовжити цикл, або "ОК", щоб завершити його.');

        if (text === null) {

        } else {
            break;
        }
    }
}

// progression sum
{
    let n = 100500;
    let suma = 0;
    for (let i = 1; i <= n; i += 3) {
        suma += i;
    }
    console.log(suma)
}

// chess one line
{
    let strLength = 10;
    let str = '';
    for (let i = 1; i <= strLength; i++) {
        if (i % 2 === 0) {
            str += ' ';
        } else {
            str += '#';
        }
    }
    console.log(str);
}

// numbers
{
    let str = "";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            str += j;
        }
        str += '\n'
    }
    console.log(str);
}

// chess
{
    let rows = 10;
    let columns = 12;
    let str = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if ((i + j) % 2 === 0) {
                str += '.';
            } else {
                str += '#';
            }
        }
        str += '\n';
    }
    console.log(str);
}

// cubes
{
    let arr = [];
    let n = prompt("Введіть щось.");
    for (let i = 0; i < n.length; i++) {
        arr.push((i ** 3));
    }
    console.log(arr);
}

// multiply table
{
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr[i - 1] = [];
        for (let j = 1; j <= 10; j++) {
            arr[i - 1][j - 1] = (i - 1) * (j - 1);
        }
    }
    console.log(arr[5][6])
}

// Ромбік
{
    let size = 11;
    let halfNeedSize = Math.floor(size / 2);
    for (let row = 0; row < size; row++) {
        let space = Math.abs(halfNeedSize - row);
        let hashe = size - (space * 2);
        let line = "";

        for (let i = 0; i < space; i++) {
            line += ".";
        }

        for (let i = 0; i < hashe; i++) {
            line += "#";
        }

        for (let i = 0; i < space; i++) {
            line += ".";
        }

        console.log(line);
    }
}

// read array of objects
{
    function readArrayOfObjects() {
        let arr = [];
        while (true) {
            let object = {};
            let adding = true;
            while (true) {
                let key = prompt("Введіть ключ об'єкта:");
                if (key === null) {
                    adding = false;
                    break;
                }
                let value = prompt(`Введіть значення для ключа '${key}':`);
                if (value === null) {
                    adding = false;
                    break;
                }
                object[key] = value;
                let yetPrompt = confirm("Бажаєте продовжити введення значень для об'єкта?");
                if (!yetPrompt) {
                    break;
                }
            }
            arr.push(object);
            let yetPrompt = confirm("Бажаєте додати ще один об'єкт?");
            if (!yetPrompt || !adding) {
                break;
            }
        }
        return arr;
    }
    console.log(readArrayOfObjects())
}

// DOM: multiply table
{
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.innerText = '0';
    for (let i = 0; i < 10; i++) {
        const headerCell = document.createElement('th');
        headerCell.innerText = i;
        headerRow.appendChild(headerCell);
        headerCell.style.border = '1px solid black';
    }
    table.appendChild(headerRow);
    for (let i = 1; i < 10; i++) {
        const row = document.createElement('tr');
        const rowHeaderCell = document.createElement('th');
        rowHeaderCell.innerText = i;
        row.appendChild(rowHeaderCell);
        rowHeaderCell.style.border = '1px solid black';
        for (let j = 1; j < 10; j++) {
            const cell = document.createElement('td');
            cell.innerText = i * j;
            cell.style.border = '1px solid black';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

// DOM: highlight cell
{
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.innerText = '0';
    for (let i = 0; i < 10; i++) {
        const headerCell = document.createElement('th');
        headerCell.innerText = i;
        headerRow.appendChild(headerCell);
        headerCell.style.border = '1px solid black';
    }
    table.appendChild(headerRow);
    for (let i = 1; i < 10; i++) {
        const row = document.createElement('tr');
        const rowHeaderCell = document.createElement('th');
        rowHeaderCell.innerText = i;
        row.appendChild(rowHeaderCell);
        rowHeaderCell.style.border = '1px solid black';
        for (let j = 1; j < 10; j++) {
            const cell = document.createElement('td');
            cell.innerText = i * j;
            cell.style.border = '1px solid black';
            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = 'grey';
            });
            cell.addEventListener('mouseout', function () {
                cell.style.backgroundColor = '';
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

// DOM: Highlight cross
{
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.innerText = '0';
    for (let i = 0; i < 10; i++) {
        const headerCell = document.createElement('th');
        headerCell.innerText = i;
        headerRow.appendChild(headerCell);
        headerCell.style.border = '1px solid black';
    }
    table.appendChild(headerRow);
    for (let i = 1; i < 10; i++) {
        const row = document.createElement('tr');
        const rowHeaderCell = document.createElement('th');
        rowHeaderCell.innerText = i;
        row.appendChild(rowHeaderCell);
        rowHeaderCell.style.border = '1px solid black';
        for (let j = 1; j < 10; j++) {
            const cell = document.createElement('td');
            cell.innerText = i * j;
            cell.style.border = '1px solid black';
            cell.addEventListener('mouseover', function () {
                for (let x = 0; x < 10; x++) {
                    const rowCell = this.parentElement.cells[x];
                    rowCell.style.backgroundColor = 'lightgrey';
                }
                for (let x = 0; x < 10; x++) {
                    const columnCell = table.rows[x].cells[this.cellIndex];
                    columnCell.style.backgroundColor = 'lightgrey';
                }
                this.style.backgroundColor = 'grey';
            });
            cell.addEventListener('mouseout', function () {
                for (let x = 0; x < 10; x++) {
                    const rowCell = this.parentElement.cells[x];
                    rowCell.style.backgroundColor = '';
                }
                for (let x = 0; x < 10; x++) {
                    const columnCell = table.rows[x].cells[this.cellIndex];
                    columnCell.style.backgroundColor = '';
                }
                this.style.backgroundColor = '';
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}