// fetch basic
{
    const domElement = document.getElementById('basicTable');

    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            displayTable(domElement, luke);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    function displayTable(domElement, json) {

        const table = document.createElement('table');

        const tbody = document.createElement('tbody');

        for (const field in json) {
            const row = document.createElement('tr');

            const fieldCell = document.createElement('td');
            fieldCell.textContent = field;
            row.appendChild(fieldCell);

            const valueCell = document.createElement('td');
            valueCell.textContent = json[field];
            row.appendChild(valueCell);

            tbody.appendChild(row);
        }

        table.appendChild(tbody);

        domElement.appendChild(table);
    }
}

// fetch improved
{
    const domElement = document.getElementById('improvedTable');

    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            displayTable(domElement, luke);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    function displayTable(domElement, json) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        for (const field in json) {
            const row = document.createElement('tr');
            const fieldCell = document.createElement('td');
            fieldCell.textContent = field;
            row.appendChild(fieldCell);

            const valueCell = document.createElement('td');

            if (json[field].includes('https://swapi.dev/api/')) {
                const button = document.createElement('button');
                button.textContent = json[field];
                button.addEventListener('click', () => {
                    fetch(json[field])
                        .then((res) => res.json())
                        .then((data) => {
                            displayTable(valueCell, data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                });

                valueCell.appendChild(button);
            } else if (Array.isArray(json[field])) {
                const arrayTable = document.createElement('table');
                const arrayTbody = document.createElement('tbody');

                for (const item of json[field]) {
                    const arrayRow = document.createElement('tr');
                    const arrayCell = document.createElement('td');

                    if (item.includes('https://swapi.dev/api/')) {
                        const arrayButton = document.createElement('button');
                        arrayButton.textContent = item;
                        arrayButton.addEventListener('click', () => {
                            fetch(item)
                                .then((res) => res.json())
                                .then((data) => {
                                    displayTable(arrayCell, data);
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                        });

                        arrayCell.appendChild(arrayButton);
                    } else {
                        arrayCell.textContent = item;
                    }

                    arrayRow.appendChild(arrayCell);
                    arrayTbody.appendChild(arrayRow);
                }

                arrayTable.appendChild(arrayTbody);
                valueCell.appendChild(arrayTable);
            } else {
                valueCell.textContent = json[field];
            }

            row.appendChild(valueCell);
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        domElement.appendChild(table);
    }
}

// race
{
    const myfetch = fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(() => 'data');

    const delayPromise = new Promise(resolve => {
        const delay = Math.ceil(Math.random() * 1000);
        setTimeout(() => resolve('delayTime'), delay);
    });

    Promise.race([myfetch, delayPromise])
        .then(result => {
            const answer = (result === 'delayTime') ? 'Затримка була меншою ніж запит по мережі' : 'Запит по мережі був швидшим ніж затримка';
            console.log(answer);
        })
}

// Promisify: confirm
{
    function confirmPromise(text) {
        return new Promise((resolve, reject) => {
            const result = confirm(text);
            if (result) {
                resolve();
            } else {
                reject();
            }
        });
    }

    confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
        () => console.log('respect за посидючість і уважність'))
}

// Promisify: prompt
{
    function promptPromise(text) {
        return new Promise((resolve, reject) => {
            const result = prompt(text);
            if (result === null || result.trim() === "") {
                reject();
            } else {
                resolve(result);
            }
        });
    }

    promptPromise("Як тебе звуть?").then(
        (name) => console.log(`Тебе звуть ${name}`),
        () => console.log("Ну навіщо морозитися, нормально ж спілкувалися")
    )
}

// Promisify: LoginForm
// не робив поки