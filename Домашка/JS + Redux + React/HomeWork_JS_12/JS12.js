const initialState = {
    beer: { quantity: 100, price: 40 },
    chips: { quantity: 100, price: 50 },
    cigarettes: { quantity: 100, price: 90 },
    cash: 0,
};

function reducer(state = initialState, action) {
    const { type } = action;

    if (type === "buyItem") {
        const { product, quantity, money } = action.payload;
        const price = state[product].price;

        if (
            state[product].quantity >= quantity &&
            quantity > 0 &&
            money === price * quantity
        ) {
            return {
                ...state,
                [product]: {
                    ...state[product],
                    quantity: state[product].quantity - quantity,
                },
                cash: state.cash + price * quantity,
            };
        }
    }

    return state;
}

function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribers = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach((subscriber) => subscriber());
    }

    function subscribe(subscriber) {
        subscribers.push(subscriber);
        return
        function unsubscribe() {
            subscribers = subscribers.filter((sub) => sub !== subscriber);
        };
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe,
    };

}

const store = createStore(reducer);

function updatingQuantity() {
    const state = store.getState();
    document.getElementById("beerQuantity").innerHTML = state.beer.quantity;
    document.getElementById("chipsQuantity").innerHTML = state.chips.quantity;
    document.getElementById("cigarettesQuantity").innerHTML =
        state.cigarettes.quantity;
}

function updatingCash() {
    const state = store.getState();
    document.getElementById("cash").innerHTML = state.cash;
    document.title = `Каса: ${state.cash} грн`;
}

function buyItem() {
    const selectedProduct = document.getElementById("productSelect").value;
    const quantity = parseInt(document.getElementById("quantityInput").value);
    const money = parseInt(document.getElementById("moneyInput").value);

    store.dispatch({
        type: "buyItem",
        payload: {
            product: selectedProduct,
            quantity: quantity,
            money: money,
        },
    });

    document.getElementById("quantityInput").value = "";
    document.getElementById("moneyInput").value = "";
}

document.getElementById("buyButton").addEventListener("click", buyItem);
store.subscribe(updatingQuantity);
store.subscribe(updatingCash);

updatingQuantity();
updatingCash();

const state = store.getState();
document.getElementById("beerPrice").innerHTML = state.beer.price;
document.getElementById("chipsPrice").innerHTML = state.chips.price;
document.getElementById("cigarettesPrice").innerHTML = state.cigarettes.price;