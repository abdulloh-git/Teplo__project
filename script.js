let captainNumber = document.querySelector(".captain__number");
captainNumber.addEventListener("click", () => {
    alert("Мы не принемаем звонки. Контактируйте нас по телеграму, пожалуйста!")
});

let otherMembersNumber = document.querySelectorAll(".otherMembers__number");
otherMembersNumber.forEach((element) => {
    element.addEventListener("click", () => {
        alert("Мы не принемаем звонки. Контактируйте нас по телеграму, пожалуйста!")
    });
});

let button = document.querySelector(".footer__button");
let review = document.querySelector(".footer__review");

button.addEventListener("click", () => {
    let typingSpace = prompt("Оставьте пожалуйста комментарий");
    if (typingSpace != null) {
        review.innerHTML = "Ваш комментарий " + typingSpace + "." + " Если хотите поменять ваш комментарий, перезагрузите страницу.";
    }
});





class Typing {
    constructor(text) {
        this.text = document.querySelector(text);
        if (!this.text) {
            console.warn("Typing: selector '${text}' did not match any element.");
            return;
        }
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = "";
        setTimeout(() => this.typeText(), 300);
    }
    typeText(x = 0) {
        if (typeof this.fullText[x] !== "undefined") {
            this.text.innerHTML += this.fullText[x];
        }
        x++;
        if (x < this.fullText.length) {
            setTimeout(() => this.typeText(x), 300);
        }
        // else {
        //     // restart the typing loop
        //     x = 0;
        //     this.text.innerHTML = "";
        //     setTimeout(() => this.typeText(x), 300);
        // }
    }
}


const typingElement = new Typing(".header__nav-logo_p");

class Typing2 {
    constructor(text) {
        this.text = document.querySelector(text);
        if (!this.text) {
            console.warn(`Typing: selector '${text}' did not match any element.`);
            return;
        }
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = "";
        setTimeout(() => this.typeText(), 500);
    }
    typeText(x = 0) {
        if (typeof this.fullText[x] !== "undefined") {
            this.text.innerHTML += this.fullText[x];
        }
        x++;
        if (x < this.fullText.length) {
            setTimeout(() => this.typeText(x), 500);
        }
        // else {
        //     // restart the typing loop
        //     x = 0;
        //     this.text.innerHTML = "";
        //     setTimeout(() => this.typeText(x), 300);
        // }
    }
}

const typingElement2 = new Typing2(".aboutUs__h2"); 




// Typing3 — запуск печати при скролле
class Typing3 {
    constructor(text) {
        this.text = document.querySelector(text);
        if (!this.text) {
            console.warn(`Typing: selector '${text}' not found.`);
            return;
        }
        this.fullText = this.text.innerHTML || "";
        this.text.innerHTML = "";
        this.started = false;
    }

    start() {
        if (this.started) return;
        this.started = true;
        this.typeText();
    }

    typeText(i = 0) {
        if (i < this.fullText.length) {
            this.text.innerHTML += this.fullText[i];
            setTimeout(() => this.typeText(i + 1), 80);
        }
    }
}

// создаём анимацию печати для "Наши контакты"
const typingElement3 = new Typing3(".contacts__h2");

class Typing4 {
    constructor(text) {
        this.text = document.querySelector(text);
        if (!this.text) {
            console.warn(`Typing: selector '${text}' not found.`);
            return;
        }
        this.fullText = this.text.innerHTML || "";
        this.text.innerHTML = "";
        this.started = false;
    }

    start() {
        if (this.started) return;
        this.started = true;
        this.typeText();
    }

    typeText(i = 0) {
        if (i < this.fullText.length) {
            this.text.innerHTML += this.fullText[i];
            setTimeout(() => this.typeText(i + 1), 80);
        }
    }
}

const typingElement4 = new Typing4(".map__h2");

class Typing5 {
    constructor(text) {
        this.text = document.querySelector(text);
        if (!this.text) {
            console.warn(`Typing: selector '${text}' not found.`);
            return;
        }
        this.fullText = this.text.innerHTML || "";
        this.text.innerHTML = "";
        this.started = false;
    }

    start() {
        if (this.started) return;
        this.started = true;
        this.typeText();
    }

    typeText(i = 0) {
        if (i < this.fullText.length) {
            this.text.innerHTML += this.fullText[i];
            setTimeout(() => this.typeText(i + 1), 80);
        }
    }
}

const typingElement5 = new Typing5(".footer__title");


// запускаем при появлении в зоне видимости
function handleVisibilityOnScroll() {
    const items = [
        { selector: ".contacts__h2", instance: typingElement3 },
        { selector: ".map__h2", instance: typingElement4 },
        { selector: ".footer__title", instance: typingElement5 },
    ];

    items.forEach(item => {
        const el = document.querySelector(item.selector);
        if (!el || !item.instance) return;
        const rect = el.getBoundingClientRect();
        // если элемент виден хотя бы частично — запускаем один раз
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (typeof item.instance.start === "function") {
                item.instance.start();
            }
        }
    });
}

window.addEventListener("scroll", handleVisibilityOnScroll);
window.addEventListener("resize", handleVisibilityOnScroll);
window.addEventListener("DOMContentLoaded", handleVisibilityOnScroll);
// начальная проверка
handleVisibilityOnScroll();