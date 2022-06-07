# IStay Password Generator

This is an applications using NODE.JS to randomly generate passwords with tons of options. 

## What it does

Creates passwords with the following options:

- Customize the length of the password
- Decide whether you want symbols/numbers or not 
- Option to save the password to a .txt file


## Usage of the program

Use the following command to install all dependencies
```
npm install
```

Use the following command to run the program.

```
node index <options> 
```

## Options to use



|       Option              |          Example        |                            Description                                             | 
| ------------------------  | ----------------------- | ---------------------------------------------------------------------------------- |
| --version or -V           | node index              | Shows the version of the program                                                   |               
| -h                        | node index -h           | Shows the help menu of the program                                                 |                       
| --no-numbers              | node index --no-numbers | Tells the program to not include numbers in the generated password                 |
| --no-symbols              | node index --no-symbols | Tells the program to not include symbols in the generated password                 |
| --save                    | node index --save       | Tells the program to save the generated password to passwords.txt in the directory |
| --length                  | node index --length=20  | Tells the program to make the password a specific amount of characters             |
