// Create a program that asks the user to enter their name and age.
// If the user’s age is greater than or equal to 18, display a message to the console that says “Welcome [name], you are an adult”.
// If the user’s age is less than 18, display a message that says “Sorry [name], you are not yet an adult”.
let name=prompt('Enter your name:');
let age=prompt('Enter your age:');
if(age>=18){
    console.log(`Welcome ${name}!, you are an adult.`);
}
else{
    console.log(`Sorry ${name}!, you are not an adult.`);
}
