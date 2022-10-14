const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function() {
    IF(input.value.length === 0) {
        print("Type the Name of a Chapter");
    }   
    
        ELSE: {
        let userInput = input.value();

        const chapterTitle = document.createElement("li");
        const chapterText = document.createElement("span");
        const listButton = document.createElement("button");

        chapterTitle.appendChild(chapterText);
        chapterText.textContent = userInput;
        chapterTitle.appendChild(listButton);
        listButton.textContent = "❤";
        list.appendChild(chapterTitle);

        input.value = "";

        listButton.addEventListener("click", function() {
            list.removeChild(chapterTitle);
        });

        input.focus();
    }
)
