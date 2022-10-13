{let date = new Date();

    document.getElementById("year").innerHTML = date.getFullYear()
    
    document.getElementById("lastModified").innerHTML = document.lastModified
    
    function toggleMenu() {
        document.getElementById("primNav").classList.toggle("hide")
    }
    }
function toggleMenu() {
    var temp = document.getElementsByClassName("toggler")[0]
    temp.classList.toggle("hide")
    if (temp.classList[1]=="hide") {
        document.querySelector(".toggler > a").innerHTML = "&#9776; Menu"
    }
    else {
        document.querySelector(".toggler > a").innerHTML = "&#10006; Close"
    }
}

const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside");

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = 
`<em>${fulldateUK}</em>`;