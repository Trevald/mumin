#!/usr/bin/env node

// Load dictionary
const dictionary = loadDictionary("./dictionary-fi.json");

function loadDictionary(file) {
    const fs = require('fs');
    const rawdata = fs.readFileSync(file);
    return JSON.parse(rawdata);
}

function main() {
    if (args.length === 0) {
        printPhrases(dictionary);
    } else {
        printOne(args[0]); 
    }
}

function printOne(query) {
    const phrases = dictionary.filter(item => {
        if (query.length === 1) {
            return item.en.toLowerCase().charAt(0) == query.toLowerCase();
        } else {
            return item.en.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
    });

    if (phrases.length === 0) {
        phrases.push({ en: "404", fi: "Neljä­sataa­neljä" });
    } 

    printPhrases(phrases);
}

function printMissing(query) {
    console.log(`Not found`)
}

function printPhrases(phrases) {
    const requiredLength = getMaxLengthOfPhrase(phrases);
    console.log("length", requiredLength);
    phrases.forEach(phrase => {
       phrase.en = addSpaces(phrase.en, requiredLength + 5)
    });
    
    console.log("");
    console.log("--- Mumin says: ---");
    phrases.forEach(phrase => {
        console.log("");
        console.log('\x1b[36m%s\x1b[0m', phrase.en, phrase.fi);
        
    });
    console.log("");
    console.log("--- Hei hei! ---");
    console.log("");
}

function getMaxLengthOfPhrase(phrases) {
    let length = 0;
    phrases.forEach(phrase => {
        length = phrase.en.length > length ? phrase.en.length : length;
    })

    return length;
}

function addSpaces(string, length) {
    while(string.length < length) {
        console.log("add space");
        string = string + " ";
    }

    return string;
}




// Start provided args
const [,, ...args] = process.argv;
main();
