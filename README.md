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

##Options to use

--length <number> 
 Example: node index --length=20
 Description: changes the length of your generated password
  
--save 
 Example: node index --save 
 Description: saves the generated password to passwords.txt in your folder
  
--no-numbers
Example: node index --no-numbers 
Description: completely takes out numbers off of the generated password
  
--no-symbols
Example: node index --no-symbols
Description: completely takes out symbols off of the generated password
  
-h
Example: node index -h
Description: shows the help menu with all commands

-V
Example: node index -V
Description: shows the version of the program
