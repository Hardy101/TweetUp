const El = {
  dropdDownNav: document.getElementById("dropdown"),
  dropDownBtn: document.getElementById("dropdownbtn"),
  gridBtn: document.getElementById("gridbtn"),
  listBtn: document.getElementById("listbtn"),
  gridPost: document.getElementById("gridpost"),
  listPost: document.getElementById("listpost"),
  messageContent: document.querySelectorAll(".message-content"),
  editMsgBtn: document.querySelectorAll(".edit-message-btn"),
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

El.editMsgBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDiv = btn.parentElement;
    const textarea = parentDiv.querySelector("textarea");
    textarea.classList.toggle("rounded-2xl");
    textarea.classList.toggle("border-2");
    textarea.classList.toggle("border-blue-1");
    textarea.classList.toggle("p-2");
    const span = btn.querySelector("span");
    parentDiv.classList.toggle("h-4");
    parentDiv.classList.toggle("h-auto");
    span.textContent == "edit"
      ? ((span.textContent = "save"), (textarea.disabled = false))
      : ((span.textContent = "edit"), (textarea.disabled = true));
  });
});
