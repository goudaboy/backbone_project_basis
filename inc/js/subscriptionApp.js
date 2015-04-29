var firstSubscription = new app.singleSubscription({

		gender : 'Male',
		firstName: 'Jaap',
		secondName : 'Tinholt',
		zipcode : '1823BW',
		street : 'Buitenpoort',
		streetNumber : 16,
		city : 'Alkmaar'
	
});

var secondSubscription = new app.singleSubscription({

		gender : 'Female',
		firstName: 'Reina',
		zipcode : '1749HD',
		street: 'Trogven',
		streetNumber : 19,
		city : 'Warmenhuizen'
	
});

var thirdSubscription = new app.singleSubscription({

		gender : 'Female',
		firstName: 'Susanne',
		secondName : 'Komen',
		zipcode : '1749HB',
		street : 'Kiebos',
		streetNumber : 12
	
});

var subscriptionGroup = new app.subscriptionCollection([
	firstSubscription, secondSubscription
]);

subscriptionGroup.add(thirdSubscription);

// console.log(firstSubscription.toJSON());
// console.log(secondSubscription.toJSON());
// console.log(thirdSubscription.toJSON());

console.log(subscriptionGroup.toJSON());