const express = require('express');
const app = express();
const port = 3000;

// Import Router
const userRoutes = require('./routes/users');

// Template Engine: Implement EJS
app.set('view engine', 'ejs');

// --- Middleware ---
// Built-in Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Built-in Middleware for serving static files (CSS, images)
app.use(express.static('public'));

// Custom Application-level Middleware (Logger)
const loggerMiddleware = (req, res, next) => {
    console.log(`[LOG] ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url}`);
    next(); // Pass control to the next middleware or route
};
app.use(loggerMiddleware);

// --- Routes & HTTP Methods ---

// Using the Express Router for /users endpoints
app.use('/users', userRoutes);

// Root Route rendering EJS template
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Express Activities Demo', 
        message: 'Welcome to the Complete Express Workflow'
    });
});

// --- Query Parameter Examples ---
// Test via: /search?q=express&sort=asc&page=1
app.get('/search', (req, res) => {
    const { q, sort, page } = req.query; // Extracting query parameters
    
    res.json({
        message: 'Query Parameters parsed successfully!',
        parameters_received: {
            searchQuery: q || 'none',
            sortBy: sort || 'default',
            pageNumber: page || 1
        }
    });
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
    console.log(`Test Query Params: http://localhost:${port}/search?q=express&sort=asc&page=1`);
    console.log(`Test Router: http://localhost:${port}/users`);
});
