let date = new Date();

    document.getElementById("year").innerHTML = date.getFullYear()
    
    document.getElementById("lastModified").innerHTML = document.lastModified
    
    function toggleMenu() {
        document.getElementById("primNav").classList.toggle("hide")
    }

const datefield = document.querySelector(".date");
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
console.log(fulldateUK);
datefield.innerHTML = 
`<em>${fulldateUK}</em>`;


    const hamburger = document.querySelector(".ham");
    const mobileNav = document.querySelector(".mobile-nav");
    hamburger.addEventListener("click",() => {mobileNav.classList.toggle("navigation")}, false);
    window.onresize = () => {if (window.innerWidth >= 600)mobileNav.classList.remove("navigation")};

 
     