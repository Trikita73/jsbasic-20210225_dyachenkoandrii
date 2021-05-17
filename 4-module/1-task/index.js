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
  // ваш код...
  const ul = document.createElement('ul');

  ul.innerHTML = friends.map(item => `
      <li>${item.firstName} ${item.lastName}</li>
  `).join('');

  return ul;
}
*/