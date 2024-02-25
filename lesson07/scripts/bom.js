const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(chaptersArray);
        input.focus();
        input.value = "";



    }
    else {
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.textContent = item;
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);
    })
}

function setChapterList() {
    localStorage.setItem("favChapters", JSON.stringify(chaptersArray));

}

function getChapterList() {
    return JSON.parse(localStorage.getItem("favChapters"));
}

function deleteChapter(item) {
    chaptersArray = chaptersArray.filter(chapter => chapter !== item);
    setChapterList();
}

