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
   - The `notes` state is updated with the fetched notes using `setNotes`.

2. **useEffect:**
   - A React Hook used for handling side effects in functional components.
   - Used to fetch notes when the component mounts (`[]` dependency ensures it runs only once).

3. **Axios:**
   - A JavaScript library used for making HTTP requests.
   - Utilized to make a GET request to the root endpoint (`'/'`) of the backend, fetching existing notes.

4. **Rendering Logic:**
   - The component renders a heading (`<h1>`) with the title "My Notes".
   - A button is rendered, triggering the `fetchNotes` function when clicked.
   - A list (`ul`) is used to display the fetched notes using the `map` function.

5. **Event Handling:**
   - The `onClick` event of the button is set to the `fetchNotes` function.

6. **Error Handling:**
   - Error handling is implemented in the `catch` block of the `try...catch` statement, logging errors to the console.


