## Simple HTTP Server Example

This example demonstrates how to create a **basic HTTP server** in Node.js. The server listens on port 3000 and responds with "Git Repository of Debasis" to all incoming requests.

### Prerequisites

To run this example, ensure you have Node.js installed on your system.
You can download and install Node.js from [the official website](https://nodejs.org/).

### Code Explanation

```javascript

// Import the http module from Node.js standard library
const http = require('http');

// Create an HTTP server
http.createServer((request, response) => {

    // Sends a chunk of the response body with the text 'Hello World!'
    response.write('Git Repository of Debasis');

    // Signals the server that all of the response headers and body have been sent
    response.end();
}).listen(3000); // The server listens on port 3000 for incoming connections

// Log a message to the console indicating that the server has started
console.log("Server started on port 3000");

```

### Detailed Breakdown

1. **Import HTTP Module**: The `http` module is a core Node.js module that provides utilities for server and client HTTP communications. It is imported at the beginning of the script using the syntax `require('http')`.

2. **Create Server**: The `http.createServer()` method creates a new HTTP server. It takes a request listener function as an argument, which is automatically added to the `'request'` event.

3. **Request Listener Function**: This function is executed each time the server receives a request. It has two parameters:
   - `request`: An object containing request details (e.g., URL, headers).
   - `response`: An object used to return data back to the client.

4. **Sending Response**: Inside the request listener function, `response.write('Git Repository of Debasis')` sends a chunk of the response body. This is where you can specify the content you want to send back to the client.

5. **Ending Response**: `response.end()` is called to signal that all of the response headers and body have been sent. This method must be called on each response.

6. **Listening on Port 3000**: The `listen` method is called on the server object returned by `http.createServer()`. It tells the server to start listening for incoming connections on port 3000.

7. **Logging to Console**: Finally, `console.log("Server started on port 3000")` prints a message to the console, indicating that the server is running and listening for requests on port 3000.


### Running the Server

To run the server, save the code to a file (e.g., `server.js`) and execute it using Node.js:

```bash
node server.js
```

After running the command, the server will start, and you should see the message "Server started on port 3000" in the console. You can then visit `http://localhost:3000` in your web browser to see the "Git Repository of Debasis" message.

### Conclusion

This example provides a basic foundation for creating HTTP servers in Node.js. It demonstrates handling requests and sending responses, which are fundamental concepts in web development.

--- 
