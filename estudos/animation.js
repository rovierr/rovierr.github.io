document.addEventListener('DOMContentLoaded', (event) => {
    const text = "this site will get better soon";
    let index = 0;
    const typingSpeed = 100; // Speed in milliseconds

    function type() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }
    type();
});
