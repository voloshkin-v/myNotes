"use strict";





// Массив заметок
let notes = [];

const addNoteBtn = document.querySelector('#add-note');

function addNote(){
    let note = {
        name: getName(),
        content: getContent(),
        time: getDate(),
        id: 1
    };

    let addNote = document.createElement('li');
    addNote.classList.add("note");
    addNote.innerHTML += `
                          <div class='note-title'></div>
                          <div class='note-text'>
                              <span class='date'>${note.time}</span>
                              <span class="text"></span>
                          </div>
                          <img id="del-note" src="../icons/del.svg">`;
                          
    document.querySelector('.notes-list').append(addNote);

    notes.unshift(note);
    console.log(notes);
}


addNoteBtn.addEventListener('click', () =>{
    addNote();
    delNote();
});

// Добавить заметку при клике!!!!
// addNoteBtn.addEventListener('click', () =>{
//     let noteTitle = document.querySelector("#note-title").value;
//     let noteContent = document.querySelector('textarea').value;
    
//     let note = {
//         name: noteTitle,
//         content: noteContent
//     };

    
//     addNote(note);
    

//     delNote();
// });


// const addNote = (note) =>{
//     let addNote = document.createElement('li');
//     addNote.classList.add("note");
//     addNote.innerHTML += `<button>Delete</button>
//                           <div class='note-title'>${note.name.substring(0,20)}</div>
//                           <div class='note-text'>
//                               <span class='date'>${getDate()}</span>
//                               <span class="text">${note.content.substring(0,10)}...</span>
//                           </div>`;
//     document.querySelector('.notes-list').append(addNote);
//     console.log(note);
// };

function delNote(){
    document.querySelectorAll('#del-note').forEach(btn => {
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
        });
    });
};



function getName(){
    let input = document.querySelector('input');

    input.oninput = function() {
        document.querySelector('.note-title').innerHTML = input.value.substring(0,25);
    };
}

function getContent(){
    let content = document.querySelector('textarea');

    content.oninput = function() {
        document.querySelector('.text').innerHTML = content.value.substring(0,20);
    };
}


// Получить дату создания заметки!
function getDate(){
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    return `${day}.${month}.${year}  ${hours}:${minutes}`;
}










