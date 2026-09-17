const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(() => {
      console.log("✅ Playing!");
    }).catch(error => {
      console.error("❌ Error:", error);
    });
  } else {
    audio.pause();
  }
});