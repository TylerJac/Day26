const listItems = document.querySelectorAll('#list li');

listItems.forEach((item) => {
  if (item.innerHTML === 'Apples') {

    item.innerHTML = 'Granny Smith Apples';
  }
});

listItems.forEach((item) => {
    if (item.innerHTML === 'Oat Milk') {
  
      item.remove();
    }
  });

  const newLi = document.createElement('li');
  newLi.innerHTML = 'Kombucha';

  const list = document.querySelector('ul');

  list.appendChild(newLi);

  listItems.forEach((item) => {  item.remove();
    }
  );
  list.innerHTML = '';

  const newItems = ['protein bars', 'almonds', 'peanut butter'];
  
  newItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    if (item === 'almonds') {
        li.classList.add('important');
      }
    list.appendChild(li);
  });
  