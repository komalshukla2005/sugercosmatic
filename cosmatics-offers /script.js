function copyCode(element) {
    const code = element.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const message = element.nextElementSibling;
        message.classList.add('show');
        element.style.display = 'none'; 

        setTimeout(() => {
            message.classList.remove('show');
            element.style.display = 'block';
        }, 3000);
    });
}
