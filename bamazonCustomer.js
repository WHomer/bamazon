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
		//console.log(items);
		//cycle through the items and display each item
		//console.log('id		Product					department			price				qty')
		for (var i =0; i < items.length; i++){
			var print = items[i].item_id +'	';
			print += items[i].product_name +'		';
			print += items[i].department_name +'		';
			print += items[i].price +'		';
			print += items[i].stock_qty;
			console.log(print);
		}
	});
	//connection.end();
}

// connection.connect(function(err) {
// 	var newProduct = {
// 		productName: 'Lawn Mower',
// 		departmentName: 'Landscaping',
// 		price: 1200.99,
// 		stockQty: 500
// 	}
// 	//createProduct(newProduct);
// 	//displayItems();
// })

//prompt for user input to determine what they want to do
function userPrompt(){
	//ask the user what they would like to buy (by id)

	itemID = 3;
	//ask the user how many they would like to buy
	qtyRequested = 3;
	//call sellItems() to query the db
	sellItems(itemID, qtyRequested);
}

//function to sell the items by completing the order
function sellItems(itemID, qtyRequested){
	//check qty available by itemID and compare qty requested
	var query = 'SELECT item_id, product_name, department_name, price, stock_qty FROM products WHERE ?';
	connection.query(query, {item_id: itemID}, function(err, items){
		//if equal to or less than process order and display cost
		if (qtyRequested <= items[0].stock_qty){
			//run query to update qty
			updateItemQTY(itemID, qtyRequested);
			//calculate total cost of items
			var totalCost = items[0].price * qtyRequested;
			//display cost
			console.log('Total amount owed is: $' + totalCost);
		} else {
			//if greater than stock qty display error message
			console.log('There was a problem with your request, you either requested an invalid qty or invalid ID');
		}
	});
}

function updateItemQTY(itemID, qtyRequested){
	var query = 'UPDATE products SET stock_qty = 450 WHERE item_id = 3'
}

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
	//connection.end();
}



displayItems();
userPrompt();