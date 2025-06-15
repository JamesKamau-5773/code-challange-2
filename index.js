document.addEventListener("DOMContentLoaded", function(){ //Prevents JavaScript from trying to access elements that don't exist yet


let guestForm = document.getElementById("guest-form");
let guestInput = document.getElementById("guest-name");
let guestList = document.getElementById("guest-list");

if (!guestForm || !guestInput || !guestList){
  console.error("Missing required elements");
  return;
}
 //prevents erasing guest list after refresh
guestForm.addEventListener("submit", function(e){
  e.preventDefault()
  const guestName = guestInput.value.trim(); //removes extra spaces before/after the name

  //empty name check
  if (guestName ===""){
    alert("Kindly enter Name");
    return; // exits the function early if invalid
  }

  // limits the guest list to 10 people
  if(guestList.children.length>10){
      alert("Guest list is full (max 10)");
      return; //prevents adding more guests
  }

  addGuest(guestName);
  guestInput.value =""; // clears input field for next guest

});

//creating list item(container for all guest Elements)
function addGuest(name){
  const buttoncontainer = document.createElement('div');
 
  let li = document.createElement("li");
  li.className = "attending";
  

//Adding guest name
  let nameSpan = document.createElement("span");
  nameSpan.textContent = name; //text content for span

//creating toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Attending✔️";
  toggleButton.className = "toggle"

  toggleButton.addEventListener('click', function() {
    li.classList.toggle("attending");
    li.classList.toggle("not-attending");

    nameSpan.style.color = li.classList.contains("attending")
      ? "#10b981"
      : "#64748b";

    toggleButton.textContent = li.classList.contains("attending") 
      ? "Attending✔️" 
      : " Not Attending✖️";
  
  });

//Creating Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn"
  deleteButton.textContent = "🗑️ ";
  deleteButton.addEventListener("click", function(){
    li.remove();
  });

//Append Everything
  li.append(nameSpan);
  li.append(toggleButton);
  li.append(deleteButton);
  guestList.append(li);
  }
})

