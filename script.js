let note = document.querySelector(".notes-container");
let creat = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    note.innerHTML=localStorage.getItem("notes");
}

function update(){
    localStorage.setItem("notes", note.innerHTML);
}

showNotes();



creat.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src= "delete.png";
    
    note.appendChild(inputbox).appendChild(img);

})

note.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if(e.target.tagName==="P"){
       notes=document.querySelectorAll(".input-box");
       notes.forEach(nt =>{
        nt.onkeyup = function(){
            update();
        }
       })
    }
})

document.addEventListener("keydown" , event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

//for delete the local storage
// window.addEventListener("beforeunload", () => {
//     localStorage.removeItem("notes");
// });


