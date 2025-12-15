// Question 1:
function swapTheme() {
    const app = document.getElementById("app");
    const button = document.getElementById("swap");

    if (app.classList == "day") {
        app.classList.remove("day");
        app.classList.add("night");

        button.classList.remove("button_day");
        button.classList.add("button_night");
    }
    else {
        app.classList.remove("night");
        app.classList.add("day");

        button.classList.remove("button_night");
        button.classList.add("button_day");
    }
};



// Question 2:
function createDiv(width, height, text) {
    const container = document.getElementById("container");

    const newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;

    container.appendChild(newDiv);
}

Window.createDiv = createDiv(100, 200, "This is new DIV");


// Question 3: 
function toggleVisibility() {
    const paragraph = document.getElementById("useless-paragraph");

    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
};


// Question 4: 
const textContainer = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSizeRange = document.getElementById("fontsize");

const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");

const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

colorBtn.addEventListener("click", () => {
    textContainer.style.color = colorBox.value;
});

fontSizeRange.addEventListener("input", () => {
    textContainer.style.fontSize = fontSizeRange.value + "px";
});

italicBtn.addEventListener("click", () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
});

boldBtn.addEventListener("click", () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
});

fontList.addEventListener("change", () => {
    textContainer.style.fontFamily = fontList.value;
});

getStyleBtn.addEventListener("click", () => {
    let styles = "";

    if (textContainer.style.color) {
        styles += `color: ${textContainer.style.color};`;
    }
    
    if (textContainer.style.fontSize) {
        styles += `font-size: ${textContainer.style.fontSize};`;
    }

    if (textContainer.style.fontStyle) {
        styles += `font-style: ${textContainer.style.fontStyle};`;
    }

    if (textContainer.style.fontWeight) {
        styles += `font-weight: ${textContainer.style.fontWeight};`;
    }

    if (textContainer.style.textDecoration) {
        styles += `text-decoration: ${textContainer.style.textDecoration};`;
    }

    if (textContainer.style.fontFamily) {
        styles += `font-family: ${textContainer.style.fontFamily};`;
    }
    cssProps.textContent = styles;
});

