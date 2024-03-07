CREATE DATABASE coding_challenge;

CREATE TABLE test (
    id SERIAL PRIMARY KEY,
    task TEXT,
    description TEXT,
    test_cases TEXT

);

CREATE TABLE problems (
    id SERIAL PRIMARY KEY,
    evolution_id INTEGER,
    task_title TEXT,
    description TEXT,
    answers TEXT,
    solution TEXT,
    default_code TEXT,
    difficulty TEXT
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '1',
    'Check for Even Numbers',
    'Write a function isEven() that checks if a given number is even.',
    'true@false@true',
    'function isEven(num) {<N    return num % 2 === 0 <N}',
    'function isEven(num) {<N// Your code here<N    <N}<N<Nconsole.log(isEven(10)) // returns true <Nconsole.log(isEven(7)) // returns false <Nconsole.log(isEven(-4)) // returns true',
    'Easy'
);

insert into problems 
(evolution_id, task_title, description, answers, solution, default_code, difficulty) 
values (
    '2',
    'Sum of Array', 
    'Write a function sumArray() that takes an array of numbers as input and returns the sum of all the numbers.',
    '15@0@0',
    'function sumArray(arr) {<N    return arr.reduce((acc, num) => acc + num, 0)<N}', 
    'function sumArray(arr) {<N// Your code here<N    <N}<N<Nconsole.log(sumArray([1, 2, 3, 4, 5])) // return 15<Nconsole.log(sumArray([])) // return 0<Nconsole.log(sumArray([-1, 0, 1])) // return 0', 
    'Easy'
);

insert into problems 
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '3',
    'Calculate the Square',
    'Write a function calculateSquare() to calculate the square of a given number.',
    '25@9@0',
    'function calculateSquare(num) {<N    return num * num<N}',
    'function calculateSquare(num) {<N// Your code here<N    <N}<N<Nconsole.log(calculateSquare(5)) // returns 25<Nconsole.log(calculateSquare(-3)) // returns 9<Nconsole.log(calculateSquare(0)) // returns 0',
    'Easy'
);

insert into problems 
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '4',
    'Count the Vowels',
    'Write a function countVowels() that counts the number of vowels in a given string.',
    '2@3@3',
    'function countVowels(str) {<N    const vowels = str.match(/[aeiou]/gi)<N    return vowels ? vowels.length : 0<N}',
    'function countVowels(str) {<N// Your code here<N    <N}<N<Nconsole.log(countVowels("hello")) // returns 2<Nconsole.log(countVowels("programming")) // returns 3<Nconsole.log(countVowels("javascript")) // returns 3',
    'Easy'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '5',
    'Reverse Words in a Sentence',
    'Write a function reverseWords() that reverses the order of words in a given sentence.',
    '"World Hello"@"fun is Coding"@"awesome! is JavaScript"',
    'function reverseWords(sentence) {<N    return sentence.split(" ").reverse().join(" ")<N}',
    'function reverseWords(sentence) {<N// Your code here<N    <N}<N<Nconsole.log(reverseWords("Hello World")) // returns "World Hello"<Nconsole.log(reverseWords("Coding is fun")) // returns "fun is Coding"<Nconsole.log(reverseWords("JavaScript is awesome!")) // returns "awesome! is JavaScript"',
    'Easy'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '6',
    'Valid Palindrome',
    'Write a function isPalindrome() that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.',
    'true@false@true',
    'function isPalindrome(str) {<N    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")<N    const reversedStr = cleanedStr.split("").reverse().join("")<N    return cleanedStr === reversedStr<N}',
    'function isPalindrome(str) {<N// Your code here<N    <N}<N<Nconsole.log(isPalindrome("level")) // returns true<Nconsole.log(isPalindrome("coding")) // returns false<Nconsole.log(isPalindrome("A man a plan a canal Panama")) // returns true',
    'Medium'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '7',
    'Fibonacci Sequence',
    'Write a function fibonacciSequence() to generate the Fibonacci sequence up to a given number "n".',
    'Array [0,1,1,2,3,5,8]@Array [0,1,1,2,3,5,8,13,21,34]@Array [0,1,1,2,3]',
    'function fibonacciSequence(n) {<N    const sequence = [0, 1]<N    for (let i = 2; i < n; i++) {<N        sequence.push(sequence[i - 1] + sequence[i - 2])<N    }<N    return sequence<N}',
    'function fibonacciSequence(n) {<N// Your code here<N    <N}<N<Nconsole.log(fibonacciSequence(7)) // returns [0,1,1,2,3,5,8]<Nconsole.log(fibonacciSequence(10)) // returns [0,1,1,2,3,5,8,13,21,34]<Nconsole.log(fibonacciSequence(5)) // returns [0,1,1,2,3]',
    'Medium'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '8',
    'Anagram Detection',
    'Write a function areAnagrams() to determine if two strings are anagrams.',
    'true@false@true',
    'function areAnagrams(str1, str2) {<N    const sortedStr1 = str1.split("").sort().join("")<N    const sortedStr2 = str2.split("").sort().join("")<N    return sortedStr1 === sortedStr2<N}',
    'function areAnagrams(str1, str2) {<N// Your code here<N    <N}<N<Nconsole.log(areAnagrams("listen", "silent")) // returns true<Nconsole.log(areAnagrams("hello", "world")) // returns false<Nconsole.log(areAnagrams("debit card", "bad credit")) // returns true',
    'Medium'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '9',
    'Unique Elements in an Array',
    'Write a function uniqueElements() to find and return the unique elements in an array.',
    'Array [1,2,3,4]@Array ["apple","orange","banana"]@Array [1,2,3,4,5]',
    'function uniqueElements(arr) {<N    return Array.from(new Set(arr))<N}',
    'function uniqueElements(arr) {<N// Your code here<N    <N}<N<Nconsole.log(uniqueElements([1, 2, 3, 4, 3, 2, 1])) // returns [1,2,3,4]<Nconsole.log(uniqueElements(["apple", "orange", "apple", "banana"])) // returns ["apple","orange","banana"]<Nconsole.log(uniqueElements([1, 2, 3, 4, 5])) // returns [1,2,3,4,5]',
    'Medium'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '10',
    'Sum of Even Fibonacci Numbers',
    'Write a function sumEvenFibonacci() that finds the sum of even Fibonacci numbers up to a given limit "n".',
    '10@44@44',
    'function sumEvenFibonacci(n) {<N    let sum = 0<N    let a = 1, b = 2<N<N    while (b <= n) {<N        if (b % 2 === 0) {<N            sum += b<N        }<N<N      
        const temp = a + b<N        a = b<N        b = temp<N    }<N<N    return sum<N}',
    'function sumEvenFibonacci(n) {<N// Your code here<N    <N}<N<Nconsole.log(sumEvenFibonacci(10)) // returns 10<Nconsole.log(sumEvenFibonacci(50)) // returns 44<Nconsole.log(sumEvenFibonacci(100)) // returns 44',
    'Hard'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '11',
    'Title Case a Sentence',
    'Write a function titleCase() that converts the first letter of each word in a sentence to uppercase.',
    '"Hello World"@"Coding Is Fun"@"A Quick Brown Fox"',
    'function titleCase(sentence) {<N    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")<N}',
    'function titleCase(sentence) {<N// Your code here<N    <N}<N<Nconsole.log(titleCase("hello world")) // returns "Hello World"<Nconsole.log(titleCase("coding is fun")) // returns "Coding Is Fun"<Nconsole.log(titleCase("a quick brown fox")) // returns "A Quick Brown Fox"',
    'Hard'
);

insert into problems
(evolution_id, task_title, description, answers, solution, default_code, difficulty)
values (
    '12',
    'String Compression',
    'Write a function compressString() that performs basic string compression by replacing repeated characters with their count.',
    '"a2b1c5a3"@"xyz"@"a5b4a4b2d2c1"',
    'function compressString(str) {<N    let compressed = ""<N    let count = 1<N<N
    for (let i = 0; i < str.length; i++) {<N        if (str[i] === str[i + 1]) {<N            count++<N        } else {<N            compressed += str[i] + count<N            count = 1<N        }<N    }<N<N    return compressed.length < str.length ? compressed : str<N}',
    'function compressString(str) {<N// Your code here<N    <N}<N<Nconsole.log(compressString("aabcccccaaa")) // returns "a2b1c5a3"<Nconsole.log(compressString("xyz")) // returns "xyz"<Nconsole.log(compressString("aaaaabbbbaaaabbddc")) // returns "a5b4a4b2d2c1"',
    'Hard'
);