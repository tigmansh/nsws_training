Models: In software development, models refer to the representations or abstractions of real-world entities or data used to structure and organize information within an application.

Mongoose and Promises: Mongoose, an ODM for MongoDB, originally used its own implementation called mpromise instead of native Promises. However, starting from Mongoose version 5.0, native Promises are supported. .then is used to handle asynchronous operations with Promises.

Aggregation pipelines with Mongoose: Aggregation pipelines in Mongoose enable complex data aggregation operations on MongoDB collections. Pipelines consist of stages that process input documents and pass the results to the next stage.

Arrow functions and this in Mongoose: Arrow functions do not bind their own this context, which can lead to incorrect values when used in virtuals, middleware, getters/setters, or methods. Regular functions should be used instead.

Creating/destroying connections for each database operation: It's recommended to create a single database connection and reuse it across multiple operations to improve performance. Creating new connections for each operation can be inefficient.

Query/update executing twice: Double execution of query/update operations can occur due to multiple event listeners or middleware functions being attached to the same event.

Creating indexes with Mongoose: Indexes can be created in Mongoose using the index schema option or the createIndex method. Indexes enhance query performance by optimizing data retrieval.

Pre and post hooks: Pre and post hooks in Mongoose allow you to define middleware functions that are executed before or after specified operations on a model, such as saving or removing documents.

Authentication: Authentication is the process of verifying the identity of a user or system. It ensures that the user or system is who they claim to be before granting access to protected resources or functionalities.

Authorization: Authorization determines the permissions and access rights granted to authenticated users. It controls what actions or resources a user is allowed to access based on their role, permissions, or other criteria.

Role-based authentication: Role-based authentication involves assigning roles to users and granting permissions based on those roles. Users are authorized to perform certain actions based on their assigned roles.

Hashing: Hashing is a one-way process of converting data (such as passwords) into a fixed-length string of characters using a cryptographic algorithm. The resulting hash value is unique to the input data and is not reversible.

Encryption: Encryption is the process of encoding data in a way that can only be decrypted or deciphered with a specific key or password. It ensures that data remains confidential and secure during transmission or storage.

Difference between hashing and encryption: Hashing is a one-way process, while encryption is reversible. Hashing is primarily used for data integrity and password storage, whereas encryption is used for confidentiality.

Salt: In the context of hashing, a salt is a randomly generated value added to the input data before hashing. It adds uniqueness to the hash, making it more secure against attacks like rainbow table attacks.

JWT: JWT stands for JSON Web Token. It is a compact and self-contained token format used for securely transmitting information between parties as a JSON object. JWTs are often used for authentication and authorization purposes.

Pros and cons of JWT tokens: Pros of JWT tokens include statelessness, easy implementation, and scalability. Cons include token size, lack of revocation, and the need to store token-related data on the client-side.

Different ways to manage authentication: Authentication can be managed using various methods such as session

Cookie-based auth: Cookie-based authentication involves storing a token or session identifier in an HTTP cookie. The server validates the cookie on subsequent requests to authenticate the user.

Session management: Session management involves creating and maintaining a session for each authenticated user. Sessions store user-specific data on the server and use a session identifier (often stored in a cookie) to associate requests with the correct session.

OAuth: OAuth is an open standard protocol that allows users to grant third-party applications access to their resources without sharing their credentials. It provides a secure and standardized way for authentication and authorization.

REST API: REST (Representational State Transfer) API is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources identified by URLs.

gRPC: gRPC is a high-performance, open-source framework developed by Google for building remote procedure call (RPC) systems. It uses protocol buffers for data serialization and supports various programming languages.

GraphQL: GraphQL is an open-source query language and runtime for APIs. It allows clients to request specific data and shape the response according to their needs, reducing over-fetching and under-fetching of data.

HTTP: HTTP (Hypertext Transfer Protocol) is the foundation of communication on the World Wide Web. It is an application protocol that enables the exchange of information between clients and servers.

Web socket: WebSockets provide full-duplex communication channels over a single TCP connection. They enable real-time, bidirectional communication between a client and a server, allowing for instant data updates.

Caching: Caching is the process of storing frequently accessed data in a cache to improve performance and reduce the load on the underlying system. Cached data can be retrieved faster than fetching it from the original source.

Backend caching: Backend caching involves caching data on the server-side to reduce response time and improve scalability. It can be implemented using in-memory caches like Redis, database query caches, or HTTP caches.

LRU cache: LRU (Least Recently Used) cache is a cache eviction policy where the least recently used items are removed when the cache reaches its capacity. It ensures that the most frequently accessed items remain in the cache.

Redis: Redis is an open-source, in-memory data structure store that can be used as a database, cache, or message broker. It provides high performance and supports various data structures, making it suitable for caching.

Frontend caching: Frontend caching involves caching data on the client-side, typically in the browser. It can be implemented using techniques like local storage, session storage, or caching frameworks/libraries.

CDN: CDN (Content Delivery Network) is a geographically distributed network of servers that caches and delivers web content to users based on their location. It improves content delivery speed and reduces server load.

DNS: DNS (Domain Name System) is a decentralized naming system that translates domain names (e.g., example.com) into IP addresses. It allows users to access websites using human-readable domain names.

How the internet works: The internet is a global network of interconnected computers. It operates through a combination of protocols, such as IP (Internet Protocol) for addressing and routing, and TCP (Transmission Control Protocol) for reliable data transmission.

How browsers work: Browsers are software applications that allow users to access and interact with websites. They send HTTP requests to servers, receive and render HTML, execute JavaScript, and display the content to users.

Stateless backend: A stateless backend does not store session-related data on the server-side. Each request contains all the necessary information for the server to process it, without relying on server-side session storage. The server treats each request as independent and does not maintain any client-specific state.

Client-server model: The client-server model is a computing architecture where client devices (such as browsers or mobile apps) communicate with server systems over a network. Clients request resources or services, and servers respond with the requested data or perform the requested operations.

HTTP vs HTTPS: HTTP (Hypertext Transfer Protocol) is the standard protocol for transmitting data over the web. HTTPS (HTTP Secure) is an extension of HTTP that adds encryption and security through SSL/TLS protocols, ensuring secure communication between clients and servers.

Throughput: Throughput refers to the rate at which a system can process a certain amount of work. It measures the amount of data transferred or processed within a given time frame.

Availability: Availability is the measure of how accessible and operational a system is to users. It indicates the system's ability to remain functional and accessible, typically expressed as a percentage of uptime.

Latency: Latency is the time delay between a request being sent and a response being received. It represents the time taken for data to travel from the source to the destination.

Rate limiting: Rate limiting is a technique used to control the number of requests or data transferred within a specific time period. It helps prevent abuse, limits resource consumption, and ensures fair usage of a system's resources.

Ways to implement rate limits: Rate limits can be implemented using techniques such as token buckets, sliding windows, or fixed window counters. API gateways, reverse proxies, or specialized rate-limiting services can also be used.

Load balancer: A load balancer is a device or software component that distributes incoming network traffic across multiple servers or resources. It helps evenly distribute the workload and improve performance, scalability, and availability.

Designing an API: Designing an API involves defining the endpoints, request-response formats, authentication/authorization mechanisms, and overall structure of the API to ensure ease of use, scalability, and maintainability.

Horizontal and vertical scaling: Horizontal scaling involves adding more machines or nodes to distribute the workload, while vertical scaling involves increasing the resources (CPU, memory) of an existing machine. Both are strategies to handle increased load and improve performance.

Building a reliable system: Building a reliable system involves implementing redundancy, fault tolerance, monitoring, and error handling mechanisms. It includes proper backup strategies, disaster recovery plans, and proactive system maintenance to minimize downtime and ensure data integrity.
