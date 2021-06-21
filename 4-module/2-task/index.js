function makeDiagonalRed(table) {
 for(let i = 0; i < table.rows.length; i++) {
 	let tableRed = table.rows[i];
 	tableRed.cells[i].style.backgroundColor = 'red';
 }
}

/*New Example*/
/*
function makeDiagonalRed(table) {
  // ваш код...
=======
>>>>>>> d04b64f406d37ce65b95eb88d5d6fa210d4b0084
  let rowsLength = table.rows.length;
  let rows = table.rows;

  for (let i = 0; i < rowsLength; i++) {
    let row = rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
*/


