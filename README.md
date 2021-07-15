# FullStack-Donation-Web-Application
This is a full Stack donation web application in which the users can enter their details regarding the donations. The entered details will be visible on the web application when the user clicks "Add Donation" button. I haven't used any kind of database for this project. The data was stored in a json file db.json and it is retrieved with the help of APIs onto the front end.

Here, we are trying to pull the data stored in a JSON file on to the front end. 
There is a client side and server side.  

1. Client-Side
2. Server-Side 

Client side runs on http://localhost:3000 => Instructions to invoke the client are provided in readme.md of folder Client-Side. 

Server side runs on http://localhost:6000 => Instructions to invoke the server are provided in readme.md of folder Server-Side.

Both the servers should run concurrently. 

The client side consists of 2 main components which will provide interaction with users. 

1. addDonation
2. DonationDetail 

addDonation provides the front end of our web application where the user can add his details and make a donation. 

DonationDetail provides the list of donations made onto the front end. This also has a delete method where the donations can be deleted.

There are two types(interfaces) that are included:

User: the schema includes 

id: number 

firstName: string 

lastName: string 

email: string

Donation: The schema includes 

id: number 

userid: number 

amount: number 

tip: number

The server side is REST API which will be called as per the user's request. 
There are 6 endpoints for Donation Interface and 5 endpoints for User Interface for all the CRUD operations.
