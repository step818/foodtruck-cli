# _Food Truck CLI_

## Usages

` node . `
` node . --help `
` node . --version `
` node . config -k=<ApiToken> `
` node . now `

## Description

This console program is designed to take particular commands from the user. The main goal is to retrieve a specific list of food trucks from the DataSF Food Truck API. The requirements are to retrieve only the name and location of the food truck, in alphabetical order, and only 10 food trucks per page. The user can use a command to see the remaining food trucks in chunks of 10 at a time. The only food trucks that are displayed to the user are the ones that are open at the time the user types their command to see the list. So if the user types `show-open-food-trucks now`, and the day and time is Wednesday at 6:30 pm, the list will only display food trucks that are open on Wednesdays at 6:30 pm.

----------

## Setup/Installation Requirements
----------
### Pre - Installation Requirements

You will need to install Node & npm on your computer if you haven't already.

Go to https://nodejs.org/en/download and follow instructions for either Windows, Mac, or Linux depending on what platform you are using.

Open your computer’s command prompt (Windows) or terminal (macOS/Linux).

Just type `node -v` in the command line and hit Enter to make sure Node was installed.
The version of Node you downloaded will appear, something like `v12.13.0`.

Then type `npm -v` in the command line and hit Enter to make sure NPM was installed.
The version of NPM you downloaded will appear, something like `6.12.0`.

### Opening the Food Truck CLI Program

Drag or copy the "foodtruck-cli" folder to your desktop.

Open your terminal and `cd` to the `foodtruck-cli` project directory.

Once inside the root directory, to build locally, `npm install` and `npm link` 

Once inside the root directory, use the command `show-open-food-trucks --help`,
to see a menu of valid commands.

If this returns an error, ` node . --help ` or `node . -h` will return the correct help menu to the console. The `npm link` command isn't recognized by your terminal, since that is the command that allows the custom `show-open-food-trucks` to work. 

You will need to apply your own API token, instructions on how to do so follow:

If the `show-open-food-trucks -h` command is not recognized, then use ` node . config -k=<ApiToken> ` but insert your Api token in place of the `<ApiToken>`.  

Use the ` show-open-food-trucks config -k=<ApiToken> ` command with your API token to configure the program to gain access to the DataSF API.

This will safely save your Api Token for use of the CLI program so that you won't have to configure your way through the back end of the code. And your token will not be visible to any one else either. 

Next, use the ( ` node . now ` ) or ` show-open-food-trucks now ` command to have a table with food truck names and locations be displayed.

Enjoy!

## Technologies Used
_Node.js, VSCode, Windows 10.1, powershell, DataSF Socrata

### License
*Licensed under the GPL License*
Copyright (c) 2019 **__**