import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      sales: "Sales",
      contacts: "Contacts",
      all: "All",
      withMeat: "WithMeat",
      vegetarian: "Vegetarian",
      hot: "Hot",
      hit: "Hit",
      spacy: "Spacy",
      cart: "Cart",
      noOrders: "No Orders!",
      cleanAll: "Clean All",
      addToCart: "Add to cart",
      search: "Search",
      cardText:
        "Best pizzas in town. {{price}} only. Harry up. The offer is limited ({{amount}} left).",
    },
  },
  ru: {
    translation: {
      sales: "Акции",
      contacts: "Контакты",
      all: "Все",
      withMeat: "Мясные",
      vegetarian: "Вегетерианские",
      hot: "Острые",
      hit: "Лидеры продаж",
      spacy: "Космические",
      cart: "Корзина",
      noOrders: "Заказов пока нет!",
      cleanAll: "Очистить корзину!",
      addToCart: "Добавить в корзину",
      search: "Искать",
      cardText:
        "Изысканая пицца по доступной цене. Всего {{price}} рублей. Успей купить. Предложение ограничено (осталось {{amount}} штук).",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  keySeparator: false,
  supportedLngs: ["en", "ru"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
