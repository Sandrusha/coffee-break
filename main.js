
//set prerequisite
window.onload = function () {
    let roomName = document.getElementById("roomName");
    roomName.innerHTML = "Desk";

    let computerState = document.getElementById("computerState");
    computerState.innerHTML = "Computer is Running" + "<span id='elipse'></span>";
}

//setup person
setTimeout(lockComputer, 3000);

function lockComputer() {
    let computerState = document.getElementById("computerState");
    computerState.innerHTML = "PC is locked 🔒";
    computerState.style.color = "#f39c12";
}

setTimeout(goToTheKitchen, 5000);

function goToTheKitchen() {
    let peopleState = document.getElementById("peopleState");
    peopleState.innerHTML = "I get up and go to the kitchen."
}

//in the kitchen
setTimeout(washHands, 8000);

function washHands() {
    let roomName = document.getElementById("roomName");
    roomName.innerHTML = "Kitchen";
    
    let computerState = document.getElementById("computerState");
    computerState.style.display = "none";

    let peopleState = document.getElementById("peopleState");
    peopleState.innerHTML = "I wash my hands."
}

//setupEnvironment
setTimeout(takeObjectKettle, 11000);

function takeObjectKettle() {
    let peopleState = document.getElementById("peopleState");
    let peopleStateOne = document.createElement("p");
    peopleStateOne.innerHTML = "1. I take the keetle."
    peopleState.appendChild(peopleStateOne);

    let kitchenObjects = document.getElementById("kitchenObjects");
    let kettle = document.createElement("img");
    kettle.setAttribute("src", "media/kettle.png");
    kettle.setAttribute("height", "120px;")
    kitchenObjects.appendChild(kettle);
}

setTimeout (takeObjectSpoon, 13000);

function takeObjectSpoon() {
    let peopleStateTwo = document.createElement("p");
    peopleStateTwo.innerHTML = "2. I take the spoon."
    peopleState.appendChild(peopleStateTwo);

    let spoon = document.createElement("img");
    spoon.setAttribute("src", "media/spoon.png");
    spoon.setAttribute("height", "60px;");
    kitchenObjects.appendChild(spoon);
}

//validate ingredients
let ingredients = [
    {
        name: "coffee",
        quantity: 3
    },
    {
        name: "sugar",
        quantity: 1
    },
    {
        name: "water",
        quantity: 200
    }
]

let ingredientsStock = [
    {
        name: "coffee",
        quantity: 100,
        max: 150
    },
    {
        name: "sugar",
        quantity: 230,
        max: 300
    },
    {
        name: "water",
        quantity: 0,
        max: 1000
    }
]

setTimeout (verifyIngredients, 15000);

let shoppingList = [];

function verifyIngredients() {
    viewIngredients("stockContainer");

    for (var i = 0; i < ingredients.length; i++) {
        let ingredientFromStock = ingredientsStock.filter(function(elem) { //elem: ingredientsStock[i]
            return elem.name === ingredients[i].name; // returns a list --> the list has one element (no duplicated ingredients into Ingredient Stock)
       })

       if (ingredients[i].quantity > ingredientFromStock[0].quantity) {
            shoppingList.push(ingredients[i].name);
       }
    }

    let shoppingListUI = document.getElementById("shoppingList");
    shoppingListUI.innerHTML = "Shopping list: " + "<span>" + shoppingList + "</span>" + ".";
}

//stock container + ingredients
function viewIngredients(container) {
    let stockContainer = document.getElementById(container); //container -- fie #ingredients fie #stockContainer
    let stockContainerTitle = document.createElement("div");
    stockContainerTitle.innerHTML = "<h2>Ingredients:</h2>";
    stockContainer.appendChild(stockContainerTitle);
    for (var i = 0; i < ingredientsStock.length; i++) {
        let ingredientStockContainer = document.createElement("div");
        ingredientStockContainer.style.height = "130px";
        ingredientStockContainer.classList.add("ingr");
        ingredientStockContainer.setAttribute("data-name", ingredientsStock[i].name);

        let x = ingredientsStock[i].quantity * 100 / ingredientsStock[i].max;

        let ingredientStockEmpty = document.createElement("div");
        ingredientStockEmpty.classList.add("ingredientStockEmpty");
        ingredientStockEmpty.style.height = (100 - x) + "px";

        let ingredientStockFull = document.createElement("div");
        ingredientStockFull.classList.add("ingredientStockFull");
        ingredientStockFull.classList.add(ingredientsStock[i].name);
        ingredientStockFull.style.height = x + "px";

        let ingredientLabel = document.createElement("div");
        ingredientLabel.innerHTML = ingredientsStock[i].name;

        ingredientStockContainer.appendChild(ingredientStockEmpty);
        ingredientStockContainer.appendChild(ingredientStockFull);
        ingredientStockContainer.appendChild(ingredientLabel);
        stockContainer.appendChild(ingredientStockContainer);
    }
}

//do action
setTimeout(goToTheShopping, 18000);

function goToTheShopping() {
    if (shoppingList.length > 0) {
        let coffeeSetUpContainer = document.getElementById("coffeeSetUpContainer");
        let goToTheShopping = document.createElement("p");
        goToTheShopping.innerHTML = "I go to buy " + shoppingList + " for coffee.";
        coffeeSetUpContainer.appendChild(goToTheShopping);

        for (var i = 0; i < shoppingList.length; i++) {
            for (var j = 0; j < ingredientsStock.length; j++) {
                if (shoppingList[i] === ingredientsStock[j].name) {
                    ingredientsStock[j].quantity = ingredientsStock[j].max * 0.8;
                }
            }
        }

        let stockContainer = document.getElementById("stockContainer");
        stockContainer.innerHTML = "";
        viewIngredients("stockContainer");
    }
}

setTimeout(coffeeSetUp, 21000);

function coffeeSetUp() {
    let coffeeSetUpContainer = document.getElementById("coffeeSetUpContainer");
    let coffeeSetUpTitle = document.createElement("h2");
    coffeeSetUpTitle.innerHTML = "Preparing the Coffee:";
    coffeeSetUpContainer.appendChild(coffeeSetUpTitle);

    let kitchenWareDiv = document.createElement("div");
    kitchenWareDiv.setAttribute("id", "kitchenWareDiv");
    coffeeSetUpContainer.appendChild(kitchenWareDiv);

    let peopleState = document.getElementById("peopleState");
    peopleState.style.display = "none";
    let kitchenObjects = document.getElementById("kitchenObjects");
    kitchenObjects.style.display = "none";
}

setTimeout(putKettleOnStove, 23000);

function putKettleOnStove() {
    let kitchenWareDiv = document.getElementById("kitchenWareDiv");
    let coffeeSetUpContainer = document.getElementById("coffeeSetUpContainer");
    let coffeeSetUpTextContainer = document.createElement("div");
    coffeeSetUpTextContainer.setAttribute("id", "coffeeSetUpTextContainer");
    coffeeSetUpContainer.appendChild(coffeeSetUpTextContainer);

    let stoveOffText = document.createElement("p");
    stoveOffText.innerHTML = "1. Put kettle on stove.";
    coffeeSetUpTextContainer.appendChild(stoveOffText);

    let stoveOff = document.createElement("img");
    stoveOff.setAttribute("src", "media/stove-off.png");
    stoveOff.setAttribute("height", "120px");
    stoveOff.style.marginRight = "30px";
    kitchenWareDiv.appendChild(stoveOff);
}

setTimeout(addWater, 25000);

function addWater() {
    let kitchenWareDiv = document.getElementById("kitchenWareDiv");
    let coffeeSetUpTextContainer = document.getElementById("coffeeSetUpTextContainer");

    let addWaterSign = document.createElement("img");
    addWaterSign.setAttribute("src", "media/add.png");
    addWaterSign.setAttribute("height", "30px");
    addWaterSign.style.marginRight = "30px";
    kitchenWareDiv.appendChild(addWaterSign);

    let waterText = document.createElement("p");
    waterText.innerHTML = "2. Add water.";
    coffeeSetUpTextContainer.appendChild(waterText);

    let water = document.createElement("img");
    water.setAttribute("src", "media/water.png");
    water.setAttribute("height", "60px");
    water.style.marginRight = "30px";
    kitchenWareDiv.appendChild(water);
}

setTimeout (turnOnStove, 27000);

function turnOnStove() {
    let kitchenWareDiv = document.getElementById("kitchenWareDiv");
    let coffeeSetUpTextContainer = document.getElementById("coffeeSetUpTextContainer");

    let addSign = document.createElement("img");
    addSign.setAttribute("src", "media/add.png");
    addSign.setAttribute("height", "30px");
    addSign.style.marginRight = "30px";
    kitchenWareDiv.appendChild(addSign);

    let stoveOnText = document.createElement("p");
    stoveOnText.innerHTML = "3. Turn on the stove.";
    coffeeSetUpTextContainer.appendChild(stoveOnText);

    let stoveOn = document.createElement("img");
    stoveOn.setAttribute("id", "stoveOn");
    stoveOn.setAttribute("src", "media/stove-on.png");
    stoveOn.setAttribute("height", "120px");
    stoveOn.style.marginRight = "30px";
    kitchenWareDiv.appendChild(stoveOn);  
}

setTimeout(checkBoilingWater, 30000);

let initWaterTemp = 0;
function checkBoilingWater() {
    let boilingWaterPointTemp = 100;
    initWaterTemp = 0;

    var tempInterval = setInterval(increaseTemperature, 2000);

    function increaseTemperature() {
        if (initWaterTemp == 100) {
            let coffeeSetUpTemp = document.getElementById("coffeeSetUpTemp");
            coffeeSetUpTemp.innerHTML = "Water boiled!";
            
            clearInterval(tempInterval); //check boiling water
            
            setTimeout(doCoffee, 2000);
        } 

        let coffeeSetUpContainer = document.getElementById("coffeeSetUpContainer");
        let coffeeSetUpTemp = document.getElementById("coffeeSetUpTemp");
        if (!coffeeSetUpTemp) {
            let waterTempDiv = document.createElement("div");
            waterTempDiv.setAttribute("id", "waterTempDiv");
            coffeeSetUpTemp = document.createElement("p");
            coffeeSetUpTemp.setAttribute("id", "coffeeSetUpTemp");
            waterTempDiv.appendChild(coffeeSetUpTemp);
            coffeeSetUpContainer.appendChild(waterTempDiv);
        }
       
        coffeeSetUpTemp.innerHTML = 'The water starts boiling: ' + initWaterTemp + '&#8451;';
        initWaterTemp += 20;
    }
}

function doCoffee() {
    let doCoffeeDiv = document.getElementById("doCoffee");
    let doCoffeeTitle = document.createElement("h2");
    doCoffeeTitle.innerHTML = "Do Coffe:";
    doCoffeeDiv.prepend(doCoffeeTitle);
    doCoffeeDiv.classList.remove("hidden");

    let stockContainer = document.getElementById("stockContainer");
    stockContainer.style.display = "none";
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.style.display = "none";
    let coffeeSetUpContainer = document.getElementById("coffeeSetUpContainer");
    coffeeSetUpContainer.style.display = "none";
    
    viewIngredients("ingredients");
    let dragIngrList = document.getElementById("ingredients").getElementsByClassName("ingr");
    for (var i = 0; i < dragIngrList.length; i++) {
        dragIngrList[i].setAttribute("draggable", true);
        dragIngrList[i].addEventListener("dragstart", onDragStart);
    }
}

function onDragStart(ev) {
    ev.dataTransfer.setData("className", ev.target.getAttribute("data-name"));
}

function drop(ev) {
    ev.preventDefault();
    var ingredientsClass = ev.dataTransfer.getData("className");
    let circleElem = document.createElement("div");
    circleElem.classList.add(ingredientsClass);
    circleElem.classList.add("circle");

    let circlesDiv = document.getElementById("circlesDiv");
    circlesDiv.appendChild(circleElem);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function mixIngredients() {
    let circleMix = document.getElementById("circleMix");
    circleMix.classList.remove("hidden");
    let circlesDiv = document.getElementById("circlesDiv");
    circlesDiv.classList.add("hidden");
    let stoveOffBtn = document.getElementById("turnOff");
    stoveOffBtn.classList.remove("hidden");
}

function turnOffStove(event) {
    let stove = document.getElementById("turnOff");
    stove.setAttribute("src", "media/stove-off.png");
    event.target.disabled = true; //event.target = butonul pe care am dat click

    setTimeout(pourCoffee, 5000);
}

function pourCoffee() {
    let roomName = document.getElementById("roomName");
    roomName.innerHTML = "Garden Yard";
    let hiddenContent = document.getElementById("mainContent");
    hiddenContent.classList.add("none");
    let lastContent = document.getElementById("lastContent");
    lastContent.classList.remove("hidden");
    let coffeeIntoTheGardenImg = document.createElement("img");
    coffeeIntoTheGardenImg.setAttribute("src", "media/coffee-into-the-garden.jpg");
    coffeeIntoTheGardenImg.setAttribute("id", "lastImg")
    lastContent.appendChild(coffeeIntoTheGardenImg);
}

//enjoy
function enjoyCoffee() {
    alert("Enjoy your Coffee!");
}

//do cleanup
function doCleanUp() {
    alert("The cleanup was done!")
}

//finish break
function finishBreak() {
    alert("Go back to work!");
}