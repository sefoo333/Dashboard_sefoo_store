// orders

let nav_user = document.querySelector("#user_nav");
let imagse = document.querySelector("#nav_image");


let accountt = JSON.parse(localStorage.getItem("account2"));
let accountttt = JSON.parse(localStorage.getItem("account"));
imagse.style.borderRadius = "50%"

if (accountttt.image !== undefined) {
    imagse.src = accountttt.image
} else {
    imagse.src = "images/11820363.png"
}

if (localStorage.length > 1) {
    if (localStorage.getItem("account2") === null && localStorage.getItem("account") === null) {
        user_nav.innerHTML = "Hello Guest"
        localStorage.removeItem("login_on")

    } else {
        user_nav.innerHTML = `Hello ${accountttt.user}`
    }

} else {
    console.log("not found")
}
let logout = document.querySelector(".logout");

logout.addEventListener("click", () => {
    window.open("index.html", "_parent")
    localStorage.removeItem("account2")
    localStorage.removeItem("login_on")
})

if (localStorage.getItem("account2") === null && localStorage.getItem("account") === null) {
    localStorage.setItem("account2", JSON.stringify({ user: "Guest", password: "Guest333" }))
}

