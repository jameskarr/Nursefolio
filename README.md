# Secured Health
Created to aid medical personnel with tracking their personal documents for employers. Shot records, certifications, and licenses expire at different times and keeping those items organized can be difficult. With a user login experience, you can upload a photo with notes and access them on any device at any time.

**Live demo available:** https://securedhealth.cyclic.app/

## How It's Made:
**Tech used:** MongoDB, EJS, Express.js, Node.js, & TailwindCSS

This full stack application was designed using the commonly known architectural pattern, MVC. Beginning with the Model, schemas were created to represent the collection of users and their documents within MongoDB. Cloudinary was integrated for users to upload, store, manage, manipulate, and deliver their images. Then, the users documents in MongoDB are rendered for the user to View using EJS. Finally, the Controllers were fashioned to allow for CRUD operations between the user and database.

## Optimizations
* Add routes for the user to edit the notes with their images.
* Reduce the total amount of form elements by including a partial form in EJS.
* Eliminate redundent code within a few schemas.

## Lessons Learned:
Throughout designing both the front-end and back-end communications, it was great practice learning how to organize code. Following a successful deployment using the Heroku CLI, additional testing became necessary because Heroku was no longer offering a free tier of app deployment services. Cyclic became the new solution after finding their simple GUI for developers.