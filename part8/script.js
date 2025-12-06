document.getElementById('changeTextButton').addEventListener('click', function () {
    document.getElementById('myParagraph').textContent = "This is new paragraph"
})


document.getElementById('highlightFirstCity').addEventListener('click', function () {
    document.getElementById('citiesList').firstElementChild.classList.add('highlight')
})