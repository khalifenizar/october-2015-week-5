var aNumber = 100;

// Works, wat named function is hoisted
wat();


// Error, variable assigned functions are not hoisted
wut();











function wat () {
    var aNumber;

    console.log(aNumber);
    //=> undefined

    if (false) {
        aNumber = 123;
    }
}

// Change this the named function to make it work
var wut = function () {

};
