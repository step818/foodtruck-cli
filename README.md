# _Food Truck CLI_

#### By _**Stephen Trewick**_

## Description

This console program is designed to take particular commands from the user. The main goal is to retrieve a specific list of food trucks from the DataSF Food Truck API. The requirements are to retrieve only the name and location of the food truck, in alphabetical order, and only 10 food trucks per page. The user can use a command to see the remaining food trucks in chunks of 10 at a time. The only food trucks that are displayed to the user are the ones that are open at the time the user types their command to see the list. So if the user types `show-open-food-trucks now`, and the day and time is Wednesday at 6:30 pm, the list will only display food trucks that are open on Wednesdays at 6:30 pm.

----------

## Setup/Installation Requirements

Open the folder in your favorite code editor

Then in your terminal or command line, `cd` to the  `foodtruck-cli` folder.

Once inside the root directory, use the command `$ show-open-food-trucks --help`,
to see a menu of valid commands.

You will need to apply your own API token, instructions on how to do so follow:

Use the ` show-open-food-trucks config -k=<ApiToken> ` command with your API token to configure the program to gain access to the DataSF API.

Next, use the ` show-open-food-trucks now ` command to have a table with food truck names and locations be displayed.

Enjoy!

## Technologies Used
_Node.js, VSCode, Windows 10.1, powershell, DataSF Socrata

### License
*Licensed under the GPL License*
Copyright (c) 2019 **_Stephen Trewick_**