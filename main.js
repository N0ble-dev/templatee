let menuIcon = document.getElementById("click")
let nav = document.getElementById("nav")
menuIcon.addEventListener("click", () =>
{
    if (menuIcon.classList.contains("clicked")) {
        nav.style.display = "none"
        menuIcon.className = "fa-solid fa-bars "
    } else {
        nav.style.display = "flex"
        menuIcon.className = "fa-solid fa-xmark clicked"
    }
})

let quote = document.getElementById("quote")
let quoteAuthor = document.getElementById("quote-author")
let clickRight = document.getElementById("click-right")
let clickLeft = document.getElementById("click-left")
async function getQuote ()
{
    console.log("Before Fetch");
    try {
        let myData = await fetch("https://api.quotable.io/random");
        let data = await myData.json()
        quote.innerHTML = `" ${data.content} "`
        quoteAuthor.innerText = data.author
    } catch (reason) {
        console.log(`Reason: ${reason}`);
    }
}

getQuote();
clickRight.addEventListener("click", getQuote)
clickLeft.addEventListener("click", getQuote)