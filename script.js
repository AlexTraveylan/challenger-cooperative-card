document
.getElementById('card-number')
.addEventListener('input', (e) => {
    document
    .getElementById('number-card')
    .innerHTML = e.target.value
})