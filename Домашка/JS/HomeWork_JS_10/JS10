// Arrow to Functions
{
    function temperatureOfFarentgeyt() {
        return (temperature * 9 / 5) + 32;
    }
    const temperature = +prompt('введіть значення температури в Цельсіях');
    console.log(temperatureOfFarentgeyt())
}
{
    function hex(red, green, blue) {
        const hexR = red < 16 ? `${red.toString(16).padStart(2, '0')}` : red.toString(16);
        const hexG = green < 16 ? `${green.toString(16).padStart(2, '0')}` : green.toString(16);
        const hexB = blue < 16 ? `${blue.toString(16).padStart(2, '0')}` : blue.toString(16);
        return `#${hexR}${hexG}${hexB}`;
    }
    const red = +prompt('введіть значення насищеності червоного кольору.Від 0 до 255.');
    const green = +prompt('введіть значення насищеності зеленого кольору.Від 0 до 255.');
    const blue = +prompt('введіть значення насищеності синього кольору.Від 0 до 255.');
    const newHex = hex(red, green, blue);
    console.log(newHex);
}
{
    function EntranceAndFloor() {
        const numberOfFloors = +prompt('Скільки поверхів у будинку ?');
        const numberOfApartmentsPerFloor = +prompt('Скільки квартир на поверсі ?');
        const numberOfTheDesiredApartment = +prompt('Введіть номер потрібної квартири');
        const entrance = Math.floor((numberOfTheDesiredApartment - 1) / (numberOfFloors * numberOfApartmentsPerFloor) + 1);
        const remainderFromDivision = (numberOfTheDesiredApartment - 1) % (numberOfFloors * numberOfApartmentsPerFloor);
        const floor = Math.floor(remainderFromDivision / numberOfApartmentsPerFloor) + 1;
        return { entrance, floor };
    }
    console.log(EntranceAndFloor());
}
{
    function yourName() {
        const name = prompt("Введіть Ваше ім'я");
        const fatherName = prompt('Введіть Ваше по-батькові');
        const surname = prompt('Введіть Ваше прізвище');
        const arr = [name, fatherName, surname]
        const newArr = arr.map(arr => arr.slice(0, 1).toUpperCase() + arr.slice(1).toLowerCase())
        const fullName = newArr[2] + ' ' + newArr[0] + ' ' + newArr[1];
        return { name: newArr[0], surname: newArr[2], fatherName: newArr[1], fullName }
    }
    console.log(yourName())
}
{
    function replaceStr(str) {
        const line = str.split(`\\n`).join(`\n`);
        return line;
    }
    const str = prompt('Введіть рядок. Ви можете вводити \\n як маркер нового рядка.');
    const newStr = replaceStr(str);
    alert(newStr);
}

// createPerson
{
    function createPerson(name, surname) {
        return {
            name,
            surname,
            getFullName() {
                let fullName = this.name + ' ' + this.surname;
                if (this.fatherName) {
                    fullName = this.name + ' ' + this.fatherName + ' ' + this.surname;
                }
                return fullName;
            }
        };
    }
    const a = createPerson("Вася", "Пупкін");
    const b = createPerson("Ганна", "Іванова");
    const c = createPerson("Єлизавета", "Петрова");
    console.log(a.getFullName());
    a.fatherName = 'Іванович';
    console.log(a.getFullName());
    console.log(b.getFullName());
}

// createPersonClosure
{
    function createPersonClosure(name, surname) {
        let fatherName;
        let age;
        function nameCheck(value) {
            if (typeof value !== 'string' || value.charAt(0).toUpperCase() !== value.charAt(0)) {
                return false;
            } else {
                return true;
            }
        }
        function ageVerification(value) {
            if (typeof value !== 'number' || value < 0 || value > 100) {
                return false;
            } else {
                return true;
            }
        }
        function getName() {
            return name;
        }
        function getSurname() {
            return surname;
        }
        function getFatherName() {
            return fatherName;
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            let fullName = surname + ' ' + name;
            if (fatherName) {
                fullName += ' ' + fatherName;
            }
            return fullName;
        }
        function setName(newName) {
            if (nameCheck(newName)) {
                name = newName;
            }
            return name;
        }
        function setSurname(newSurname) {
            if (nameCheck(newSurname)) {
                surname = newSurname;
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (nameCheck(newFatherName)) {
                fatherName = newFatherName;
            }
            return fatherName;
        }
        function setAge(newAge) {
            if (ageVerification(newAge)) {
                age = newAge;
            }
            return age;
        }
        function setFullName(newFullName) {
            const names = newFullName.split(' ');
            if (names.length >= 2 && nameCheck(names[0]) && nameCheck(names[1])) {
                name = names[0];
                surname = names[1];
                fatherName = names[2];
            }
            return getFullName();
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName
        };
    }
    const a = createPersonClosure("Вася", "Пупкін");
    const b = createPersonClosure("Ганна", "Іванова");
    console.log(a.getName());
    a.setAge(15);
    console.log(a.getAge());
    a.setAge(150);
    console.log(a.getAge());
    b.setFullName("Петрова Ганна Миколаївна");
    console.log(b.getFatherName());
}

// createPersonClosureDestruct
{
    function createPerson(fullName) {
        const [name = 'Анон', surname = 'Анонов', fatherName = 'Анонович'] = fullName.split(' ');
        return { name, surname, fatherName };
    }
    function createPersonClosureDestruct({ name = 'Анон', surname = 'Анонов', fatherName = 'Анонович', age = 0 } = {}) {
        function nameCheck(value) {
            if (typeof value !== 'string' || value.charAt(0).toUpperCase() !== value.charAt(0)) {
                return false;
            } else {
                return true;
            }
        }
        function ageVerification(value) {
            if (typeof value !== 'number' || value < 0 || value > 100) {
                return false;
            } else {
                return true;
            }
        }
        function getName() {
            return name;
        }
        function getSurname() {
            return surname;
        }
        function getFatherName() {
            return fatherName;
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            let fullName = surname + ' ' + name;
            if (fatherName) {
                fullName += ' ' + fatherName;
            }
            return fullName;
        }
        function setName(newName) {
            if (nameCheck(newName)) {
                name = newName;
            }
            return name;
        }
        function setSurname(newSurname) {
            if (nameCheck(newSurname)) {
                surname = newSurname;
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (nameCheck(newFatherName)) {
                fatherName = newFatherName;
            }
            return fatherName;
        }
        function setAge(newAge) {
            if (ageVerification(newAge)) {
                age = newAge;
            }
            return age;
        }
        function setFullName(newFullName) {
            const names = newFullName.split(' ');
            if (names.length >= 2 && nameCheck(names[0]) && nameCheck(names[1])) {
                name = names[0];
                surname = names[1];
                fatherName = names[2];
            }
            return getFullName();
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName
        };
    }
    const a = createPersonClosureDestruct(createPerson("Вася Пупкін"));
    const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });
    console.log(a.getName());
    a.setAge(15);
    console.log(a.getAge());
    a.setAge(150);
    console.log(a.getAge());
    b.setFullName("Петрова Ганна Миколаївна");
    console.log(b.getFatherName());
}

// isSorted
{
    function isSorted(...numbers) {
        let prevNumber = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] !== "number" || prevNumber >= numbers[i]) {
                return false;
            }
            prevNumber = numbers[i];
        }
        return true;
    }
}

// Test isSorted
{
    function isSorted(...numbers) {
        let prevNumber = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] !== "number" || prevNumber >= numbers[i]) {
                return false;
            }
            prevNumber = numbers[i];
        }
        return true;
    }
    let arr = [];
    let text;
    while ((text = prompt("Введіть щось і я додам це до масиву")) !== null) {
        if (!isNaN(text)) {
            arr.push(+text);
        } else {
            arr.push(text);
        }
    }
    console.log("Отриманий масив:", arr);
    console.log("Результат перевірки:", isSorted(...arr));
}

// personForm
// getSetForm
