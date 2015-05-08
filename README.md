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


----

##File Structure
######Built From Meteor Skeleton ```https://github.com/kjetilhau/meteor-skeleton```

```
app/
 client/							# Client code
   config/						# Configuration files
   lib/							# Library files that get executed first
     helpers/ 					# Helpers that helps you and yours
   routes/						# Everything related to client-side routing
   startup/						# Stuff that gets launched at client load
    stylesheets/					# CSS/LESS/SCSS files
     components/					# Styles for specific components
     sites/						# Styles for sites and collections
   subscriptions/				# Collection subscriptions that are not defined in routes
   views/						# View templates
     documents/					# Views related to the Documents collection
     layouts/					# Layout files defined with Iron Router
     pages/						# Views for static pages
     shared/						# Usually templates that are shared between views
 lib/							# Code shared with client and server files
   collections/					# Collection files, separate files for each collection
   helpers/						# Helpers that is accessible on both client and server
 public/							# Public files
   img/							# Static image folder
   fonts/						# Static fonts folder
 server/							# Server code
   config/						# Server configuration files
   fixtures/						# Fixtures for defining pre-loaded data
   lib/							# Server-side library folder
   publications/					# Collection publications, separate files for each collection
  startup/						# Stuff that gets launched at server startup
config/
tests/
```





