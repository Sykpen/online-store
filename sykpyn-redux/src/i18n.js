import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import common_en from './locales/en/translation.json'
// import common_ru from './locales/ru/translation.json'

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
      cart: "Cart",
      noOrders: "No Orders!",
      cleanAll: "Clean All",
      addToCart: "Add to cart",
      search: "Search",
      cardText:
        "So hard to make this fucking english text. {{price}} only. Harry up. The offer is limited ({{amount}} left).",
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

// const resources = {
//   en: {
//     translation: {
//       common_en
//     },
//   },
//   ru: {
//     translation: {
//       common_ru
//     },
//   },
// };

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
