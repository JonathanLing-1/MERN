/* 
    Recreate Object.entries method

    Given an object, return an array of arrays of the object's key value pairs, where 
    each key value pair is a 2 item array

    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)

*/

// EXAMPLE:
const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };
const obj1 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13
});

console.log(obj1);

const expected1 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13]
]

function objEntries(obj){
    returnArr = [];
    for( key in obj){
        if(obj.hasOwnProperty(key)){
            returnArr.push([key,obj[key]]);
        }
    }

    return returnArr;
}

console.log(objEntries(obj1))

/* 
    Given a table name string and an object whose key value pairs represent column names 
    and values for the columns, return a SQL insert statement string

    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it
    easy to add variables into a string or to add quotations without needing to escape them.

    Bonus: after solving it, write a 2nd solution focusing on functional programming using 
    built in methods
*/
// EXAMPLE
const table = "users";
const insertData = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected = "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

insertStatement = `INSERT INTO $table`
valueStatement = "VALUES"

for(key in insertData){
    if(insertData.hasOwnProperty(key)){
        insertStatement.concat(key+",");
    }
}



function insert(tableName, columnValuePairs) {
    
    
}