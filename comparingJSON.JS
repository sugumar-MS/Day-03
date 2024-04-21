function compareJSON(obj1, obj2) {
    // Convert JSON objects to strings and sort the properties
    const string1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const string2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    // Compare the sorted strings
    return string1 === string2;
}


const obj1 = { name: "person1", age: 5 };
const obj2 = { age: 5, name: "person1" };

console.log(compareJSON(obj1, obj2)); 