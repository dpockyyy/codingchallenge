CREATE DATABASE coding_challenge;

CREATE TABLE test (
    id SERIAL PRIMARY KEY,
    task TEXT,
    description TEXT,
    test_cases TEXT

);

CREATE TABLE problems (
    id SERIAL PRIMARY KEY,
    task_title TEXT,
    description TEXT,
    test_cases text,
    answers TEXT,
    solution TEXT,
    default_code TEXT
);

insert into problems (task_title, description, test_cases, answers, solution,default_code) 
values ('Sum of Array', 'Write a function that takes an array of numbers as input and returns the sum of all the numbers.', 'console.log(sumArray([1,2,3,4,5]) === 15)<N>console.log(sumArray([] === 0))', '15,0,0','function sumArray(arr) {<N>return arr.reduce((acc, num) => acc + num, 0)}', 'function sumArray(arr) {<N>// type code here<N><N>}<N><N>console.log(sumArray([1, 2, 3, 4, 5])) // should return 15<N>console.log(sumArray([])) // should return 0<N>console.log(sumArray([-1, 0, 1])) // should return 0');
