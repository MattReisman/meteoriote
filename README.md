# meteorSpark  

| Spark Core Meteor App |  
|:---------------:|
|  A simple, boilerplate meteor app that controls a SparkCore |
| 	https://github.com/MattReisman/meteorSpark |

---





##Getting Started

####Install Meteor and Dependencies
######Node & NPM
Install node and npm if you haven't already.
 > Node: https://nodejs.org/
 
 > NPM: https://www.npmjs.com/    

######Install Meteor
Learn more at http://www.meteor.com/
 > ``` curl https://install.meteor.com | /bin/sh  ```
 
--

###Clone, Launch, Deploy

######Clone App 
Open Terminal window and type the following command:
> ``` git clone git@github.com:MattReisman/meteorSpark.git ```
 

######Run on local node server

Move to app directory and enter "meteor" command"
> ``` cd meteorSpark/app ```

> ```meteor ```

Open up a browser and go to ```http://localhost:3000/``` where you should see your app running!


######Deploy on meteor.com:
Meteor allows you to deploy your app for free on meteor.com.  And it's incredibly easy to do.  
 
**Name of App in example below is ```*"meteorSpark"*```**
You can choose whatever name you'd like as long as it hasn't been taken.  If it has, you will be notified when you deploy in the next step.

*Make sure you are in the ```/app``` directory of your project*
> ```meteor deploy meteorSpark.meteor.com```

You will receive a response telling you that it has deployed
```"Deploying to meteorspark.meteor.com.
Now serving at http://meteorspark.meteor.com"```

Enter that url in your browser and you will see your app running!
