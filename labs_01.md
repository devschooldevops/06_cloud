Setup azure function in azure portal
============	

This labs covers the setup of an azure funciton plus aditional exercises that you can do with the azure function.

Setting up azure function in azure portal
* create account with styudent pack: https://azure.microsoft.com/en-us/free/students/
* navigate to function app https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp 
* create new function app
* create resource group
* fill in the details, review and create the function, this can take a few minutes 

Configuring your function app in visual studio code
------------

we will continue in visual studio code to create the function app
* open visual studio code
* install extension azure functions
* open the function app in visual studio code
* create a new project folder, by hitting the little folder on the right top
* create a new function
* deploy the function to the function app you created before
* navigate to the function you created in the azure portal and fetch the url
* * add &name=test123 and see the result

Congratulations, you've just created your first azure function, a serverless app

Extra exercises
---------------
Of course it doesn't end here, the rest of the exercises are more open ended and require you to dig around in the azure portal and its documentation

**Level 1:**
* Figure out which `HostInstanceId` is being used when you call your function
* add an extra variable `lastname` to the HTTP call and print the last name

**Level 2:**
* Create a simple function that squares every number you insert into the call
* Create a function which is not an HTTP triger
