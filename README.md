


i. Project Description

# Pawsome
Non profit pet adoption site

<ul><h2>Project Description</h2></ul>

A brief explanation of the project you'll be building with the objective described in non-technical language.

Pawsome is an application for rescued animal adoption to assist shelters with organizing and presenting data about their pets for potential adopters.

Adopters want a clear and simple search experience to find the right addition for their families.

Shelters want to rapidly add new rescues to their system, and track the pets that have been adopted.


 -An explanation of the major challenges you expect to face while building this app and how you foresee your team solving them.

<ul><h2>An explanation of the major challenges you expect to face while building this app and how you foresee your team solving them.</h2></ul>

At the time of writing this proposal, I have not seen the data used by the shelter, but it will presumably be difficult and time-consuming to construct an API from it.

A way to solve this is to determine which attributes are most necessary and leave the rest, and only write for a limited set of animals as a proof of concept.


 - A section clearly defining MVP and POST MVP.


MVP: Pet Gallery, Search, Contact Us form, Authorization Login for adding/removing rescues, make our own API based on shelter data

POST-MVP: All of the above + search with filters, contact us form with email auto-reply, donation management, and a scheduler for adoption checkups (email notifications for a house  visit)

Feature List - List of pieces of functionality of the app. These will go into the trello board.


-Authorization for shelter admin to add and remove rescues from page, and track the owner info for each adopted rescue
-Search rescue gallery, which displays info about each rescue (age, breed, description, etc).
-Contact Us form
-Adoption Form (authorization for parents of successful adoptions to add themselves to the family_data table in the db.


ERD

Weekly schedule

  Date      |  Tara           	|              Wayne	|           Chuck 	|
  05/13     |- [x] proposal	    |---	                |---               	|
  05/13     |- [x] wireframes  	|                    	|                  	|   
  05/13     |- [ ] Header       |   - [ ] api routes  |   - [ ] api routes|   
  05/13     |- [ ] Footer       |                    	|                 	|  
  05/13     |- [ ] Add pet form |                    	|                 	|
  05/14     |- [ ] CRUD         | - [ ] CRUD        	|  - [ ] CRUD     	|
  05/14     |- [ ] pet gallery  | - [ ] pet gallery 	|  - [ ] pet gallery|
  05/14     |- [ ] select pet   | - [ ] select pet    |  - [ ] select pet	|
  05/15     |- [ ] login page   | - [ ] auth          |  - [ ] auth      	|
  05/15     |- [ ] touchups     | - [ ] touchups      | - [ ] touchups    |



api routes
<ul><h2>ERD</ul></h2>
>>>

API Endpoint Documentations list of all of your servers routes, the structure of requests that you expect and the structure of responses they send.



Wireframes sketches of the user interface with notes of how the user will interact with the UI.


https://drive.google.com/file/d/1YmRFXTSfLCeRGGnyPsYxiLBBscfV-tB4/view?usp=sharing

Component Hierarchy Wireframes should be broken into components which then should be described in a component hierarchy.

List Dependencies link to any project dependencies (e.g. 3rd party APIs, libraries, linter, etc).
  "dependencies": {

    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.16.4",
    "morgan": "^1.9.1",
    "nodemon": "^1.19.0",
    "pg": "^7.11.0",
    "sequelize": "^5.8.5"
  "devDependencies": {
    "eslint": "^5.16.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.17.2",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-react": "^7.13.0"
  }




***Link to Wireframes***

https://imgur.com/a/v4BSEI5

***example of json object from pets table***

    {
        "id": 1,
        "name": "Flopsy(f) and Peter(m)",
        "species": "cat",
        "color": "brown",
        "gender": "m/f",
        "breed": "tabby",
        "age": "3 years",
        "medical": null,
        "bio": "Bonded brother and sister (need to stay together). Born in foster care on Easter Sunday but unfortunately looked over as kittens and have spent their entire lives with foster parents. Peter can be shy but comes out of his shell with time",
        "image": null,
        "createdAt": "2019-05-13T18:18:50.244Z",
        "updatedAt": "2019-05-13T18:18:50.244Z"
    },
