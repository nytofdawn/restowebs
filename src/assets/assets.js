// Import Assets
import logo_removebg from './logo_removebg.png';
import facebook_icon from './facebook_icon.png';
import apk_icon from './apk_icon.png';

import drinks_category from './drinks_category.png';
import dessert_category from './dessert_category.png';
import fried_dish_category from './fried_dish_category.jpg';
import pancit_category from './pancit_category.jpg';
import sizzling_category from './sizzling_category.png';
import soup_category from './soup_category.png';

import sizzling_pusit from './sizzling_pusit.jpg';
import sizzling_sisig from './sizzling_sisig.jpg';
import sizzling_gambas from './sizzling_gambas.jpg';
import sizzling_beef_stew from './sizzling_beef_stew.jpg';

import spicy_chicken from './spicy_chicken.jpg';
import lumpiang_shanghai from './lumpiang_shanghai.jpg';
import letchon_kawali from './letchon_kawali.jpg';
import letchon_kawali_chicken from './letchon_kawali_chicken.jpg';
import butterchicken from './butterchicken.jpg';
import chickenfillet from './chickenfillet.jpg';
import calamares from './calamares.jpg';
import camaron from './camaron.jpg';

import wa_ter from './wa_ter.png';
import coffee from './coffee.png';
import Coke from './Coke.png';
import Softdrinks_small from './Softdrinks_small.jpg';

import french_fries from './french_fries.jpg';
import letcheflan from './letcheflan.jpg';

import pancitcanton from './pancitcanton.jpg';
import bihon from './bihon.jpg';

import chickenmami from './chickenmami.jpg';
import beefmami from './beefmami.jpg';
import lomi from './lomi.jpg';

// Asset Collection
export const assets = {
    logo_removebg,
    facebook_icon,
    apk_icon,
    drinks_category,
    dessert_category,
    fried_dish_category,
    pancit_category,
    sizzling_category,
    soup_category,
};

// Menu Categories
export const menu_list = [
    { menu_name: "Sizzling", menu_image: sizzling_category },
    { menu_name: "Drinks", menu_image: drinks_category },
    { menu_name: "Dessert", menu_image: dessert_category },
    { menu_name: "Fried Dish", menu_image: fried_dish_category },
    { menu_name: "Pancit", menu_image: pancit_category },
    { menu_name: "Soup", menu_image: soup_category },
];

// Food Items
export const food_list = [
    // Sizzling
    {
        id: "1",
        name: "Sizzling Pusit",
        image: sizzling_pusit,
        description: "Juicy and tender squid bursting with spicy and smoky flavors.",
        category: "Sizzling",
    },
    {
        id: "2",
        name: "Sizzling Gambas",
        image: sizzling_gambas,
        description: "A sizzling seafood dish made with shrimp, garlic, and paprika.",
        category: "Sizzling",
    },
    {
        id: "3",
        name: "Sizzling Beef Stew",
        image: sizzling_beef_stew,
        description: "Beef stew with vegetables in a savory tomato and cheese sauce.",
        category: "Sizzling",
    },
    {
        id: "4",
        name: "Sizzling Sisig",
        image: sizzling_sisig,
        description: "A delicious combination of juicy pork with tangy and spicy flavors.",
        category: "Sizzling",
    },
    // Fried Dish
    {
        id: "5",
        name: "Spicy Chicken",
        image: spicy_chicken,
        description: "Sticky chicken with a blend of sweet, spicy, and savory flavors.",
        category: "Fried Dish",
    },
    {
        id: "6",
        name: "Lumpiang Shanghai",
        image: lumpiang_shanghai,
        description: "Spring rolls with ground pork, onions, and vegetables.",
        category: "Fried Dish",
    },
    {
        id: "7",
        name: "Lechon Kawali",
        image: letchon_kawali,
        description: "Crispy deep-fried pork belly with a smoky flavor.",
        category: "Fried Dish",
    },
    {
        id: "8",
        name: "Lechon Kawali Chicken",
        image: letchon_kawali_chicken,
        description: "Pan-roasted chicken with a flavorful soy sauce marinade.",
        category: "Fried Dish",
    },
    {
        id: "9",
        name: "Buttered Chicken",
        image: butterchicken,
        description: "Indian dish with chicken in a spiced tomato and butter sauce.",
        category: "Fried Dish",
    },
    {
        id: "10",
        name: "Chicken Fillet",
        image: chickenfillet,
        description: "Boneless, flat-cut chicken meat, versatile in many dishes.",
        category: "Fried Dish",
    },
    {
        id: "11",
        name: "Calamares",
        image: calamares,
        description: "Chewy fried squid with a unique and crispy taste.",
        category: "Fried Dish",
    },
    {
        id: "12",
        name: "Camaron",
        image: camaron,
        description: "Deep-fried battered shrimp served with sweet and sour sauce.",
        category: "Fried Dish",
    },
    // Drinks
    {
        id: "13",
        name: "Water",
        image: wa_ter,
        description: "Pure water with vacuum-sealed double-walled insulation.",
        category: "Drinks",
    },
    {
        id: "14",
        name: "Coffee",
        image: coffee,
        description: "Rich, aromatic beverage brewed from roasted coffee beans.",
        category: "Drinks",
    },
    {
        id: "15",
        name: "Coke",
        image: Coke,
        description: "Classic carbonated soft drink with a sweet flavor.",
        category: "Drinks",
    },
    {
        id: "16",
        name: "Softdrinks (Small)",
        image: Softdrinks_small,
        description: "Carbonated beverage, sweet and refreshing.",
        category: "Drinks",
    },
    // Dessert
    {
        id: "17",
        name: "French Fries",
        image: french_fries,
        description: "Golden crispy potato strips, perfect as a side or snack.",
        category: "Dessert",
    },
    {
        id: "18",
        name: "Leche Flan",
        image: letcheflan,
        description: "Rich custard dessert topped with soft caramel.",
        category: "Dessert",
    },
    // Pancit
    {
        id: "19",
        name: "Pancit Canton",
        image: pancitcanton,
        description: "Thick noodles with vegetables and savory sauce.",
        category: "Pancit",
    },
    {
        id: "20",
        name: "Pancit Bihon",
        image: bihon,
        description: "Rice noodles with vegetables and proteins, perfect for celebrations.",
        category: "Pancit",
    },
    // Soup
    {
        id: "21",
        name: "Chicken Mami",
        image: chickenmami,
        description: "Filipino-style chicken noodle soup, warm and hearty.",
        category: "Soup",
    },
    {
        id: "22",
        name: "Beef Mami",
        image: beefmami,
        description: "Rich beef noodle soup with eggs and toppings.",
        category: "Soup",
    },
    {
        id: "23",
        name: "Lomi",
        image: lomi,
        description: "Thick egg noodles in a hearty broth with vegetables.",
        category: "Soup",
    },
];
