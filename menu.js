///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
pizza = {
    name:"Pepperoni",
    price: 7.50,
    category: "Main Course",
    popularity: 2,
    rating: 4.6,
    tags: ["adult", "gluten", "meat", "trans-fats","greasy"]

}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(`popularity: ${pizza.popularity}`)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(`Tag 2: ${pizza.tags[1]}`) //gluten


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price}=pizza;
console.log(price);//should be 7.5


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category}=pizza
console.log(category)//"Main Course"


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr= [ 
    {//obj 1
        name:"BLT on Rye",
        price: 5.50,
        category: "Lunch Meal",
        popularity: 4,
        rating: 4.8,
        tags: ["adult", "gluten", "meat", "bacon"]

    },
    {//obj 2
        name:"Ham and cheese",
        price: 4.50,
        category: "Lunch Meal",
        popularity: 3,
        rating: 4.7,
        tags: ["adult", "gluten", "meat", "dairy"]

    },
    {//obj 3
        name:"Reuben",
        price: 6.50,
        category: "Lunch Meal",
        popularity: 1,
        rating: 5,
        tags: ["adult", "gluten", "meat", "kosher","pickle"]

    },
    {//obj 4
        name:"Pasta Salad",
        price: 8.50,
        category: "Main course",
        popularity: 6,
        rating: 4.1,
        tags: ["adult", "gluten",  "carbs", "olives", "vegan"]

    },
    {//obj 5
        name:"Cheese pizza",
        price: 5.00,
        category: "Lunch Meal",
        popularity: 4,
        rating: 4.8,
        tags: ["adult", "kids", "vegetarian", "gluten", "meat", "kosher",]

    },

]   



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
/*filtering on tag "kosher" 2 object match this, obj 3 and 5 the reuben and the cheese pizza  */
function checker (foodItem){
    return foodItem.tags.includes("kosher")
}

const filteredFood = foodArr.filter(checker)/* CALLBACK HERE */
// console.log(filteredFood) /*test filtered to obj 3 and 5 cheese pizza and reuben */



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose //edited original line
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty (property, number, type){
    let filteredArray = [];
    if (type === 'above'){
        for (let i =0; i < foodArr.length; i++){
            if (foodArr[i][`${property}`] > number){
                //console.log("got in")/*Test Log*/
                filteredArray.push(foodArr[i])
            }
        }
    }
    else if (type === 'below'){
        for (let i =0; i < foodArr.length; i++){
            if (foodArr[i][`${property}`] < number){
                //console.log("got in")/*Test Log*/
                filteredArray.push(foodArr[i])
            }
        }

    }
    else{
        console.log("Error, type not specified, choose 'above' or 'below', Null return")
            }
    return filteredArray;

}
/*Test Code should only have one answer, the pasta salad it did*/
// let answerArr=filterByProperty("price",7,"above")/*Test Code should only have one answer, the pasta salad it did*/
// console.log(answerArr)
// answerArr=filterByProperty("popularity",3,"below")/*Test Code should only have one answer, the reuben it did*/
// console.log(answerArr)
// answerArr=filterByProperty("rating",4.7,"above")/*Test Code should three answers, reuben,blt, and cheese pizza passed*/
// console.log(answerArr)


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
let answerArr=filterByProperty("price",7,"above")/*Test Code should only have one answer, the pasta salad it did*/
console.log(answerArr)//copied test code from above.  

//note the instructions don't specify what to do if things are equal, so i left that out of functionality.  
