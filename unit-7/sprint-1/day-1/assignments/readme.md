1) A Blocking code is a thread in a computer programme which takes some time to execute like in NodeJs Read file, Getting data from 
Database is mainly time taken process we can say this is a blocking code. If we talk about Non-blocking, they are mainly Callbacks, 
promises on which NodeJs is built upon. 

2) Throughput of a system is defined as the number of computations in a constant time that a computer can do. 

3) readFile and readFileSync both are the NodeJs functions( inbuilt module) that help us to read files. The only difference in both is
that the readFileSync is blockinng in nature such that it reads the file synchronously while readFile is non-blocking in nature and can read
a file asynchronously.

4) For making/ handling the network requests in Nodejs we need Http module of NodeJs. So firstly we'll create server using http.createServer()
method. Before handling the requests we listen this server to a Port. Now finally we can make http requests that can be handled by server.on()
method.

5) To create a web server without express we have to import inbuilt http module off Nodejs. Below is the implementation part:
    const http=require('http');
    const server=http.createServer();
    server.on('/',(req,res)=>{
        res.end('Welcome to homepage');
    })
    server.listen(3000,()=>{
        console.log('Server runnig at Port: 3000);
    })

6) Libuv is a cross platform C library which basically used to handle asynchronous tasks in Nodejs. It basically has some thread pools that can 
handle all the asynchrounous tasks in NodeJs and can be run parallely. This combination of thread is called thread pool of libuv. 

7) NodeJs works upon Event loop and there are many phases in Event loop some of them are given below with their functionality:
    -Timers: this phase execute callbacks scheduled by setTimeout() and setInterval()
    -Pending callbacks: this phase executes callbacks for some system operations such as types of TCP errors.
    -Poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, 
     and setImmediate() node will block here when appropriate.
    -Check: this phase allows a person to execute callbacks immediately after the poll phase has completed. 
    -process.nextTick(): all callbacks passed to process.nextTick() will be resolved before the event loop continues.

8) Timers in Nodejs helps us to schedule our task or block of code to executeat some point. We don't need to require timers via require().

9) NVM allows us to install different versions of Node, and switch between these versions depending on the project that you're working on via the command line.
NVM makes it easier to manage multiple versions of Node.js across different projects that require different versions.

10) CommonJS is a synchronous module system commonly used in Node.js, while ES Modules are an asynchronous module system primarily used in modern browsers, but also available in Nodejs.

11) The crypto module in Node.js provides cryptographic functionality, including cryptographic hash functions, encryption, decryption, and other cryptographic operations. It is primarily used for secure communication, data integrity, and data protection. 

const hash = crypto.createHash('Masai');
hash.update('Ashish');
const digest = hash.digest('hex');

12) Websockets are a communication protocoal that provides full-duplex communication over a single TCP connection. They allow 
real-time biderictional communication between a client and a web server. Unlike traditional HTTP (Hypertext Transfer Protocol) requests, which are stateless and require the client to initiate communication, WebSockets enable persistent connections that allow both the client and server to send data at any time.

13) Microservices are an architectural style in software development where a complex application is divided into smaller, independent, and loosely coupled services. Each microservice represents a specific business capability or functionality and can be developed, deployed, and scaled independently. These services communicate with each other through well-defined APIs.

14) mkdir my-cli-app
    cd my-cli-app
    npm init

const args = process.argv.slice(2);
const command = args[0];
if (command === 'hello') {
  console.log('Hello, CLI!');
} else {
  console.log('Unknown command.');
}

15) Express is a popular web application framework for Node.js that simplifies the development of web applications and APIs. It provides a robust set of features and utilities for building web servers and handling HTTP requests and responses.

16) Routes refer to the mapping between URLs (Uniform Resource Locators) and the corresponding actions or handlers in a web application. Routes define the structure and behavior of an application's endpoints, determining how the application responds to incoming requests.

17) Middleware refers to functions or modules that are placed in the request-response processing pipeline of an application. Middleware functions have access to the request and response objects and can perform operations on them, modify them, or pass control to the next middleware function in the chain.

18) MVC stands for Model-View-Controller and is a software architectural pattern used for designing and organizing applications. The MVC framework separates an application into three interconnected components: the model, the view, and the controller.

19) Validations in software development are essential for ensuring that data or input meets certain requirements or constraints.

20) Static routing refers to the process of defining explicit routes in a web application or server for handling specific URLs. Unlike dynamic routing, where routes are determined based on patterns or parameters, static routing involves directly specifying the URL paths and the corresponding actions or handlers to be executed.

21) There are several templating engines available for web development, each with its own syntax and features. Like Mustache, EJS, Handlebars, Pug, Twig, React, etc.

22) In Express, session management can be achieved using middleware that handles session data and provides session-related functionality. The express-session middleware is a popular choice for managing sessions in Express applications. 

23) Mongoose, Cors, Body-parser, Passport, Multer, Axios are the commonly used library in express framework.

24) CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows web browsers to make cross-origin HTTP requests securely. By default, web browsers enforce a security policy called the same-origin policy, which restricts web pages from making requests to a different origin (domain, protocol, or port) than the one that served the page.

25)  The process of evaluating a system, component, or software application to ensure that it functions as expected and meets the specified requirements is called as testing.

26) Unit testing verifies the behavior and functionality of small code units, such as functions or methods, to ensure they work correctly.

27) HTTP: HTTP is an application protocol that enables the transfer of hypertext, media files, and other resources over the internet. It uses a plain-text format for data transmission. HTTP does not provide any inherent encryption or data integrity mechanisms. The data transmitted over HTTP is not encrypted, making it susceptible to interception and modification by unauthorized parties.
HTTPS is a secure extension of HTTP. It uses the same application protocol (HTTP) but adds an extra layer of security through encryption.

28) SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a network, such as the internet. They establish an encrypted connection between a client and a server, ensuring the confidentiality and integrity of the data transmitted between them.

29) OWASP stands for the Open Web Application Security Project. It is a nonprofit organization dedicated to improving the security of software applications and the web in general. OWASP provides free resources, tools, and knowledge to help organizations and individuals develop secure web applications and protect against common security vulnerabilities.

30) SQL: SQL databases, also known as relational databases, follow a tabular data model. Data is organized into tables with predefined schemas, where each table consists of rows and columns. The relationships between tables are established using foreign keys.
NoSQL: NoSQL databases employ various data models, including key-value, document, columnar, and graph models. The data structure is typically flexible, allowing for dynamic schemas and accommodating unstructured or semi-structured data.

SQL: SQL databases enforce a fixed schema, meaning that the structure and types of data are defined in advance. Changes to the schema often require schema migrations, which can be complex.
NoSQL: NoSQL databases have a dynamic schema, allowing for schemaless or schema-on-read approaches. This flexibility enables easier adaptation to evolving data requirements.

SQL: SQL databases traditionally scale vertically by increasing the hardware resources of a single server. Scaling horizontally across multiple servers can be challenging.
NoSQL: NoSQL databases are designed to scale horizontally, distributing data across multiple servers or clusters. They can handle large amounts of data and high traffic loads more easily.

31) Indexing refers to the process of creating data structures that improve the speed and efficiency of data retrieval operations. An index is a data structure associated with a database table that allows for faster lookup and retrieval of data based on specific columns or fields. It works similar to an index in a book, where it provides quick access to information based on specific keywords.

32) Database replication refers to the process of creating and maintaining multiple copies of a database in order to ensure data availability, improve performance, and enhance data durability. It involves copying and synchronizing data from a source database to one or more destination databases, often located on different servers or in different geographical locations.

33) CAP theorem states that it is impossible for a distributed data store to simultaneously provide all three of the following guarantees: Consistency, Availability and Partition tolerance