//(1)
for (let x=1; x <= 100; x++) {
    let skip = 0;
    if (x % 3 == 0) {
        console.log('fizz');
        skip = 1;
    }
    if (x % 5 == 0) {
        console.log('buzz');
        skip = 1;
    }
    if ((x % 5 == 0) && (x % 3 == 0)) {
        console.log('fizzbuzz');
        skip = 1;
    }
    if (!skip) {
        console.log(x);
    }
}

//(2)
let sentence = "I love algorithms but i think the ones here are too simple";
let split = sentence.split(" ");
console.log(split);


// (3)
function isPrime( n)
{
      // since 0 and 1 is not prime return false.
      if(n == 1 || n == 0) return false;
   
      // Run a loop from 2 to n-1
      for(var i = 2; i < n; i++)
      {
       
        // if the number is divisible by i, then n is not a prime number.
        if(n % i == 0) return false;
      }
      // otherwise, n is prime number.
      return true;
}

// Driver code
var N = 100;
 
// check for every number from 1 to N
  for(var i = 1; i <= N; i++)
  {
      // check if current number is prime
      if(isPrime(i)) {
        console.log( i );
      }
}




// Write a function that prints numbers from 1 - 100, but for multiples of 3 it should print the word ‘fizz’, it should print ‘buzz’ for multiples of 5, and print ‘fizzbuzz’ for multiples of 3 and 5.
// Write a function that collects an input (a number) and prints all the possible prime numbers within that number
// “I love algorithms but i think the ones here are too simple”a function that takes the entire sentence as an input and returns an array with each of the words in the sentence as items of the array
// Refer to number 3 above and write 
// Use only arrow functions as your syntax
// Push your code to github
