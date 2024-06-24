const ele = document.getElementById("ele1");
ele.addEventListener("click", function (event) {
    event.target.style.backgroundColor =
        event.target.style.backgroundColor === "yellow" ? "green" : "yellow";
});


//Notita para el recuerdo: 
//expresión condicional ternaria 
//condición ? expresión_si_verdadero : expresión_si_falso;