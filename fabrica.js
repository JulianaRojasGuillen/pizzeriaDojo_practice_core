function PizzaOven( tipoCorteza, tipoSalsa, quesos, salsas){
    let pizza={};
    pizza.tipoCorteza=tipoCorteza;
    pizza.tipoSalsa=tipoSalsa;
    pizza.quesos=quesos;
    pizza.salsas=salsas;
    return pizza;
}

console.log("Las pizzas creadas son: ");

pizza1=PizzaOven("estilo CHicago","tradicional","mozzarella",["pepperoni","salchica"])
pizza2=PizzaOven("lanzada a mano","marinara",["mozzarella","feta"],["champiñones","aceitunas"])
pizza3=PizzaOven("delgada","cheddar",["parmesano","provolone"],["piña","jamón"])
pizza4=PizzaOven("sin gluten","barbacoa","roquefort",["pollo","bacon"])


function TextoPizza(pizza){
    let texto="Esta pizza es de masa " + pizza.tipoCorteza + ", "+ "el tipo de salsa es " + pizza.tipoSalsa + ", con un rico queso " + pizza.quesos +" y unas exquisitas salsas de " + pizza.salsas;
    console.log(texto);
}

TextoPizza(pizza1);
TextoPizza(pizza2);
TextoPizza(pizza3);
TextoPizza(pizza4);

/*Creando una pizza random*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomPizza(){
    let pizza={};

    let tipoCorteza= ["estilo CHicago","lanzada a mano","delgada","sin gluten"];
    let tipoSalsa=["tradicional","marinara","cheddar","barbacoa"];
    let quesos=["mozzarella","feta","parmesano","provolone","roquefort"];
    let salsas=["pepperoni","salchica","champiñones","aceitunas","piña","jamón"];

    pizza.tipoCorteza=tipoCorteza[getRandomInt(tipoCorteza.length)];
    pizza.tipoSalsa=tipoSalsa[getRandomInt(tipoSalsa.length)];
    pizza.quesos=quesos[getRandomInt(quesos.length)];
    pizza.salsas=salsas[getRandomInt(salsas.length)];

    return pizza;
}

pizza=randomPizza();

console.log("Mi pizza random es: ");
TextoPizza(pizza);