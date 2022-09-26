const field = document.querySelector('.field');

const createFieldButton = document.getElementById('createField');

const addFilterButton = document.getElementById('addFilter');

const colorInput = document.getElementById('colorInput');

const filterItems = document.querySelector('.filter__items');

const orRadioInput = document.getElementById('or');

const xorRadioInput = document.getElementById('xor');

const fieldItems = generateFieldItems();

let filters = [];

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
    element.dataset.color = style;
    return element;
  });

  return items;
}

function handleAddFilterClick() {
  const filterItem = document.createElement('div');

  if (colorInput.value === '') return;

  filterItem.className = 'filter__item';
  filterItem.textContent = colorInput.value;
  colorInput.value = null;
  filterItems.append(filterItem);
}

function handleFilterItemClick(event) {
  if (!event.target.classList.contains('filter__item')) return;
  event.target.classList.toggle('filter__item_active');

  const filterElements = document.querySelectorAll('.filter__item_active');
  filters = Array.from(filterElements).map((item) => item.textContent);
  filterFieldItems();
}

function filterFieldItems() {
  const app = document.getElementById('app');

  field.innerHTML = null;
  app.style.display = 'block';

  if (filters.length === 0) {
    field.append(...fieldItems);
    return;
  }

  const filteredItems = fieldItems.filter((item) => {
    return orRadioInput.checked
      ? filters.includes(item.dataset.color)
      : !filters.includes(item.dataset.color);
  });
  field.append(...filteredItems);
}

createFieldButton.addEventListener('click', filterFieldItems);

addFilterButton.addEventListener('click', handleAddFilterClick);

filterItems.addEventListener('click', handleFilterItemClick);

orRadioInput.addEventListener('change', filterFieldItems);

xorRadioInput.addEventListener('change', filterFieldItems);
