const express = require('express');
const path = require('path'); // Add this line
const app = express();
const port = process.env.PORT || 3000;
const database = require('./public/database.json');

app.use(express.static('public'));
app.use(express.json('public')); // Add this middleware to parse JSON request bodies

// Route handler for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Update this line
});

// New API endpoint to return the database JSON data
app.get('/api/database', (req, res) => {
    res.json(database);
});

// Route to display collection of customers
app.get('/customers', (req, res) => {
    res.json(database.customers);
});

// Route to display single customer record
app.get('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const customer = database.customers.find(c => c.id === id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
});

// Route to display collection of orders for a given customer
app.get('/customers/:id/orders', (req, res) => {
    const id = parseInt(req.params.id);
    const customerOrders = database.orders.filter(o => o.customerId === id);
    if (customerOrders.length === 0) return res.status(404).json({ message: 'No orders found for customer' });
    res.json(customerOrders);
});

// Route to display a single order record
app.get('/orders/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const order = database.orders.find(o => o.id === id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
});
//new
app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    newCustomer.id = database.customers.length + 1;

    // Perform validation
    if (!newCustomer.name || !newCustomer.email || !newCustomer.address || !newCustomer.contact) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Additional validation for the address field
    // Example: Check if the address is a valid format or meets specific criteria
    if (!isValidAddress(newCustomer.address)) {
        return res.status(400).json({ error: 'Invalid address format' });
    }

    database.customers.push(newCustomer);
    res.status(201).json(newCustomer);
});



app.put('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCustomer = req.body;
    const index = database.customers.findIndex(c => c.id === id);
    if (index === -1) return res.status(404).json({ message: 'Customer not found' });
    updatedCustomer.id = id;
    database.customers[index] = updatedCustomer;
    res.json(updatedCustomer);
});

app.delete('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = database.customers.findIndex(c => c.id === id);
    if (index === -1) return res.status(404).json({ message: 'Customer not found' });
    const deletedCustomer = database.customers.splice(index, 1)[0];
    res.json(deletedCustomer);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
