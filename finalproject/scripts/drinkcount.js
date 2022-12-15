function showTotalDrinks(){
	if(window.localStorage.getItem("specialDrinks") < 1 || window.localStorage.getItem("specialDrinks") == null || isNaN(window.localStorage.getItem("specialDrinks"))){
        window.localStorage.setItem("specialDrinks", 0);
    }

	let myDrinks = document.getElementsByClassName("total")[0];
	myDrinks.textContent = window.localStorage.getItem("specialDrinks")
}