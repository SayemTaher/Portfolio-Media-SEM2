

fetch('https://randomuser.me/api/?results=10')
	.then(response => response.json())
	.then(data => {
        const personInfo = document.querySelectorAll('.person');
        
		data.results.forEach((person, index) => {
            const name = personInfo[index].querySelector('.name');
            name.textContent = `${person.name.first} ${person.name.last}`;
            const address = personInfo[index].querySelector('.address');
            address.textContent = `${person.location.city}, ${person.location.state} ${person.location.postcode}`;
            const email = personInfo[index].querySelector('.email');
            email.textContent = person.email;
		});
		});

