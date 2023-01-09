const elShowBtn = document.querySelector("[data-show-btn]")
const elCloseBtn = document.querySelector("[data-close-btn]")
const elModal = document.querySelector("[data-modal]")
const elOverlay = document.querySelector("[data-overlay]")

function removeClass() {
  elModal.classList.remove("hidden")
  elOverlay.classList.remove("hidden")
}

function addClass() {
  elModal.classList.add("hidden")
  elOverlay.classList.add("hidden")
}

elShowBtn.addEventListener("click", removeClass)
elCloseBtn.addEventListener("click", addClass)
document.addEventListener("keydown", btn => {
  if (btn.key == "Escape") {
    addClass()
  }
})