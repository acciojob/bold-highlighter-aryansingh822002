function highlight() {
    // 1. Select all <strong> elements on the page
    const boldWords = document.querySelectorAll('strong');

    // 2. Loop through each element and change the color to green
    boldWords.forEach((word) => {
        word.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // 1. Select all <strong> elements on the page
    const boldWords = document.querySelectorAll('strong');

    // 2. Loop through each element and revert the color to black
    boldWords.forEach((word) => {
        word.style.color = 'rgb(0, 0, 0)';
    });
}