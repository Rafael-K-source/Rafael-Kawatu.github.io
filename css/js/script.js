const text = "Welcome to Rafael Portfolio";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.title += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}

document.title = "";
typingEffect();
