document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector('#main');
    const Increment = document.querySelector('#Increment');
    const Decrement = document.querySelector('#Decrement');
    const Reset = document.querySelector('#Reset');

    let curval = 0;

    Increment.addEventListener("click", () => {
        curval++;
        main.textContent = curval;
    });

    Decrement.addEventListener("click", () => {
        curval--;
        main.textContent = curval;
    });

    Reset.addEventListener("click", () => {
        curval = 0;
        main.textContent = curval;
    });
});
