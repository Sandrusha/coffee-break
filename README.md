# coffee-break
pseudo code for describing  my own coffee break algorithm

ingredient = { //object - "name / value" pairs
    name: ...,
    quantity: ...
}

//ingredients
coffee, sugar, water

//objects
kettle, spoon, cup

//auxilliary functions 
validateIngredients([ingredientsList])
    shoppingList = []
    for each ingredient
        if not checkIngredient(ingredient, quantity)
            add to shoppingList(ingredient, quantity)
    if shoppingList not empty
        return false and shoppingList
    else
        return true

gotToTheStore([ingredientsList])
    //ingredient = {name: 'coffee', quantity: 1kg}

takeIngredient(ingredient, quantity)

takeObject(obj)

// main flow
setPrerequisites()
    setupPerson()
        lock computer
        get up
        go to the kitchen
        wash hands
    setupEnvironment()
        takeObject(kettle)
        takeObject(spoon)
        validateIngredients(all needed ingredients) // coffee, water, sugar
            if fail validateIngredients -> goToTheStore([shoppingList])
            if not fail -> takeIngredient(ingredient, quantity)

doAction()
    put kettle on stove
    putIngredient(kettle, water)
    turn on stove
    check boiling water
        true 
            putIngredient(kettle, coffee)
            putIngredient(kettle, sugar)
            mix(kettle)
            turn off stove
            pour coffee
        false
            wait
            check again
doCleanup()
    clean(kettle)
    clean(spoon)

enjoy()
    drink(coffee)

finishBreak()
    clean(cup)
    return to desk
