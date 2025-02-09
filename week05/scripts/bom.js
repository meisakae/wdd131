const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const li = document.createElement('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('buttoin');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    FileList.append(li);
    deletebutton.addEventListener('click', function () {
        FileList.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I received!')
};

function setChapterList() {
    localStorage.setItem('Here is My FavLIst', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('Here is My FavList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}
