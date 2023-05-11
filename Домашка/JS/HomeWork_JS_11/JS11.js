// makeProfileTimer
{
    function makeProfileTimer() {
        const startTime = performance.now();
        return function () {
            const endTime = performance.now();
            return endTime - startTime;
        }
    }
    const timer = makeProfileTimer();
    alert('Вимірюємо час роботи цього alert');
    alert(timer());
    const timer2 = makeProfileTimer();
    prompt('');
    alert(`Час роботи двох alert та одного prompt: ${timer()}`);
    alert(`Час роботи prompt та попереднього alert: ${timer2()}`);
}

// makeSaver
{
    function makeSaver(f) {
        let savedValue;
        let isSaved = false;
        return function () {
            if (!isSaved) {
                savedValue = f();
                isSaved = true;
            }
            return savedValue;
        }
    }

    let saver = makeSaver(Math.random);
    let value1 = saver();
    let value2 = saver();
    alert(`Random: ${value1} === ${value2}`);

    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
    });
    let value3 = saver2();
    let value4 = saver2();
    console.log(`${value3 === value4}`);

    let namePrompt = prompt.bind(window, 'Як тебе звуть?');
    let nameSaver = makeSaver(namePrompt);
    alert(`Привіт! Prompt ще не було!`);
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);
}

// myBind
{
    function myBind(f, context, defaultValue) {
        return function (...values) {
            const boundValue = [];
            let defaultValueIndex = 0;
            for (let i = 0; i < defaultValue.length || defaultValueIndex < values.length; i++) {
                if (defaultValue[i] === undefined) {
                    boundValue.push(values[defaultValueIndex]);
                    defaultValueIndex++;
                } else {
                    boundValue.push(defaultValue[i]);
                }
            }
            return f.apply(context, boundValue);
        }
    }
    let pow5 = myBind(Math.pow, Math, [, 5]);
    console.log(pow5(2));
    console.log(pow5(4));

    let cube = myBind(Math.pow, Math, [, 3]);
    console.log(cube(3));

    let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
    console.log(chessMin(-1, -5, 3, 15));

    let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
    let someNumber = zeroPrompt("Введіть число");
    console.log(someNumber);

    const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f']);
    console.log(bindedJoiner('a', 'c', 'd'));
    console.log(bindedJoiner('1', '2', '3'));
}

// checkResult