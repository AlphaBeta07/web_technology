# Express Activities

## Express Basic

**1. Difference between package.json and package-lock.json**
- **package.json**: Contains metadata about the project, scripts, and lists the dependencies with version ranges (e.g., `^4.18.2`). It tells npm which packages are needed.
- **package-lock.json**: Automatically generated. It contains the **exact** versions of dependencies and their sub-dependencies installed, ensuring reproducible builds across different environments.

**2. Difference between Dev dependencies and dependencies**
- **dependencies**: Packages required for the application to run in production (e.g., `express`, `ejs`, `mongoose`).
- **devDependencies**: Packages only required for local development and testing, not in production (e.g., `nodemon`, `jest`, `eslint`).

**3. Routes creation and use js in that**
- Routes are created using `app.METHOD(path, handler)`. You can define complex JavaScript logic inside the handler function to process the request and send a response.

**4. Types of HTTP methods**
- **GET**: Retrieve data from the server.
- **POST**: Send new data to the server to create a resource.
- **PUT**: Update an existing resource entirely.
- **DELETE**: Remove a resource from the server.

---

## Middleware

**1. Why we use middleware?**
To intercept incoming requests before they reach the final route handler. This allows us to perform intermediate tasks like logging, parsing request bodies, authenticating users, or handling errors without repeating code in every route.

**2. What are the types of middleware?**
- **Application-level middleware**: Bound to `app` (e.g., `app.use()`).
- **Router-level middleware**: Bound to `express.Router()`.
- **Error-handling middleware**: Takes 4 arguments `(err, req, res, next)`.
- **Built-in middleware**: Provided by Express (e.g., `express.json()`, `express.static()`).
- **Third-party middleware**: Installed via npm (e.g., `cors`, `morgan`, `helmet`).

**3. What are the benefits of middleware?**
- **Code Reusability**: Write once, use in multiple routes.
- **Separation of Concerns**: Keeps route logic clean.
- **Request Modification**: Can easily add data to `req` or `res` objects.

**4. Where the middleware is used in company level?**
- **Authentication/Authorization**: Verifying JWT tokens before allowing access to secure routes.
- **Logging**: Tracking API usage and monitoring (e.g., Morgan).
- **Security**: Setting HTTP headers (e.g., Helmet), preventing CSRF attacks.
- **Data Parsing**: Parsing JSON or Multipart form data (file uploads).

---

## Query Parameter

**1. What are the query parameters?**
Key-value pairs appended to the end of a URL after a `?` mark, separated by `&` (e.g., `?key=value&key2=value2`).

**2. Detail study about query parameter**
Query parameters are used to pass optional configuration to an API route. Because they are part of the URL, they are great for filtering, sorting, or pagination. In Express, they are automatically parsed into an object accessible via `req.query`.

**3. 3-4 examples of query parameters**
- Search: `/api/products?search=laptop`
- Pagination: `/api/users?page=2&limit=50`
- Filtering: `/api/flights?from=JFK&to=LAX&date=2024-05-01`
- Sorting: `/api/posts?sort=desc&sortBy=date`

**4. Real-time use of query parameter**
- **E-commerce filters**: When a user selects "Price: Low to High" and "Brand: Apple", the frontend sends a request like `/products?brand=apple&sort=price_asc`.

---

## Template Engine

**1. Implement EJS**
- We set the view engine using `app.set('view engine', 'ejs');` and render templates using `res.render('filename', { data: ... })`.

**2. What are static files?**
Files like CSS, images, fonts, and client-side JavaScript that are sent directly to the client's browser without any server-side processing. Served in Express using `app.use(express.static('public'))`.

**3. What is express router?**
`express.Router()` creates modular, mountable route handlers. It acts as a "mini-application". Instead of defining all routes in `server.js`, you can group related routes (e.g., all user routes) in a separate file, keeping the codebase organized.

**4. Complete express workflow**
1. **Client Request**: A browser or app sends an HTTP request.
2. **Middleware Processing**: The request passes through global/route middleware (parsing body, authenticating, etc.).
3. **Route Matching**: Express finds the appropriate route handler based on the method and URL path.
4. **Business Logic**: The handler executes JS logic (e.g., querying a database).
5. **Response**: Express sends data back using `res.json()` or renders an HTML page using `res.render()`.
