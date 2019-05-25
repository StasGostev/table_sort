const table = document.querySelector('#grid');
table.addEventListener('click', sortTable);

function sortTable(ev) {
  const target = ev.target;
  if (target.tagName !== 'TH') {
    return;
  }
  const targetIndex = Array.from(target.parentElement.children).indexOf(target);
  const tbody = table.querySelector('tbody');
  const tbodySorted = document.createElement('tbody');
 
  let forSort = Array.from(tbody.rows).sort((a, b) => {
    a = a.children[targetIndex].innerText;
    b = b.children[targetIndex].innerText;
    let sortByString = a > b ? 1 : -1;
    let sortByNumber = a - b;
    
    return isNaN(+a) ? sortByString : sortByNumber;    

  });  
    forSort.forEach((i) => tbodySorted.append(i));

  tbody.replaceWith(tbodySorted); 
}
  