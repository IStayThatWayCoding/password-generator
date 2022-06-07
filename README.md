# IStay Password Generator

This is an applications using NODE.JS to randomly generate passwords with tons of options. 

## What it does

Creates passwords with the following options:

- Customize the length of the password
- Decide whether you want symbols/numbers or not 
- Option to save the password to a .txt file


## Usage of the program

Requirements:

- NodeJS 
- Command Line to CD into the folder
- (optional) GIT

## Using Git

To clone this repo using git, click on the green code button on the top right and copy the link. Open GIT and type "git clone <repo link> and search for it in your computer. Then use git to CD into that folder, and use the commands to use the program!

## Using Windows CMD/Mac Terminal [look up mac instructions if needed]

To use this repo with cmd/terminal, download the code using a zip program like winrar/7zip. Put it on your desktop or anywhere you can remember. Make sure to unzip it. Open your cmd/terminal and CD into the folder. [Help with CD](https://smallbusiness.chron.com/previous-directory-mac-terminal-49989.html). Type the commands below and use the program as much as you'd like!

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
  
## Support

DM istay#5154 on discord for help, more ways coming soon.
  
## Future Updates

- A website to generate passwords
- Full discord support
