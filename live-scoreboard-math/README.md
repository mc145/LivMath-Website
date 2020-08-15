To-Do list:
#Website - not live platform
     #Front end static
        [x] Create client file
        [x] create index.html file
        [x] basic html framework
        [x] add skeleton style file
        [x] add external style file
        [x] Create nav bar 
            [x] Add Meet the Team
            [x] Create meet.js
            [x] Add About the Contest
            [x] Create about.js
            [x] Add Sponsers
            [x] Create sponsor.js
            [x] Add Contact
            [x] Create contact.js
            [x] Add Homepage
            [x] Create home.js
            [x] Add FAQ
            [x] Create faq.js
            [x] Create register.js
            [x] Add register
        #Homepage
            [x] Style nav bar to get rid of list
            [x] Make list horizontal
            [x] Add hovering effect in css file
            [x] Add welcome stuff on homepage 
            [x] Add button for registration
            [x] Add brief explanation of contest
            [x] Refer to about the contest tab
            [x] Add number of users section to website 
            [] Make newsletter work
        #Meet the Team
            [x] Create grid in css
            [x] Create boxes with space for photo and name in css
            [x] Add my name and photo
            [] Make newsletter work
        #About the Contest
            [] Add text for difficulty and type of contest
            [] Add another registration button
        #Contact
            [] Create form
            [] Add space for query
        #FAQ
            [] Add common questions
            [] Make the formatting nice
        #Sponsers
            [] Add something like a grid for each sponser to come
        #Register
            [] Create form
            [] Add name (if want prize)
            [] Add AoPS name (if don't have create one)
            [] Add other team members (write none if have none)
            [] Add team name
            [] Add button for submission
        
        #Front end js
            #Register
                [] Send data to back end using fetch
        #Back end JS
                [] Install express
                [] Install npm init -y
                [] Create express app
                [] Install dependenices
                    [] Cors 
                    [] morgan
                    [] Sql
                    [] Monk
                    [] nodemon
                    [] bad words
                    [] Express rate
                    [] node mailer
            #Register
                [] Create sql database
                [] Create mongo database for countries
                [] Use the post request for register.html
                [] Receive the data from register input
                [] Make sure nothing is blank
                [] Filter all bad words
                [] Add to sql database
                [] Send number of elements in sql database to home.js
                [] Send number of elements in mongo database to home.js
        #Front end JS
            #Home
                [] Using fetch receive the number of elements
                [] Add to index.html on the bottom the number of elements, to show the number of registrants
            #Contact 
                [] Receive query from form
                [] Send to server using fetch's post function
        
        #Back end js
            #Contact
                [] Receive data from contact.js using get function
                [] Use node-mailer to email query to mathgeek145@gmail.com

            