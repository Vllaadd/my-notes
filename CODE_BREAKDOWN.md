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

5. **Error Handling**
    - The Express application is configured to listen on port 3000 using the `app.listen` method 
    - A callback function logs a message when the serve is successfully started 