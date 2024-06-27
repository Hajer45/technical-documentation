document.addEventListener("DOMContentLoaded", () => {
    const copyIcons = document.querySelectorAll(".copy-icon");
    const codes = document.querySelectorAll(".code");

    copyIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            const codeText = codes[index].innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                console.log('Code copied to clipboard:', codeText);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
});
