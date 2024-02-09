# MY NOTES 

This breakdown details the technologies employed in each file of the project. Gain insights into the tools and concepts utilized to create the My Notes.

## server.js

1. **Express.js** 
    - A web application framework for Node.js
    - Utilized to create a web server and handle HTTP requests and responses 

2. **Mongoose**
    - An Object Data Modeling (ODM) library for MongoDB and Node.js. 
    - Used to interact with the MongoDB database, providing schema-based solution for data modeling 

3. **Middleware**
    - Express middleware is employed to enhance the functionality of the web server. 
    - `express.json()` middleware is used tro parse incoming JSON data 

4. **MongoDB Connection**
    - Connection to the MongoDB database is established using the `mongoose.connect` method 
    - The MongoDB connection string contains authentication credentials and the cluster information 
   
5. **Routes**
   - The two routes serve as the API endpoints for managing notes in the application. The GET route retrieves existing notes, while the POST route adds a ne wnote. The serve responds with appropriate data or error messages based on the success or failure of these operations. 

6. **Error Handling**
    - The Express application is configured to listen on port 3000 using the `app.listen` method 
    - A callback function logs a message when the serve is successfully started 


## App.js

1. **useState:**
   - A React Hook used for adding state to functional components.
   - Enables the component to maintain and update its state.
   - The `useState` hook is utilized to manage the state of `notes`, storing the fetched notes.
   - The `useState` hook is utilized to manage the state of `notes`, storing the fetched notes, and `newNote`, storing the content of the new note being created.

2. **useEffect:**
   - A React Hook used for handling side effects in functional components.
   - Used to fetch notes when the component mounts (`[]` dependency ensures it runs only once).

3. **Axios:**
   - A JavaScript library used for making HTTP requests.
   - Utilized to make a GET request to the root endpoint (`'/'`) of the backend, fetching existing notes.

4. **Event Handling:**
   -The `onChange` event of the textarea is set to update the content of the newNote state as the user types.
The `onClick` event of the button to create a new note triggers the createNote function.

5. **Parsing Tags and Content:**

The parseTagsAndContent function extracts tags from the input content using a regular expression and separates them from the content.
It returns an object containing the extracted tags and the content.

6. **Error Handling:**
   - Error handling is implemented in the `catch` block of the `try...catch` statement, logging errors to the console.


## Issues I came across 
1. **Deployment:**
-  initialization was failing due to the following issue: base directory does not exist /opet/build/repo/build
- I changed the base directory from `/build` to `/`
- the initialization was successful, but then the next step - `buildin` failed with the message: `npm ERR! Missing script: "build"`
- the issue was that the main directory shouldn't be the main folder, which consists of client for front end and server for the backend. Deployment always has focus on frontend only, and that is why once I set the base directory to `/client`, the website was successfuly deployed. 



