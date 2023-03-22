const humburgerMenuContanerTag = document.querySelector(".humburgerMenuContaner");
const overLayMenuTag = document.querySelector(".overLayMenu");
const humburgerLine1Tag = document.querySelector(".one");
const humburgerLine2Tag = document.querySelector(".two");
const humburgerLine3Tag = document.querySelector(".three");
const liTag = document.getElementsByTagName("li")

humburgerMenuContanerTag.addEventListener("click", () => {
    if (humburgerMenuContanerTag.classList.contains("isOpen")) {
        overLayMenuTag.classList.remove("opecity");
        humburgerLine2Tag.classList.remove("hideLine2");
        humburgerLine1Tag.classList.remove("rotatePlus45Dg");
        humburgerLine3Tag.classList.remove("rotateMine45Dg");
        humburgerMenuContanerTag.classList.remove("isOpen");
        for (let i = 0 ; i < liTag.length ; i++) {
            liTag[i].classList.remove("moveLiTag")
        }
    }else{
        overLayMenuTag.classList.add("opecity")
        humburgerLine2Tag.classList.add("hideLine2");
        humburgerLine1Tag.classList.add("rotatePlus45Dg");
        humburgerLine3Tag.classList.add("rotateMine45Dg");
        humburgerMenuContanerTag.classList.add("isOpen")
        for (let i = 0 ; i < liTag.length ; i++) {
            liTag[i].classList.add("moveLiTag")
        }
    }
})

