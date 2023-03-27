/*
    
    1. In the S19 folder, create an activity folder, an index.html file inside of it and link the index.js file.
    2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
    3. Declare 3 global variables without initialization called username,password and role.
    4. Create a login function which is able to prompt the user to provide their username, password and role.
        - use prompt() and update the username,password and role global variables with the prompt() returned values.
        - add an if statement to check if the the username is an empty string or null or if the password is an empty string or null or if the role is an empty string or null.
            - if it is, show an alert to inform the user that their input should not be empty.
    5. Add an else statement. Inside the else statement add a switch to check the user's role add 3 cases and a default:
        - if the user's role is admin, show an alert with the following message:
            - "Welcome back to the class portal, admin!"
        - if the user's role is teacher, show an alert with the following message:
            - "Thank you for logging in, teacher!"
        - if the user's role is a student, show an alert with the following message:
            - "Welcome to the class portal, student!"
        - if the user's role does not fall under any of the cases, as a default, show a message:
            - "Role out of range."

*/

function login(username, password, role) {
    username = prompt("Enter Username:").toLowerCase();
    password = prompt("Enter Password:").toLowerCase();
    role = prompt("Enter Role:").toLowerCase(); 

    if(!username || !password || !role) {
        alert("Inputs must not be empty")
        console.log("Inputs must not be empty")
    }
    else {
        switch (role) {
            case "admin":
                alert("Welcome back to the class portal, admin!")
                console.log("Welcome back to the class portal, admin!")
                break;
            case "teacher":
                alert("Thank you for logging in, teacher!")
                console.log("Thank you for logging in, teacher!")
                break;
            case "student":
                alert("Welcome to the class portal, student!")
                console.log("Welcome to the class portal, student!")
                break;
            default:
                alert("Role out of range")
                console.log("Role out of range")
                break;
        }
    }
}

login();

/*
    6. Create a function which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
    - add parameters appropriate to describe the arguments.
    - create a new function scoped variable called average.
    - calculate the average of the 4 number inputs and store it in the variable average.
    - research the use of Math.round() and round off the value of the average variable.
        - update the average variable with the use of Math.round()
        - console.log() the average variable to check if it is rounding off first.
    7. Add an if statement to check if the value of avg is less than or equal to 74.
        - if it is, show the following message in a console.log():
            - "Hello, student, your average is <show average>. The letter equivalent is F"
    8. Add an else if statement to check if the value of avg is greater than or equal to 75 and if average is less than or equal to 79.
        - if it is, show the following message in a console.log():
            - "Hello, student, your average is <show average>. The letter equivalent is D"
    9. Add an else if statement to check if the value of avg is greater than or equal to 80 and if average is less than or equal to 84.
        - if it is, show the following message in a console.log():
            - "Hello, student, your average is <show average>. The letter equivalent is C"
    10. Add an else if statement to check if the value of avg is greater than or equal to 85 and if average is less than or equal to 89.
        - if it is, show the following message in a console.log():
            - "Hello, student, your average is <show average>. The letter equivalent is B"
    11. Add an else if statement to check if the value of avg is greater than or equal to 90 and if average is less than or equal to 95.
        - if it is, show the following message in a console.log():
            - "Hello, student, your average is <show average>. The letter equivalent is A"
    12. Add an else if statement to check if the value of average is greater than 96.
        - if it is, show the following message in a console.log():
            - "Hello, student, your average is <show average>. The letter equivalent is A+"
*/

function checkAverage(grade1, grade2, grade3, grade4) {

    grade1 = parseInt(prompt("Enter Grade"));
    grade2 = parseInt(prompt("Enter Grade"));
    grade3 = parseInt(prompt("Enter Grade"));
    grade4 = parseInt(prompt("Enter Grade"));

    let average = ((grade1 + grade2 + grade3 + grade4) /4);
    average = Math.round(average);
    console.log(average);

    if(average <= 74) {
        console.log("Hello, student, your average is: " +average+ ". The letter equivalent is F");
    }
    else if(average >= 75 && average <= 79) {
        console.log("Hello, student, your average is: " +average+ ". The letter equivalent is D");
    }
    else if(average >= 80 && average <= 84) {
        console.log("Hello, student, your average is: " +average+ ". The letter equivalent is C");
    }
    else if(average >= 85 && average <= 89) {
        console.log("Hello, student, your average is: " +average+ ". The letter equivalent is B");
    }
    else if(average >= 90 && average <= 95) {
        console.log("Hello, student, your average is: " +average+ ". The letter equivalent is A");
    }
    else if(average >= 96) {
        console.log("Hello, student, your average is: " +average+ ". The letter equivalent is A+");
    }
}

checkAverage();

//Do not modify
//For exporting to test.js
try {
    module.exports = {
       login, checkAverage
    }
} catch(err) {

}
