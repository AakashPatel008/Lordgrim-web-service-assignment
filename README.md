# Lordgrim-web-service-assignment

This web service project provides an API for customer management. It allows you to retrieve, delete and view customer information, as well as manage their orders.

## API Endpoints

The following API endpoints are available:

### Customers

- `GET /customers`: Retrieves a list of all customers.
- `GET /customers/{id}`: Retrieves a specific customer by ID.
- `POST /customers`: Creates a new customer.
- `PUT /customers/{id}`: Updates an existing customer by ID.
- `DELETE /customers/{id}`: Deletes a customer by ID.

### Orders

- `GET /orders`: Retrieves a list of all orders.
- `GET /orders/{id}`: Retrieves a specific order by ID.
- `GET /orders/customer/{customerId}`: Retrieves all orders for a specific customer.
- `POST /orders`: Creates a new order.
- `PUT /orders/{id}`: Updates an existing order by ID.
- `DELETE /orders/{id}`: Deletes an order by ID.

Please note that `{id}` and `{customerId}` in the endpoints should be replaced with the actual ID of the customer or order.

## Prerequisites

Before running the application, ensure you have the following dependencies installed:

- Node.js
- Docker

## Getting Started

To build and run the web service, follow these steps:

1. Clone the repository:

git clone https://github.com/AakashPatel008/Lordgrim-web-service-assignment.git

2. Navigate to the project directory:

cd web-service-project

3. Install the dependencies:

npm install

4. Build the Docker image:

docker build -t web-service .

5. Run the Docker container:

docker run -p 3000:3000 web-service

6. Access the web service:

Open your web browser and visit http://localhost:3000
