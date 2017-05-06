//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(newName) {
    if (newName === name) {return true;}
    return false;
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    var entry = prompt('What is your name?');
    return entry;
  }

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    var userName = getName();
    return 'Welcome ' + userName;
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  A parameter is a placeholder in a function for the value passed to the function and is defined in the declaration of the function.
  An argument is the actual value that is passed into the function through the parameter. It is defined in the function invocation.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  ''
  ""
  0
  false
  NaN
  undefined

  To check if something is falsy, use an if statement: i.e. if(0 === 4)


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return 'Jonathan';
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName();

//Now alert the result of invoking newMyName

  alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(name) {
    return function() {
      return name;
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
  innerFn;
