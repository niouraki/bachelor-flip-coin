function flipCoin() {
    // first generate random number between one and two
    // one will be heads and two will be tails

    let randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    let resultText = document.getElementById('result')
    let imageElement = document.getElementById('coinImage')

    // after we have the number check and assign text and img scr
    if (randomNumber == 1) {
        resultText.innerText = 'You flipped heads'
        imageElement.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/3/3b/British_two_pence_coin_2016_obverse.png")
    } else {
        resultText.innerText = 'You flipped tails'
        imageElement.setAttribute("src", "https://en.numista.com/catalogue/photos/royaume-uni/63-original.jpg") 
    }
}

// on page load call the function
flipCoin()