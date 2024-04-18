#! /usr/bin/env node

import inquirer from "inquirer"

const answer:{
    sentence: string
} = await inquirer.prompt([
    {
name:"sentence",
type:"input",
message:"enter your sentence to count the word:"
    }
])

const word = answer.sentence.split("")

console.log(word)

console.log(`your sentence word count is ${word.length}`);