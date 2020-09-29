"use strict";

// Получить дату создания заметки!
function getDate(){
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    return day + '.' + month + '.' + year;
}






const addNoteBtn = document.querySelector('.add-btn');


// Добавить заметку при клике!!!!
addNoteBtn.addEventListener('click', () =>{
    let noteTitle = document.querySelector("#note-title").value;
    let noteContent = document.querySelector('textarea').value;
    
    let note = {
        name: noteTitle,
        content: noteContent
    };

    if(noteTitle){
        addNote(note);
    }

    delNote();
});


const addNote = (note) =>{
    let addNote = document.createElement('li');
    addNote.classList.add("note");
    addNote.innerHTML += `<button>Delete</button>
                          <div class='note-title'>${note.name.substring(0,20)}</div>
                          <div class='note-text'>
                              <span class='date'>${getDate()}</span>
                              <span class="text">${note.content.substring(0,10)}...</span>
                          </div>`;
    document.querySelector('.notes-list').append(addNote);
    console.log(note);
};

const delNote = () =>{
    document.querySelectorAll('li button').forEach(btn => {
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
        });
    });
};







