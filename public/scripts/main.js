'use strict';

var food = {
	fork: [{
		title: 'Pasta',
		temp: 'hot',
		image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-0.3.5&s=f8c8b3acb749c1e021c52b2094e0de09&auto=format&fit=crop&w=1285&q=80'
	}, {
		title: 'Roast Beef',
		temp: 'hot',
		image: 'https://images.unsplash.com/photo-1504649346668-2cc86afaa2e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07186bdc9f7b16711441c2b9c8cd48a0&auto=format&fit=crop&w=1259&q=80'
	}, {
		title: 'Salad',
		temp: 'cold',
		image: 'https://images.unsplash.com/photo-1494571124378-c15772438a53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79eadd3c11bdc212b6a00fd23db7d330&auto=format&fit=crop&w=2550&q=80'
	}],
	chopsticks: [{
		title: 'Sushi',
		temp: 'cold',
		image: 'https://images.unsplash.com/photo-1511344407683-b1172dce025f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9e6c31dea9271a9973ff52fe9c8ed92&auto=format&fit=crop&w=1350&q=80'
	}, {
		title: 'Pad Thai',
		temp: 'hot',
		image: 'https://images.unsplash.com/photo-1503788105720-433331157fad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31cf2caf7cbbd73d2ca563fad1779e3c&auto=format&fit=crop&w=1350&q=80'
	}, {
		title: 'Ramen',
		temp: 'hot',
		image: 'https://images.unsplash.com/photo-1519077204685-ed90d0cc05b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3581f72510382b6da577d54ae3513b26&auto=format&fit=crop&w=1778&q=80'
	}],
	hands: [{
		title: 'Burger and Fries',
		temp: 'hot',
		image: 'https://images.unsplash.com/photo-1495753379358-73c76ccd644b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b202656251c223750e8ad9bd73c5f58&auto=format&fit=crop&w=1410&q=80'
	}, {
		title: 'Sushi Burrito',
		temp: 'cold',
		image: 'https://images.unsplash.com/photo-1455279032140-49a4bf46f343?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cfb5e14c1343179bff60d45ae8682c05&auto=format&fit=crop&w=1350&q=80'
	}, {
		title: 'Tacos',
		temp: 'hot',
		image: 'https://images.unsplash.com/photo-1518830686998-b8847466b372?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=226c6e93e81c6f2968bf51966fe397a5&auto=format&fit=crop&w=1384&q=80'
	}, {
		title: 'Sandwich',
		temp: 'cold',
		image: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2400debad70107daf28601d844625bc0&auto=format&fit=crop&w=1350&q=80'
	}]
};

$(function () {
	// Create a variable that will create a random number
	var random = function random(arr) {
		var index = Math.floor(Math.random() * arr.length);
		return arr[index];
	};

	// Prevent the page from refreshing upon submit
	$('form').on('submit', function (e) {
		e.preventDefault();

		var utensil = $('input[name=utensil]:checked').val();

		var temperature = $('input[name=temp]:checked').val();

		var choice = food[utensil];

		var filteredChoice = choice.filter(function (foodRest) {
			if (foodRest.temp === temperature) {
				return foodRest;
			}
		});

		var answer = random(filteredChoice);

		console.log(answer);

		$('.results').html('<h2 class="answer">Get yourself ' + answer.title + '!</h2>\n\t\t\t\t\t\t<div><img src="' + answer.image + '" class="food-image"></div>');
	});
});