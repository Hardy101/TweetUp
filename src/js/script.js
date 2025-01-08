const El = {
  dropdDownNav: document.getElementById("dropdown"),
  dropDownBtn: document.getElementById("dropdownbtn"),
  gridBtn: document.getElementById("gridbtn"),
  listBtn: document.getElementById("listbtn"),
  gridPost: document.getElementById("gridpost"),
  listPost: document.getElementById("listpost"),
  messageContent: document.querySelectorAll(".message-content"),
};

// Component functions
const DropDownToggle = () => {
  El.dropdDownNav.classList.toggle("hidden");
};

const togglePost = () => {
  El.gridPost.classList.toggle("hidden");
  El.listPost.classList.toggle("hidden");
};

// Function logic
El.dropDownBtn.addEventListener("click", DropDownToggle);
if (El.gridBtn) {
  El.gridBtn.addEventListener("click", togglePost);
  El.listBtn.addEventListener("click", togglePost);
}

El.messageContent.forEach((message) => {
  message.addEventListener("click", () => {
    const parentDiv = message.parentElement;
    parentDiv.classList.toggle("h-4");
    parentDiv.classList.toggle("h-auto");
  });
});
