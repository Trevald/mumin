# mumin
Suomlainen 101

## Project setup
```
npm install
```

## Make Mumin executable
```
chmod +x cli.js
```

## Link the command name to bin
Enables to run the command `mumin [query]` from the directory
```
npm link
```
*Note this command might be required to be run by root*

## Usage
Running `mumin morning` will output:
```
Good morning   Hyvää huomenta
```

Running `mumin a` will output all phrases beginning with the letter A.

Running just `mumin` will output full dictionary.
