const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.appendChild(span);
    li.appendChild(button);
    span.textContent = text;
    button.textContent = 'Delete';
    button.className = 'delete-button';
    button.addEventListener('click', function() {
      li.remove();
    });
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
    ul.appendChild(li);
    input.value = '';
  }
});