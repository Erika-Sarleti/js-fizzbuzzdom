let quadraTony = document.querySelector(".square");


for (let i = 1; i <= 100; i++ ) {
    let box;
    if (i % 3 == 0 && i % 5 == 0) {
        box = `<div class="box red"> Fizzbuzz </div>`;
    } else if (i % 3 == 0) {
        box = `<div class="box green"> Fizz </div>`;
        
    } else if (i % 5 == 0) {
        box = `<div class="box yellow"> Buzz </div>`;
    } else{
        box = `<div class="box"> ${i} </div>`;

    };        
    quadraTony.innerHTML += box;

};
