const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let selectedCountry = "";

const countryNames = {
    ru: "Россия",
    fr: "Франция",
    jp: "Япония",
    it: "Италия",
    br: "Бразилия"
};

const status = document.getElementById("status");
const buttons = document.querySelectorAll(".country-btn");
const cards = document.querySelectorAll(".card");

function clearSelection() {
    cards.forEach((card) => card.classList.remove("selected"));
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCountry = button.dataset.country;

        clearSelection();
        button.closest(".card").classList.add("selected");

        status.textContent =
            "Выбрано: " + countryNames[selectedCountry] +
            ". Нажми кнопку внизу, чтобы отправить выбор боту.";

        tg.MainButton.setText("Показать информацию");
        tg.MainButton.show();
    });
});

tg.MainButton.onClick(() => {
    if (!selectedCountry) {
        return;
    }

    tg.sendData(selectedCountry);
});
