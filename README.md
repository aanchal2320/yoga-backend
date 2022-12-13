
# YOGA-REGISTRATION FORM Using React Js and MongoDb

This is a yoga registration form that accepts registrations based on a few validations and allows candidates who meet the form's requirements to participate in our yoga courses.
This project is divided into two folders, one for frontend and the other for backend.
This github repository contains all of the backend's files and code. The frontend has been deployed and is being hosted by render.


## Frontend 
- HTML

- CSS

- Reactjs

* Bootstrap

## Backend

- MongoDb

* nodejs

## About yoga-backend

In this code, we constructed a MongoDb database and linked it to our form.
As we can see above, the db folder contains two primary files that connect our database to our code.

Step 1: In Mongoose, I created a database with a collection called users. This collection contains the information of persons who filled out the yoga class registration form.

![database](https://github.com/aanchal2320/yoga-backend/blob/main/images/3.png?raw=true)

Step 2: I created a.env file in the github-mentioned subdirectory. This file includes the Mongoose database URL that we built.


Step 3: The database is linked in the dbConnect.js file using the.env file, which contains the MongoDb URL.

![database](https://github.com/aanchal2320/yoga-backend/blob/main/images/5.png?raw=true)

Step 4: Within the db folder, I constructed a userModel.js file This file contains all of the fields, including name, age, gender, and date of joining. These fields must be entered into the database.

![database](https://github.com/aanchal2320/yoga-backend/blob/main/images/6.png?raw=true)


![database](https://github.com/aanchal2320/yoga-backend/blob/main/images/10.png?raw=true)

After that, we execute our backend with the command "nodemon app.js," and our database is launched on the server localhost:3000.

![database](https://github.com/aanchal2320/yoga-backend/blob/main/images/11.png?raw=true)


## About the frontend

The form looks like the following:-


In the frontend code we created few functions:-

- Register()- this is the main function which includes all the use states of the fields whcih are to be entered by the user.

![code](https://github.com/aanchal2320/yoga-backend/blob/main/images/8.png?raw=true)

- handlePayment()- this is a dummy function which clicking the payment button alerts with a message that payment is successful and if any other field do not passes the validation it alerts that a particular field is not valid hence payment cannot be done.

![code](https://github.com/aanchal2320/yoga-backend/blob/main/images/12.png?raw=true)

- handlesubmit()- it checks if age entered by the user is between 18 to 65, if yes then submission of the form is possible else a message is popped that age is invalid.

- return() - it includes all the HTML part,designing, alignment of the form fields.



## The fields included in the frontend of the form are:-

- Name : Which accepts the name of the participants

- Age : Which accepts the age only if its between 18 and 65 years

- Gender : This field has three options - Male,female,other

- Batch Timings : This field has 4 options in drop down format which. participant can go for any of the four batch timings for that particular month.

- payment: This is a dummy button which on clicking just shows with a message if payment is successful or not.

- submit : This button submits the details of the user with an alert that "User Registered successfully" and now the details of the user can be seen in our database.














## Snapshots

![Registration Form](https://github.com/aanchal2320/yoga-backend/blob/main/images/4.png?raw=true)


![Filled Form](https://github.com/aanchal2320/yoga-backend/blob/main/images/2.png?raw=true)


![Registered](https://github.com/aanchal2320/yoga-backend/blob/main/images/1.png?raw=true)


![Unsuccessful registration](https://github.com/aanchal2320/yoga-backend/blob/main/images/9.png?raw=true)


## Frontend repository link
https://github.com/aanchal2320/yoga-frontend
