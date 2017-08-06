var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'JkdiwLj23@#$!DFIJ()kd2',
	database: 'bamazondb'
})

function displayItems(){
  
}

connection.connect(function(err) {
	var newProduct = {
		productName: 'Lawn Mower',
		departmentName: 'Landscaping',
		price: 1200.99,
		stockQty: 500
	}
	//createProduct(newProduct);
})


function createProduct(newProduct){
  var query = connection.query(
		'insert into products set ?',
		{
			product_name: newProduct.productName,
			department_name: newProduct.departmentName,
			price: newProduct.price,
			stock_qty: newProduct.stockQty
		}
	)
	connection.end();
}
