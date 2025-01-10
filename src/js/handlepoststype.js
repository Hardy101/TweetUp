const Elements = {
  title: document.getElementById("postTypetitle"),
  queueBtn: document.getElementById("queuebtn"),
  calendarBtn: document.getElementById("calendarbtn"),
  draftsBtn: document.getElementById("draftsbtn"),
  queueDiv: document.getElementById("queue"),
  calendarDiv: document.getElementById("calendar"),
  draftsDiv: document.getElementById("drafts"),
  postTypeDivs: document.querySelectorAll(".post-type"),
};

const changeTitle = (content) => {
  Elements.title.textContent = content;
};
const closeEveryOtherTab = () => {
  Elements.postTypeDivs.forEach((div) => {
    div.classList.add("hidden");
  });
};

const changeActiveTab = () => {
    
}
Elements.calendarBtn.addEventListener("click", () => {
  changeTitle("Calendar");
  closeEveryOtherTab();
  Elements.calendarDiv.classList.remove("hidden");
});
Elements.queueBtn.addEventListener("click", () => {
  changeTitle("Queue");
  closeEveryOtherTab();
  Elements.queueDiv.classList.remove("hidden");
});
Elements.draftsBtn.addEventListener("click", () => {
  changeTitle("Drafts");
  closeEveryOtherTab();
  Elements.draftsDiv.classList.remove("hidden");
});
