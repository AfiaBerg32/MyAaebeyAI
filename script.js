const textarea = document.getElementById("chatInput");
const chatArea = document.querySelector(".chat-area");

textarea.addEventListener("input", function () {
  this.style.height = "40px"; // Reset height
  this.style.height = this.scrollHeight + "px"; // Expand textarea dynamically

  chatArea.style.maxHeight = this.scrollHeight + 30 + "px"; // Expand chat-area dynamically
});

