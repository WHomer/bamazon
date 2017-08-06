

CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name varchar(100) NULL,
  department_name varchar(100) NULL,
  price decimal(10,2) NULL,
  stock_qty int NULL
);
