# Nursefolio
An app requested by medical personnel to improve inefficiencies in storing their personal documents for employers. Leveraging a NoSQL database, the software is designed to organize inoculation records, licenses, and certifications for the user to retrieve at any time. A user login experience was added to allow for scalability

**Live demo available:** https://securedhealth.cyclic.app/

![alt tag](https://i.ibb.co/tx2dxzT/secured-Health.gif)

## How It's Made:
**Tech used:** MongoDB, EJS, Express.js, Node.js, & TailwindCSS

This full stack application was designed using the commonly known architectural pattern, MVC. Beginning with the Model, schemas were created to represent the collection of users and their documents within MongoDB. Cloudinary was integrated for users to upload, store, manage, manipulate, and deliver their images. Then, the users documents in MongoDB are rendered for the user to View using EJS. Finally, the Controllers were fashioned to allow for CRUD operations between the user and database.

## Optimizations
* Handle errors properly for the client using HTTP status codes.
* Add routes for the user to edit the notes with their images.
* Reduce the total amount of form elements by including a partial form in EJS.
* Eliminate redundent code within a few schemas.

## Lessons Learned:
Throughout designing both the front-end and back-end communications, it was great practice learning how to organize code. Following a successful deployment using the Heroku CLI, additional testing became necessary because Heroku was no longer offering a free tier of app deployment services. Cyclic became the new solution after finding their simple GUI for developers.
