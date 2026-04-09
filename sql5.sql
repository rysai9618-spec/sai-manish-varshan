-- Create table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2)
);

-- Insert sample data
INSERT INTO orders (product_name, quantity, price) VALUES
('Apple',3,150),
('Banana',5,80),
('Avocado',2,300),
('Bread',4,120),
('Apple',1,150);

-- 1. COUNT total orders
SELECT COUNT(*) AS total_orders FROM orders;

-- 2. SUM of all order prices
SELECT SUM(price) AS total_price FROM orders;

-- 3. AVG order price
SELECT AVG(price) AS avg_price FROM orders;

-- 4. Group by product_name and show total sales
SELECT 
product_name,
SUM(quantity * price) AS total_sales
FROM orders
GROUP BY product_name;

-- 5. MAX and MIN price
SELECT 
MAX(price) AS highest_price,
MIN(price) AS lowest_price
FROM orders;

-- 6. Group and sort by total sales descending
SELECT 
product_name,
SUM(quantity * price) AS total_sales
FROM orders
GROUP BY product_name
ORDER BY total_sales DESC;