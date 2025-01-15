const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('chapterlist');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', Function() {
    if  (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click, function () {
            list.removeChild(li);
        });

        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    } else {
        alert('Add chapter');
        input.focus();
    }
});