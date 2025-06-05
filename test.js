function converter() {
    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
        RWF: 9.86,
        NRA: 1200,
        SHL: 2900,
    };

    const from = document.getElementById("from_input").value.toUpperCase();
    const to = document.getElementById("to_input").value.toUpperCase();
    const amount = parseFloat(document.getElementById("amount_input").value);

    const resultEl = document.getElementById("result");

    if (!currencies[from] || !currencies[to]) {
        resultEl.innerText = "Currency not found!";
    } else if (isNaN(amount) || amount <= 0) {
        resultEl.innerText = "Please enter a valid amount.";
    } else {
        const converted = (amount * currencies[to]) / currencies[from];
        resultEl.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    }
}
