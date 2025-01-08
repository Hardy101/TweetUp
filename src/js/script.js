// Elements
const El = {
  dropdDownNav: document.getElementById("dropdown"),
  dropDownBtn: document.getElementById("dropdownbtn"),
  gridBtn: document.getElementById("gridbtn"),
  listBtn: document.getElementById("listbtn"),
  gridPost: document.getElementById("gridpost"),
  listPost: document.getElementById("listpost"),
  messageContent: document.querySelectorAll(".message-content"),
  editMsgBtn: document.querySelectorAll(".edit-message-btn"),
  textarea: document.querySelectorAll("textarea"),
};

// Component functions
const toggleElementVisibility = (element) => {
  element.classList.toggle("hidden");
};

const toggleTextareaEditMode = (btn) => {
  const parentDiv = btn.parentElement;
  const textarea = parentDiv.querySelector("textarea");
  const span = btn.querySelector("span");

  // Toggle classes for textarea and parentDiv
  textarea.classList.toggle("rounded-2xl");
  textarea.classList.toggle("border-2");
  textarea.classList.toggle("border-blue-1");
  textarea.classList.toggle("p-2");
  parentDiv.classList.toggle("h-4");
  parentDiv.classList.toggle("h-auto");

  // Toggle textContent and disabled property
  if (span.textContent === "edit") {
    span.textContent = "save";
    textarea.disabled = false;
  } else {
    span.textContent = "edit";
    textarea.disabled = true;
  }
};

// Event Handlers
const initializeEventListeners = () => {
  // Dropdown toggle
  if (El.dropDownBtn && El.dropdDownNav) {
    El.dropDownBtn.addEventListener("click", () =>
      toggleElementVisibility(El.dropdDownNav)
    );
  }

  // Post view toggle
  if (El.gridBtn && El.listBtn) {
    El.gridBtn.addEventListener("click", () => {
      toggleElementVisibility(El.gridPost);
      toggleElementVisibility(El.listPost);
    });

    El.listBtn.addEventListener("click", () => {
      toggleElementVisibility(El.gridPost);
      toggleElementVisibility(El.listPost);
    });
  }

  // Edit message buttons
  El.editMsgBtn.forEach((btn) => {
    btn.addEventListener("click", () => toggleTextareaEditMode(btn));
  });

  El.textarea.forEach((textarea) => {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto"; // Reset height to recalculate
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to content height
    });
  });
};

// Initialize the app
initializeEventListeners();
