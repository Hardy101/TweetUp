const El = {
  dropdDownNav: document.getElementById("dropdown"),
  dropDownBtn: document.getElementById("dropdownbtn"),
};

const DropDownToggle = () => {
  El.dropdDownNav.classList.toggle("hidden");
};

El.dropDownBtn.addEventListener("click", DropDownToggle);
