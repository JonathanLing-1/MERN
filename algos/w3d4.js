/* 
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.
    Input:
        - recipe object where keys are ingredient names
        and values are unit required (int)
        - available ingredients object where keys are ingredient
        names and values are unit available (int)
    Output:
        int (max servings)
    Side note (not needed for solution): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the available ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.
*/
const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;

function getMaxServings(recipe, available){

    let max = 100000000;

    for(key in recipe){
        if(available[key]/recipe[key] < max){
            max = available[key]/recipe[key]
        }

    }
    if(max<1){
        return "No servings possible"
    }
    return max;
}

console.log(getMaxServings(recipe1,available1))