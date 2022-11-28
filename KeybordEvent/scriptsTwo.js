const h1 = document.querySelector("h1");

document.body.addEventListener("keydown", function (e) {
    console.log("You are pressing the key", e.key);
    h1.innerHTML = `You are pressing the key ${e.key}`;
});