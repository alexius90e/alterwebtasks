const createButton = document.getElementById('create');

const field = document.querySelector('.field');

const fieldItems = generateFieldItems();

const colorInput = document.getElementById('colorInput');

createButton.addEventListener('click', createField);

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
