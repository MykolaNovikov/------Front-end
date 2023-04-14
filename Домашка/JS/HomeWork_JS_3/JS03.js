// String: greeting
{
    alert(`Привіт ${prompt("Як Вас звати ?")} !!!`);
    }
    
    // String: gopni4ek
    {
        let line = prompt ('Введіть рядок');
        let words = line.split(`,`).join(`,блін `);
        alert (words);
    }

    // String: capitalize
    {
        let str = "cANBerRa";
        let result;
        let firstLetter = str[0].toUpperCase();
        let otherLetters = str.slice(-(str.length - 1)).toLowerCase();
        result  = firstLetter + otherLetters;
        console.log(result);
    }
    
    // String: word count
    {
        let line = prompt ('Введіть рядок');
        let words = line.split(` `);
        alert (`Кількість слів у рядку : ${words.length}`);
    }

    // String: credentials   
    {
        let name = prompt ("Введіть Ваше ім'я").trim ();
        let fatherName = prompt ('Введіть Ваше по-батькові').trim();
        let surname = prompt ('Введіть Ваше прізвище').trim();
        let fullName
        let yourName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        let yourFatherName = fatherName.charAt(0).toUpperCase() + fatherName.slice(1).toLowerCase();
        let yourSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
        fullName = yourSurname + ' ' + yourName + ' ' + yourFatherName;
        alert (fullName);
    }

    // String: beer
    {
        let str = "Було жарко. Василь пив пиво вприкуску з креветками";
        let result = str.split(`пиво`).join(`чай`);
        console.log(result);
    }

    // String: no tag
    {
        let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
        let result;
        let indexStart = str.indexOf(' <');
        let indexEnd = str.indexOf('>');
        let newStr = str.slice(0 , indexStart);
        let newStr2 = str.slice(indexEnd + 1);
        result = newStr + newStr2;
        console.log(result);
    }

    // String: big tag
    {
        let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
        let result;
        let indexStart = str.indexOf(' <');
        let indexEnd = str.indexOf('>');
        let newStr = str.slice(0 , indexStart);
        let newStr2 = str.slice(indexEnd);
        let newStrBig = str.slice(indexStart,indexEnd).toUpperCase();
        result = newStr + newStrBig + newStr2;
        console.log(result); 
    }

    // String: new line
    {
        let str = prompt ('Введіть рядок. Ви можете вводити \\n як маркер нового рядка.');
        let result = str.split(`\\n`).join(`\n`);
        alert(result);
    }
   