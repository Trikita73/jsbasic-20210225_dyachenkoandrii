function makeFriendsList (friends) {

 	let ul = document.createElement('ul');	
	let li = document.createElement('li');

	friends.forEach((item, arr) => {
		ul.insertAdjacentHTML('beforeEnd', '<li>'+item.firstName+item.lastName+'</li>');
	});
	  
  return ul;
}

/*New example*/
/*
function makeFriendsList(friends) {
<<<<<<< HEAD
  // ваш код...
=======
>>>>>>> d04b64f406d37ce65b95eb88d5d6fa210d4b0084
  const ul = document.createElement('ul');

  ul.innerHTML = friends.map(item => `
      <li>${item.firstName} ${item.lastName}</li>
  `).join('');

  return ul;
}
*/