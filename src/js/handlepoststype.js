const Elements = {
  title: document.getElementById("postTypetitle"),
  queueBtn: document.getElementById("queuebtn"),
  calendarBtn: document.getElementById("calendarbtn"),
  draftsBtn: document.getElementById("draftsbtn"),
  queueDiv: document.getElementById("queue"),
  calendarDiv: document.getElementById("calendar"),
  draftsDiv: document.getElementById("drafts"),
  postTypeDivs: document.querySelectorAll(".post-type"),
  changeTabBtn: document.querySelectorAll(".changetab"),
};

// Functions
const changeTitle = (content) => {
  Elements.title.textContent = content;
};

const hideAllTabs = () => {
  Elements.postTypeDivs.forEach((div) => {
    div.classList.add("hidden");
  });
};

const changeActiveBtn = (activeBtn) => {
  Elements.changeTabBtn.forEach((btn) => {
    btn.classList.remove("border-b-2", "border-gray-bold", "text-black");
  });
  if (activeBtn.textContent.trim() == Elements.title.textContent) {
    activeBtn.classList.add("border-b-2", "border-gray-bold", "text-black");
  }
};

const changeActiveTab = (title, activetab, activeBtn) => {
  changeTitle(title);
  hideAllTabs();
  activetab.classList.remove("hidden");
  changeActiveBtn(activeBtn);
};

// Event Listeners
Elements.calendarBtn.addEventListener("click", () => {
  changeActiveTab("Calendar", Elements.calendarDiv, Elements.calendarBtn);
});
Elements.queueBtn.addEventListener("click", () => {
  changeActiveTab("Queue", Elements.queueDiv, Elements.queueBtn);
});
Elements.draftsBtn.addEventListener("click", () => {
  changeActiveTab("Drafts", Elements.draftsDiv, Elements.draftsBtn);
});
