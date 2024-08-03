const imgElements = document.querySelectorAll("footer ul li img");
const mainImgContainer = document.querySelector(".mainImg");
const mainImg = document.querySelector(".mainImg img");

const imagePaths = ["./0.png", "./1.png", "./2.png", "./3.png", "./4.png"];

function moveMain(imgPath) {
    mainImgContainer.style.transition = "transform 0.7s ease";
    mainImgContainer.style.transform = "translateX(600px)";
    
    setTimeout(() => {
        mainImg.src = imgPath;
        mainImgContainer.style.transform = "translateX(0px)";
    }, 700);
}

document.querySelector("footer ul").addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const imgNumber = Number(event.target.dataset.img1);
        const imgPath = imagePaths[imgNumber] || "./0.png"; // Fallback to default image

        moveMain(imgPath);
    }
});
