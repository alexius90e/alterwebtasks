const field = document.querySelector('.field');

const fieldItems = generateFieldItems();

function generateFieldItems() {
  const styles = [
    'red',
    'green',
    'blue',
    'yellow',
    'black',
    'pink',
    'orange',
    'purple',
  ];

  const items = new Array(24).fill(null).map(() => {
    const style = styles[Math.floor(Math.random() * styles.length)];
    const element = document.createElement('div');
    element.classList.add('field__item', style);
    return element;
  });

  return items;
}

function createField() {
  field.innerHTML = null;
  field.append(...fieldItems);
}

const createFieldButton = document.getElementById('createField');
createFieldButton.addEventListener('click', createField);

const addFilterButton = document.getElementById('addFilter');
const colorInput = document.getElementById('colorInput');
const filterItems = document.querySelector('.filter__items');
let filters = [];

addFilterButton.addEventListener('click', addFilter);

function addFilter() {
  if (colorInput.value === '') return;

  const filterItem = document.createElement('div');
  filterItem.className = 'filter__item';
  filterItem.textContent = colorInput.value;
  colorInput.value = null;
  filterItems.append(filterItem);
}

filterItems.addEventListener('click', handleFilterItemClick);

function handleFilterItemClick(event) {
  if (!event.target.classList.contains('filter__item')) return;
  event.target.classList.toggle('filter__item_active');

  const filterElements = document.querySelectorAll('.filter__item_active');
  filters = Array.from(filterElements).map((item) => item.textContent);
  console.log(filters);
}

function filterFieldItems() {}
