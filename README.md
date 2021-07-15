# FullStack-Donation-Web-Application
Here, we are trying to pull the data stored in a JSON file on to the front end. 
There is a client side and server side.  

1. Client-Side
2. Server-Side 
Client side runs on http://localhost:3000
Server side runs on http://localhost:6000
Both the servers should run concurrently. 

The client side consists of 2 components

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

The server side consists of APIs which will be called as per the user's request. 
There are 6 APIs for donation interface and 5 APIs for user Interface for all the CRUD operations.
