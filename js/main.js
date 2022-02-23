let quadraTony = document.querySelector(".square");


for (let i = 1; i <= 100; i++ ) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        quadraTony.innerHTML += `<div class="box red"> Fizzbuzz </div>`;
    } else if (i % 3 == 0) {
        quadraTony.innerHTML += `<div class="box green"> Fizz </div>`;
        
    } else if (i % 5 == 0) {
        quadraTony.innerHTML += `<div class="box yellow"> Buzz </div>`;
    } else{
        quadraTony.innerHTML += `<div class="box"> ${i} </div>`;

    };        
    

};
