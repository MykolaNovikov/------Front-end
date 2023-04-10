// Number: age
{
    let ageUser; // вік користувача
    let carrentYear = new Date().getFullYear();

    ageUser = prompt ('Скільки вам років?');

    yearOfBirth = carrentYear - ageUser;

    alert ('Якщо в цьому році вже був Ваш День нарождення, Ви народились ' + yearOfBirth + ' року, якщо у Вас в цьому році ще не було Дня Народження, то Ви народились' + (yearOfBirth-1) + ' року');
}

// Number: temperature
{
    let temperature //температурa в градусах Цельсія

    temperature = prompt (' введіть значення температури в градусах Цельсія');

    temperatureOfFarentgeyt = (temperature * 9/5) + 32;
    
    alert ( temperature + ' градусів по Цельсію дорувнюють ' + temperatureOfFarentgeyt + ' градусів по Фаренгейту' )
}

// Number: divide
{
    let firstNumber = prompt ('Введіть число');
    let secondNumber = prompt ('Введіть число на яке ділити');

    result = Math.round(firstNumber / secondNumber);

    alert ( ' Результат ділення на ціло числа ' + firstNumber + ' на ' + secondNumber + ' з округленням дорівняватиме ' + result)

}

// Number: currency

{
    let money = prompt ('Яку суму в доларах хочете поміняти на гривні');
    const rate = 36.5686;

    result = money * rate ;

    alert ( 'При обміні ' + money + ' доларів Ви отримаєте' + result.toFixed(2) + ' гривень' )

}

// Number: RGB

{
    const red = ( + prompt ( 'введіть значення насищеності червоного кольору . Від 17 до 255 ' )).toString(16);
    const green = ( + prompt ( 'введіть значення насищеності зеленого кольору . Від 17 до 255 ' )).toString(16);
    const blue = ( + prompt ( 'введіть значення насищеності синього кольору . Від 17 до 255 ' )).toString(16);

    hex = '#' + red + green + blue;

    alert ( hex );

}

// Number: flats 
{

let numberOfFloors = prompt ('Скільки поверхів у будинку ?');
let numberOfApartmentsPerFloor = prompt ('Скільки квартир на поверсі ?');
let numberOfTheDesiredApartment = prompt ('Введіть номер потрібної квартири');
let entranceNumber = Math.floor((numberOfTheDesiredApartment - 1) / (numberOfFloors * numberOfApartmentsPerFloor) + 1);
let floorNumber = Math.floor( ((numberOfTheDesiredApartment - 1) - (numberOfFloors * numberOfApartmentsPerFloor * (entranceNumber - 1))) / numberOfApartmentsPerFloor ) + 1;

alert ( 'Потрібна Вам квартира знаходиться в ' + entranceNumber + ' під\'їзді на ' + floorNumber + ' поверсі') ;

}