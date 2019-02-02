$(function () {
	console.log('bar.js loaded ...');
	getDrinks()
})

function getDrinks() {
	$('a#drinks-index').on('click', function (event) {
		event.preventDefault()
		let url = this.href

		$.ajax({
			url: url,
			method: 'get',
			dataType: 'json'
		}).done(function (response) {

			console.log('response: ', response);

			// response.forEach(res => {
			// 	let newDrink
			// });

			let newDrink = new Drink(response[0])
			let newDrinkHtml = newDrink.drinkHTML()
			debugger;

			$('div#ajax-data').html(Drink.newDrinkForm())
		})
	})
}

class Drink {
	constructor(obj) {
		this.name = obj.name
		this.description = obj.description
	}
	//	$('div#ajax-data').html(Drink.newDrinkForm()) for example
	static newDrinkForm() {
		return (`
			<form>
				<input type='text' value='name' placeholder='enter name'>
			</form>
		`)
	}

}

Drink.prototype.drinkHTML = function () {
	return (`
		<div>
			<h1>${this.name}</h1>
			<p>${this.description}</p>
		</div>
	`)
}