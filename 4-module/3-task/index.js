function highlight(table) { 

	let body = table.getElementsByTagName('tbody')[0];
	let tr = body.getElementsByTagName('tr');

	let  array = Array.from(tr);

	array.forEach((row) => {

	let decorationList = row.getElementsByTagName('td')[1];
    
    	if(decorationList.textContent < 18) {
    		row.style.textDecoration = 'line-through';
    	}

    let genderList = row.getElementsByTagName('td')[2];
	
        if(genderList.textContent === 'm') {
            row.classList.add('male');
        }

        else if(genderList.textContent === 'f') {
            row.classList.add('female');
        } 	

	let statusList = row.getElementsByTagName('td')[3];

		if(statusList.dataset.available === 'true') {
			row.classList.add('available');
		} 

		else if(statusList.dataset.available === 'false') {
			row.classList.add('unavailable');
		}   

		else if(!statusList.dataset.available) {
			row.hidden = true;
		}

	});

}

/*New Example*/
/*
const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;

function highlight(table) {
  // ваш код...
  const actions = {
    [THIRD_COLUMN]: (root, td) => {
      if (td.dataset.available === 'true') {
        root.classList.toggle('available', true);
      } else if (td.dataset.available === 'false') {
        root.classList.toggle('unavailable', true);
      } else if (!td.hasAttribute('data-available')) {
        root.hidden = true;
      }
    },
    [SECOND_COLUMN]: (root, td) => {
      if (td.textContent === 'm') {
        root.classList.toggle('male', true);
      } else if (td.textContent === 'f') {
        root.classList.toggle('female', true);
      }
    },
    [FIRST_COLUMN]: (root, td) => {
      const age = parseInt(td.textContent, 10);

      if (age < 18) {
        root.style.textDecoration = 'line-through';
      }
    },
  };

  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      const fn = actions[index];

      if (typeof fn === 'function') {
        fn(tr, td);
      }
    });
  }
}
*/