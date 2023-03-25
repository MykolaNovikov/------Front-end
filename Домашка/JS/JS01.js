let distance //відстань,яку треба проїхати
let fuelConsumption // розход палива
let fuelPrice // ціна за літр палива

distance = prompt ('яку відстань треба проїхати,в км');
fuelConsumption = prompt ('який розход палива на 100 км');
fuelPrice = prompt ('скільки коштує літр палива,в грн');

let needFuel = distance/100 * fuelConsumption; // скільки літрів палива потрібно

let costOfFuel = needFuel * fuelPrice ; // скільки грошей потрібно на паливо для поїздки

alert ('Вам на паливо потрібно ' + costOfFuel + ' грн');