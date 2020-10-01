"use strict";

let notes = [];

const addNoteBtn = document.querySelector('#add-note');
lockInput();


function addNote(){
    let note = {
        name: '',
        content: '',
        time: getDate(),
        id: getUniqId(),
        selected: true 
    };


    let addNote = document.createElement('li');
    addNote.classList.add("note","animate__animated","animate__fadeInLeft");
    addNote.innerHTML += `
                          <div class='note-title'>${note.name}</div>
                          <div class='note-text'>
                              <span class='date'>${note.time}</span>
                              <span class="text">${note.content}</span>
                          </div>
                          <img id="del-note" src="../icons/del.svg">`;
                          
    document.querySelector('.notes-list').prepend(addNote);

    notes.unshift(note);
    console.log(notes);
    selectedNote();

}


addNoteBtn.addEventListener('click', () =>{
    addNote();
    unlockInput()
    delNote();
});

function delNote(){
    document.querySelectorAll('#del-note').forEach(btn => {
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
        });
    });
};




// function getName(){
//     let input = document.querySelector('input');
    
//     input.oninput = function() {
//         document.querySelector('.note-title').innerHTML = input.value.substring(0,25);
//     }
// };

// function getContent(){
//     let content = document.querySelector('textarea');

//     content.oninput = function() {
//         document.querySelector('.text').innerHTML = content.value.substring(0,15);
//     };
// }


let input = document.querySelector('input');

input.oninput = function() {
    document.querySelector('.note-title').innerHTML = input.value.substring(0,25);
}

let content = document.querySelector('textarea');

content.oninput = function() {
    document.querySelector('.text').innerHTML = content.value.substring(0,15);
};







function getUniqId(){
    return new Date().getTime().toString();
}
function selectedNote(){
    const tabs = document.querySelectorAll('li'),
        tabsContent = document.querySelectorAll('.notes-content'),
        tabsParent = document.querySelector('.notes-list');

    function hideTabContent(){
        tabsContent.forEach(item => {
            // item.style.display = "none";
        });

        tabs.forEach(item =>{
            item.classList.remove("note_selected");
        });
    }

    function showTabContent(i = 0){
        // tabsContent[i].style.display = "block";
        tabs[i].classList.add("note_selected");
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        
        if(target && target.classList.contains('note')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });
}





// Получить дату создания заметки!
function getDate(){
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}


function lockInput(){
    document.querySelector('#note-title').disabled = true;
    document.querySelector('textarea').disabled = true;
}


function unlockInput(){
    document.querySelector('#note-title').disabled = false;
    document.querySelector('textarea').disabled = false;

    let locked = document.querySelector('.locker');
    locked.style.display = "none";
}