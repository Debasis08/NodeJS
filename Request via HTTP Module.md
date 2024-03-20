## HTTP GET Request Example

This file demonstrates how to make a simple HTTP GET request to a specified URL using Node.js. The URL targeted in this example is `https://github.com/Debasis08`, and the goal is to print the HTTP status code of the response to the console.

### Prerequisites

To run this example, ensure you have Node.js installed on your system. You can download and install Node.js from [the official website](https://nodejs.org/).

### Code Explanation

```javascript
const http = require('http');

let options = {
    host: 'https://github.com',
    path: '/Debasis08',
    method: 'GET'
};

// Making a get request to 'https://github.com'
http.request(options, (response) => {

    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
}).end();

```

### Detailed Breakdown

1. **Import HTTP Module**: The `http` module is a core Node.js module that provides utilities for server and client HTTP communications. It is imported at the beginning of the script using `require('http')`.

2. **Define Request Options**: The `options` object specifies the details of the HTTP request:
   - `host`: The domain name of the website you are making the request to.
   - `path`: The specific path on the website you are targeting. In this case, `/Debasis08`.
   - `method`: The HTTP method to use. For this example, we are making a `GET` request.

3. **Making the GET Request**: The `http.request()` method is used to make the HTTP request. It takes two arguments:
   - `options`: The request options object defined earlier.
   - A callback function that is called when a response is received. The callback function has one parameter, `response`, which is an object containing response details.

4. **Handling the Response**: Inside the callback function, `console.log(`STATUS: ${response.statusCode}`);` prints the HTTP status code of the response to the console.
5. The status code provides information about the result of the request (e.g., 200 for success, 404 for not found).

6. **Ending the Request**: `.end()` is called on the request object returned by `http.request()` to indicate that the request is complete and to actually send the request.

### Running the Example

To run the example, save the code to a file (e.g., `getRequest.js`) and execute it using Node.js:

```bash
node getRequest.js
```

After running the command, the script will make an HTTP GET request to `www.geeksforgeeks.org/courses`, and you should see the HTTP status code of the response printed to the console.

### Conclusion

This example provides a basic foundation for making HTTP GET requests in Node.js. It demonstrates how to specify request options, handle responses, and print information from the response to the console.
This can be particularly useful for tasks such as **API consumption or web scraping**.

---
