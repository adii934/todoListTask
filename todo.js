var i = 0; //a global variable for assigning different id to elements
var j = 1; //a global variable for assigning ids to different lists
var completedTasks = []; // a list for storing tasks

function deleteButton(event){
  let deletebtn=event.target
  let listItem=deletebtn.closest(".list-group-items")
  let deleteBtn=listItem.querySelector(".deletebtnClass")
  
  deleteBtn.parentNode.parentNode.parentNode.parentNode.remove()
}
//mongodb+srv://adilali:12345@adil.klapiyg.mongodb.net/?retryWrites=true&w=majority
function editButton(event){
  console.log("FD",event.target.id)
  let editBtn = event.target;
  let listItem = editBtn.closest(".list-group-items");
  console.log("list",listItem)
  let taskTitle = listItem.querySelector(".list-group-titledetailsDiv h2");
  let taskDetail = listItem.querySelector(".list-group-titledetailsDiv h5");
  let deleteBtn=listItem.querySelector(".deletebtnClass")
  let replacedTitle = document.createElement("input");
  replacedTitle.setAttribute("type", "text");
  replacedTitle.value = editBtn.parentNode.parentNode.firstChild.innerHTML;

  editBtn.parentNode.parentNode.firstChild.replaceWith(replacedTitle);
  deleteBtn.remove();
  replacedTitle.style.marginBottom = "10px";
  let secondChild = editBtn.parentNode.parentNode.firstChild.nextSibling;
  let replaceDetail = document.createElement("input");
  replaceDetail.setAttribute("type", "text");
  replaceDetail.style.marginBottom = "10px";
  replaceDetail.value =
    editBtn.parentNode.parentNode.firstChild.nextSibling.innerText;
  secondChild.replaceWith(replaceDetail);
  let saveChange = document.createElement("button");
  saveChange.innerHTML = "Save Change";
  saveChange.setAttribute("id", `saveChangeBtn${i}`);
  saveChange.classList.add("saveChangebtnClass");
  editBtn.replaceWith(saveChange);
  saveChange.addEventListener("click", (event) => {
    taskTitle.innerText = replacedTitle.value;
    replacedTitle.replaceWith(taskTitle);
    taskDetail.innerText = replaceDetail.value;
    replaceDetail.replaceWith(taskDetail);
    saveChange.parentNode.appendChild(deleteBtn);
    saveChange.parentNode.appendChild(editBtn);
    saveChange.remove();
  });

}
  
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("editbtnClass")) {
    console.log("HEEELOOO",event.target)
    editButton(event);
  }
  else if(event.target.classList.contains("deletebtnClass")) {
    console.log("HEEELOOO",event.target)
    deleteButton(event);
  }
});


// adding new task
function addNewTask(event) {
  console.log(event.target.id)
  let newTask = document.createElement("div");
  newTask.setAttribute("id", `newTaskAdded${i}${j}`);
  newTask.classList.add("newTaskAddedClass");
  console.log('newTask',document.getElementById(`${event.target.id}`))
  document.getElementById(`${event.target.id}`).parentNode.nextSibling.nextSibling.appendChild(newTask)
  // document.getElementById(`${event.target.id}`).parentNode.nextSibling.appendChild(newTask);
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", `radioBtn${j}`);
  document.getElementById(`newTaskAdded${i}${j}`).style.display = "flex";
  document.getElementById(`newTaskAdded${i}${j}`).style.flexDirection = "row";
  let titleDetailsDiv = document.createElement("div");
  titleDetailsDiv.setAttribute("id", `titleDetailsDiv${j}`);
  titleDetailsDiv.classList.add('titleDetailsDivClass')
  document.getElementById(`newTaskAdded${i}${j}`).appendChild(titleDetailsDiv);
  let title = document.createElement("input");
  title.setAttribute("placeholder", "Enter task name");
  title.setAttribute("id", `title${j}`);

  let detail = document.createElement("input");
  detail.setAttribute("placeholder", "Enter task detail");
  let saveTaskBtn = document.createElement("button");
  saveTaskBtn.innerHTML = "Save";
  saveTaskBtn.classList.add('saveTaskBtnClass')
  saveTaskBtn.setAttribute("id", `saveBtn${j}`);
  // document.getElementById("saveBtn").style.color="red"
  document.getElementById(`titleDetailsDiv${j}`).appendChild(title);
  document.getElementById(`titleDetailsDiv${j}`).appendChild(detail);
  document.getElementById(`titleDetailsDiv${j}`).appendChild(saveTaskBtn);

  // on clicking save button
  function onSaveTask(event) {
    i++;
    console.log("i",i)
    title.remove();
    detail.remove();
    console.log("DDD", saveTaskBtn.parentNode.parentNode.parentNode.firstChild.nextSibling)
   
    
    let items = document.getElementById(`items${j}`);
    let li = document.createElement("li");
    li.setAttribute("id", `newLi${i}${j}`);
    li.classList.add("list-group-items");
    let newDivContainer = document.createElement("div");
  
    newDivContainer.classList.add("list-group-divs");
    newDivContainer.setAttribute("id", `newTask${i}${j}`);
    // a checkbox associated with each task
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "checkbox");
    radioInput.setAttribute("id", `radioInput${i}${j}`);
    radioInput.setAttribute("name", `radiobuttons`);
    radioInput.setAttribute("value", `radiobutton${i*j}`);
    radioInput.classList.add("radioBtnClass");
    newDivContainer.appendChild(radioInput);

    let newTitleDetailDiv = document.createElement("div");
    newTitleDetailDiv.classList.add("list-group-titledetailsDiv");
    // title of task
    let taskTitle = document.createElement("h2");
    taskTitle.innerHTML = title.value;
    // detail of task
    let taskDetail = document.createElement("h5");
    taskDetail.innerHTML = detail.value;
    // appending title and detail of task to a div
    newTitleDetailDiv.appendChild(taskTitle);
    newTitleDetailDiv.appendChild(taskDetail);
    // assigning ide and class to detail of task
    taskDetail.setAttribute("id", `taskDetail${i}`);
    taskDetail.classList.add("taskDetailClass");

    newDivContainer.appendChild(newTitleDetailDiv);

    let btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btnsDiv");
    // adding edit button to each task
    
    // adding delete button to each task
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("id", `deleteBtn${i*j}`);
    deleteBtn.classList.add("deletebtnClass");
    // on delete
    // deleteBtn.addEventListener("click", (event) => {
    //   console.log(event.target.id);
    //   deleteBtn.parentNode.parentNode.parentNode.parentNode.remove();
    // });
   
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    
    editBtn.setAttribute("id", `editBtn${i}${j}`);
    editBtn.classList.add("editbtnClass");
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(deleteBtn);
    newTitleDetailDiv.appendChild(btnsDiv);

    li.appendChild(newDivContainer);
    saveTaskBtn.parentNode.parentNode.parentNode.firstChild.nextSibling.appendChild(li);
    saveTaskBtn.remove()
    
    // handling checkbox
    console.log("RADIO", radioInput.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling)
    function onRadioBtn(event){
      console.log("radiobut",event.target.value)
      console.log("RADIO", radioInput.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling)
      let dropDownMenu=document.getElementById(`dropdownmenu${j}`)
      dropDownMenu.style.display="block"
      if(radioInput.checked) {
        radioInput.parentElement.style.display = "none";
        console.log("Checked");
        let ele = radioInput.nextSibling.firstChild.innerText;
        let eleDetail = radioInput.nextSibling.firstChild.nextSibling.innerText;
        completedTasks.push({
          title: ele,
          detail: eleDetail,
        });
        console.log("HI", completedTasks);
        document.getElementById(
          `compltetedLength${j}`
        ).innerHTML = `Completed(${completedTasks.length})`;
        let newTaskDiv = document.createElement("div");
        newTaskDiv.setAttribute("id", `newTaskDiv${i}`);
        newTaskDiv.classList.add("newtaskDivClass");
        let completedTaskTitle = document.createElement("del");
        completedTaskTitle.setAttribute("id", `completedTaskTitle${i}`);
        completedTaskTitle.innerHTML = ele;
        completedTaskTitle.classList.add('completedTaskTitleClass')
        let compTaskDelBtn = document.createElement("i");
        compTaskDelBtn.addEventListener("mouseenter", (event) => {
          compTaskDelBtn.style.color = "red";
        });
        compTaskDelBtn.addEventListener("mouseleave", (event) => {
          compTaskDelBtn.style.color = "black";
        });
        let tickMark = document.createElement("i");
        tickMark.classList.add("fa-regular", "fa-check");

        tickMark.setAttribute("id", newDivContainer.id);
        tickMark.style.cursor = "pointer";
        compTaskDelBtn.classList.add("fa-solid", "fa-trash", "compTaskDelBtn");
        console.log("new",document.getElementById(`dropdownitems${j}`))
        let dropdownitems = document.getElementById(`dropdownitems${j}`);
        newTaskDiv.appendChild(tickMark);
        newTaskDiv.appendChild(completedTaskTitle);
        newTaskDiv.appendChild(compTaskDelBtn);
        
        radioInput.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.appendChild(newTaskDiv);
        // radioInput.parentNode.remove()
        compTaskDelBtn.addEventListener("click", (event) => {
          
          compTaskDelBtn.parentNode.remove();
          newDivContainer.style.display = "none";
          let newList = completedTasks.filter((item) => {
            return item.title != radioInput.nextSibling.firstChild.innerText;
          });
          completedTasks = newList;
          document.getElementById(
            `compltetedLength${i}`
          ).innerHTML = `Completed(${completedTasks.length})`;
        });

        tickMark.addEventListener("click", (event) => {
          let newListAfterUndelete=completedTasks.filter((item)=>{
           return tickMark.nextSibling.innerText!=item.title
          })
          completedTasks=newListAfterUndelete
          document.getElementById(
            `compltetedLength${j}`
          ).innerHTML = `Completed(${completedTasks.length})`;
          let selected = document.getElementById(tickMark.id);
          console.log("45345",document.getElementById(tickMark.id))
          selected.style.display = "block";
          selected.style.display = "flex";
          selected.style.flexDirection = "row";
          tickMark.parentNode.remove();
        });
      }
      else{
        console.log("RADIOeryterft", radioInput.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling)
      }
    }
    radioInput.addEventListener('change',onRadioBtn)
  }
 
  document.getElementById(`saveBtn${j}`).addEventListener("click", onSaveTask);
  console.log(document.getElementsByClassName("radioBtnClass"));
}
console.log(document.getElementById("newTaskAdded"));
// clicking on completed div
// dropdownrow.addEventListener("click", (event) => {
//   console.log("DROPDOWN",dropdownrow.id)
//   let arrowClass= document.getElementById(`arrow${j}`)
//   if(arrowClass.className=="fa-solid fa-angle-up"){
//     arrowClass.className="fa-solid fa-angle-down"
//     document.getElementById(`dropdownitems${j}`).style.display="block"
//   }
//   else{
//     arrowClass.className="fa-solid fa-angle-up"
//     document.getElementById(`dropdownitems${j}`).style.display="none"
//   }
// });
// handling multiple lists
let newListBtn=document.getElementById('newListBtn')
function onBtnClick(event){  
  j++
  console.log(j)
  let mainDiv=document.getElementById('mainDiv')
  mainDiv.innerHTML+=`<div class="card" id="card${j}">
            <div id="titleDiv${j}" class="titleDiv">
            <input type="text" placeholder="list title">
            <div class="editdeletelist">
            <button class="BtnClass" id="saveListTitleBtn${j}" onclick="saveListTitle(event)">Save</button>
            <button class="BtnClass" id="editTitleBtn${j}" style="display: none;" onclick="EditListTitle(event)">Edit title</button>
            <button class="BtnClass" id="editTitleBtn${j}" style="display: none;" onclick="deleteList(event)">Delete list</button>
            </div>
            </div>
            <div id="addTask${j}" class="addTask" onclick="addNewTask(event)">
            <button class="Rbutton" id="addbtn${j}">+</button>
            <p>Add new task</p>
            </div>
            <div id="newAdded${j}" class="newAdded">
              <ul class="list-group" id="items${j}"></ul>
            </div>
          <div id="dropdownmenu${j}" class="dropdownmenu">
            <div id="dropdownrow${j}" class="dropdownrow">
                <p id="compltetedLength${j}" class="compltetedLength">Completed</p>
                <i id="arrow${j}" class="fa-solid fa-angle-up"></i>
            </div>
            <div id="dropdownitems${j}" class="dropdownitems">
                
            </div>
          </div>
</div>`
var btn = document.getElementById('newListBtn');
mainDiv.removeChild(btn);
mainDiv.appendChild(btn);
}
function saveListTitle(event){
  let element=document.getElementById(`${event.target.id}`)
  let title=document.createElement('p')
  title.classList.add('listTitleP')
  console.log(element.parentNode.parentNode.firstChild.nextSibling)
  title.innerHTML= element.parentNode.parentNode.firstChild.nextSibling.value
  element.parentNode.parentNode.firstChild.nextSibling.replaceWith(title)
  element.nextSibling.nextSibling.style.display="block"
  element.nextSibling.nextSibling.nextSibling.nextSibling.style.display="block"
  // element.nextSibling.nextSibling.style.height='65%'
  element.nextSibling.nextSibling.style.fontSize="10px"
  // element.nextSibling.nextSibling.nextSibling.nextSibling.style.height='65%'
  element.nextSibling.nextSibling.nextSibling.nextSibling.style.fontSize="10px"
  element.parentNode.style.justifyContent = "space-between";
  element.parentNode.style.alignItems = "center"
  element.style.display="none"
  
}
function EditListTitle(event){
  let element=document.getElementById(`${event.target.id}`)
  let editTitle=document.createElement('input')
  editTitle.classList.add('listTitleClass')
  editTitle.setAttribute('placeholder',"List title")
  console.log(element.parentNode.parentNode.firstChild.nextSibling)
  element.parentNode.parentNode.firstChild.nextSibling.replaceWith(editTitle)
  element.nextSibling.nextSibling.style.display="none"
  element.parentNode.firstChild.nextSibling.style.display="block"
  element.parentNode.firstChild.nextSibling.style.height='100%'
  element.parentNode.firstChild.nextSibling.style.fontSize="10px"
  element.parentNode.style.justifyContent = "space-between";
  element.parentNode.style.alignItems = "center"
  element.style.display="none"
}

function deleteList(event){
  let element=document.getElementById(`${event.target.id}`)
  element.parentNode.parentNode.parentNode.remove()
  j--
  console.log("L",j)
}