document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('typed-text');
    const textContent = text.innerHTML; 
    text.innerHTML = '';
    let i = 0;

    function typeEffect() {
        if (i < textContent.length) {
            if (textContent.charAt(i) === '<') {
                let closingTagIndex = textContent.indexOf('>', i);
                text.innerHTML += textContent.substring(i, closingTagIndex + 1);
                i = closingTagIndex + 1;
            } else {
                text.innerHTML += textContent.charAt(i);
                i++;
            }
            setTimeout(typeEffect, 50);
        } else {
            text.style.borderRight = "none";
        }
    }

    typeEffect();
});
