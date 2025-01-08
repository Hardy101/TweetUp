const El = {
  dropdDownNav: document.getElementById("dropdown"),
  dropDownBtn: document.getElementById("dropdownbtn"),
  gridBtn: document.getElementById("gridbtn"),
  listBtn: document.getElementById("listbtn"),
  gridPost: document.getElementById("gridpost"),
  listPost: document.getElementById("listpost"),
};

const DropDownToggle = () => {
  El.dropdDownNav.classList.toggle("hidden");
};
const togglePost = () => {
  El.gridPost.classList.toggle("hidden");
  El.listPost.classList.toggle("hidden");
};

El.dropDownBtn.addEventListener("click", DropDownToggle);
El.gridBtn.addEventListener("click", togglePost);
El.listBtn.addEventListener("click", togglePost);
