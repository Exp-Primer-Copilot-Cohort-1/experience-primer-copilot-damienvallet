// Create web server
// 1. Create a web server
// 2. Use express
// 3. Create a route for the home page
// 4. Create a route for an about page
// 5. Create a 404 page with an error message
// 6. Start and listen on port 3000

// 1. Create a web server
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { error } = require('console');

// 2. Use express
const app = express();

// 3. Create a route for the home page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Erik'
    });
});

// 4. Create a route for an about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Erik'
    });
});

// 5. Create a 404 page with an error message
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Erik',
        errorMessage: 'Page not found.'
    });
});

// 6. Start and listen on port 3000
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

// Path: public
// Create a static directory
// 1. Create a static directory
// 2. Create an index.html file
// 3. Change the home page route to serve the html file

// 1. Create a static directory
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '../public')));

// 2. Create an index.html file
// 3. Change the home page route to serve the html file
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>');
// });

// Path: hbs
// Create a template for the help page
// 1. Setup handlebars in your project
// 2. Create a template for the help page
// 3. Set up a help template to render a help message to the screen
// 4. Setup a help route and render the template with