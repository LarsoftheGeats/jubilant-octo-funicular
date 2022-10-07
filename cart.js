///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
function priceAdder (accum, curr){
    accum = accum + curr.price;
    return accum
}

const summedPrice = cart.reduce(priceAdder,0/* CALLBACK HERE */)
//console.log(summedPrice)//test should be 26.97/* passed */

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (cartTotal, couponValue, tax){
    let subTotal = cartTotal + cartTotal * tax;
    subTotal-= couponValue;
    return subTotal;
}

/*Test code*/
// console.log(calcFinalPrice(10,0,.1))//should be $11
// console.log(calcFinalPrice(10,1,.1))//should be $10
// console.log(calcFinalPrice(10,1,0))//should be $9


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    customer Object
    *** First Name 
    *Basic Identifying information, if you want to keep customers you need to treat them like people
    *string:, this is the standard data type for holding an array of characters

    ****Last Name 
    *Basic Identifying information, if you want to keep customers you need to treat them like people
    *string:    this is the standard data type for holding an array of characters.  I'm keeping these seperate.  I can't think of any rhyme or reason why a single string for both or two separate strings is better, 
    so i just defaulted to two strings.

    ****Preferred title
    describes mr, mrs., or first name, 
    a number:
    Honestly i'm ok, with a number here, you can use it identify mr. ms, or maybe fine with first name.  This could just 
    easily be a str with preferred address as the choice.  But you need a starting point for design and this is where I 
    chose.

    ****frequent customer
    Customer service type thing, I was thinking like a frequent flyer thing, if you're a common guest at our restaurant 
    you might get special deals, or the senior waiter or whatever.  I decided this is a fancy place so this is the kind of
    thing you'd want to keep track of on a restaurant database for if wait staff doesn't always know someone.
    bool: I decided if you're a frequent guest it's true, otherwise false.  
    
    *** favorite drink or preferred entree, 
    sometimes people feel more at home if you know something about them so the wait staff could say "could we get you started with.... whatever they like to start with" and it feels more personable
    *string, this is probably a drink and preparation instructions.  

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer = {
    firstName: "Jonathan",
    lastName: "Nielsen",
    prefTitle: 1, //on reflection a string is easier here, but I'm going off the assumption that I'd just have 
                  //to take the requirements as written.
    freqCustomer: false,
    mealEntree: "Martini Shaken not Stirred, and an Awesome Blossom"
}

/*Test code*/
//console.log(customer)