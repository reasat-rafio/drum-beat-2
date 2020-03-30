window.document.addEventListener("keydown", addMusic)

function addMusic(e) {

    const music = document.querySelector(`audio[data-key = "${e.keyCode}"]`)

    const keys = document.querySelector(`.key[data-key ="${e.keyCode}"]`)
    keys.classList.add("playing")


    if (!music) return

    music.currentTime = 0
    music.play()

}



const xxx = document.querySelectorAll(".key")
xxx.forEach(key => key.addEventListener("transitionend", remove))

function remove(e) {
    if (e.propertyName !== "transform") return


    this.classList.remove("playing")

}