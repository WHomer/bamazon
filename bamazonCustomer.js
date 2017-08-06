var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'JkdiwLj23@#$!DFIJ()kd2',
	database: 'bamazondb'
})

//gets all products from products table and displays to the console.
function displayItems(){
	//makes the query call
	var query = 'SELECT item_id, product_name, department_name, price, stock_qty FROM products'
	connection.query(query, function(err, items){
		//display all the details to the page
		console.log(items);
		//cycle through the items and display each item
		//console.log('id		Product					department			price				qty')
		for (var i =0; i < items.length; i++){
			var print = items[i].item_id +'	';
			print += items[i].product_name +'	';
			print += items[i].department_name +'	';
			print += items[i].price +'	';
			print += items[i].stock_qty;
			console.log(print);
		}
	});
	connection.end();
}

connection.connect(function(err) {
	var newProduct = {
		productName: 'Lawn Mower',
		departmentName: 'Landscaping',
		price: 1200.99,
		stockQty: 500
	}
	//createProduct(newProduct);
	displayItems();
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
