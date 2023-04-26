// Literals
{
    const aboutMe = {
        name: 'Mykola',
        fatherName: 'Sergiyovich',
        surname: 'Novikov',
        age: '32 years',
        eyeColour: 'green',
        hobby: 'football'
    }
    const car = {
        brand: 'Fiat',
        model: '500',
        color: 'red',
        weight: '850 kg'
    }
    const trimer = {
        brand: 'philips',
        model: 'MG 5720',
        continuousOperationTime: '80 minutes'
    }
    console.log(aboutMe, car, trimer)
}

// Literals expand
{
    const aboutMe = {
        name: 'Mykola',
        fatherName: 'Sergiyovich',
        surname: 'Novikov',
        age: '32 years',
        eyeColour: 'green',
        hobby: 'football'
    }
    const car = {
        brand: 'Fiat',
        model: '500',
        color: 'red',
        weight: '850 kg'
    }
    car[prompt('Яку характеристику Ви хотіли б додати до існуючих в об\'єкті car')] = prompt('Введіть значення')
    car[prompt('Яку характеристику Ви хотіли б ще додати до існуючих в об\'єкті car')] = prompt('Введіть значення')
    const trimer = {
        brand: 'philips',
        model: 'MG 5720',
        continuousOperationTime: '80 minutes'
    }

    console.log(aboutMe, car, trimer)
}

// Literals copy
{
    const car = {
        brand: 'Fiat',
        model: '500',
        color: 'red',
        weight: '850 kg'
    }
    let maxSpeed = prompt('Введіть значення максимальної швидкості автомобіля')
    const result = {
        maxSpeed,
        ...car
    }
    console.log(result)
}

// Html tree
{
    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:']
                    },
                    {
                        tagName: 'br/'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'OK'
                        },
                        children: ['OK']
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'Cansel'
                        },
                        children: ['Cansel']
                    }
                ]
            }
        ]
    }
    console.log(body.children[1].children[1].children)
    console.log(body.children[0].children[3].attrs['id'])
}

// Parent 
{
    body.children[0].parent = body
    body.children[1].parent = body
    body.children[0].children[0].parent = body.children[0]
    body.children[0].children[1].parent = body.children[0]
    body.children[0].children[2].parent = body.children[0]
    body.children[0].children[3].parent = body.children[0]
    body.children[1].children[0].parent = body.children[1]
    body.children[1].children[1].parent = body.children[1]
}

// Change OK
{
    body.children[1].children[0].attrs[prompt('Введіть атрибут тега який Ви хочете додати (змінити)')] = prompt('Введіть значення атрибута')
    console.log(body.children[1].children[0].attrs)
}

// Destructure
{
    const { children: [{ children: [{ children: [text] }, , , { attrs: { id: secondInputId } }] }, { children: [, { attrs: { id: secondButtonText } },] }] } = body;
    console.log(text);
    console.log(secondButtonText);
    console.log(secondInputId);
}

// Destruct array
{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"]
    const [, even1, , even2, , , ,] = arr
    const [odd1, , odd2, , odd3, , ,] = arr
    const [a, b, c, d, e, ...letters] = arr
    console.log(even1, even2, odd1, odd2, odd3, letters)
}

// Destruct string
{
    let arr = [1, "abc"]
    let [number, [s1, s2, s3]] = [arr[0], [...arr[1]]];
    console.log(number, s1, s2, s3);
}

// Destruct 2
{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }
    const { children: [{ name: name1 }, { name: name2 }] } = obj
    console.log(name1, name2)
}

// Destruct 3
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 10]
    const { 0: item1, 1: item2, length } = arr
    console.log(item1, item2, length)
}

// Copy delete
{
    const car = {
        brand: 'Fiat',
        model: '500',
        color: 'red',
        weight: '850 kg'
    }
    const { ...copyCar } = car
    console.log(copyCar)
}

// Table
{
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
      const columns = [];
      for (const person of persons) {
        for (const key in person) {
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
      for (const person of persons) {
        table += '<tr>';
        for (const column of columns) {
          const value = person[column] ? person[column] : '';
          table += `<td>${value}</td>`;
        }
        table += '</tr>';
      }
      table += '</table>';
      
      document.write(table);    
}







