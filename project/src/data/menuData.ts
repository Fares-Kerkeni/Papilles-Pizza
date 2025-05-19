import { MenuCategory } from '../types';

export const menuData: Record<string, MenuCategory['items']> = {
  "pizzas": [
    {
      "name": "Classica",
      "description": "Tomate, fromage",
      "options": [
        {
          "name": "Petite",
          "price": "8,00 €"
        },
        {
          "name": "Moyenne",
          "price": "12,00 €"
        },
        {
          "name": "Grande",
          "price": "16,00 €"
        }
      ]
    },
    {
      "name": "Calzone",
      "description": "Tomate, fromage, jambon, œuf",
      "options": [
        {
          "name": "Petite",
          "price": "9,50 €"
        },
        {
          "name": "Moyenne",
          "price": "16,00 €"
        },
        {
          "name": "Grande",
          "price": "21,00 €"
        }
      ]
    }
  ],
  "texmex": [
    {
      "name": "Chicken Wings",
      "description": "7 pièces",
      "price": "8,50 €"
    },
    {
      "name": "Nuggets",
      "description": "8 pièces",
      "price": "8,50 €"
    },
    {
      "name": "Tenders",
      "description": "6 pièces",
      "price": "8,50 €"
    },
    {
      "name": "Frites",
      "options": [
        {
          "name": "Petite",
          "price": "2,00 €"
        },
        {
          "name": "Grande",
          "price": "3,00 €"
        }
      ]
    },
    {
      "name": "Frites Cheddar Bacon",
      "options": [
        {
          "name": "Petite",
          "price": "3,00 €"
        },
        {
          "name": "Grande",
          "price": "4,00 €"
        }
      ]
    }
  ],
  "paninis": [
    {
      "name": "Viande Hachée",
      "price": "6,00 €",
      "specialNote": "+ 1 Boisson 33cl"
    },
    {
      "name": "3 Fromages",
      "price": "6,00 €",
      "specialNote": "+ 1 Boisson 33cl"
    },
    {
      "name": "Poulet",
      "price": "6,00 €",
      "specialNote": "+ 1 Boisson 33cl"
    },
    {
      "name": "Jambon",
      "price": "6,00 €",
      "specialNote": "+ 1 Boisson 33cl"
    },
    {
      "name": "Merguez",
      "price": "6,00 €",
      "specialNote": "+ 1 Boisson 33cl"
    },
    {
      "name": "Thon",
      "price": "6,00 €",
      "specialNote": "+ 1 Boisson 33cl"
    }
  ],
  "zappwichs": [
    {
      "name": "Viande Hachée",
      "description": "Sauce tomate ou crème fraîche, fromage",
      "price": "7,00 €"
    },
    {
      "name": "Poulet",
      "description": "Sauce tomate ou crème fraîche, fromage",
      "price": "7,00 €"
    },
    {
      "name": "Jambon",
      "description": "Sauce tomate ou crème fraîche, fromage",
      "price": "7,00 €"
    },
    {
      "name": "Merguez",
      "description": "Sauce tomate ou crème fraîche, fromage",
      "price": "7,00 €"
    },
    {
      "name": "Cannibale",
      "description": "Viande hachée, merguez, poulet",
      "price": "8,00 €"
    }
  ],
  "menu-midi": [
    {
      "name": "Menu Midi 1",
      "description": "1 Pizza petite + 1 boisson 33cl",
      "price": "10,00 €"
    },
    {
      "name": "Menu Midi 2",
      "description": "1 Pizza moyenne + 1 boisson 33cl",
      "price": "13,00 €"
    }
  ],
  "desserts": [
    {
      "name": "Tarte au daim",
      "price": "2,50 €"
    },
    {
      "name": "Tiramisu",
      "price": "2,50 €"
    }
  ],
  "boissons": [
    {
      "name": "Coca, Coca zéro, Coca Cherry 33cl",
      "price": "1,50 €"
    },
    {
      "name": "Fanta citron ou orange, Ice Tea 33cl",
      "price": "1,50 €"
    },
    {
      "name": "Sprite, Tropico 33cl",
      "price": "1,50 €"
    },
    {
      "name": "7 Up Mojito, Perrier 33cl",
      "price": "1,50 €"
    },
    {
      "name": "Oasis tropical 33cl",
      "price": "1,50 €"
    },
    {
      "name": "Maxi Coca, Fanta, Sprite 1,5L",
      "price": "3,00 €"
    },
    {
      "name": "Maxi Oasis 2L",
      "price": "3,50 €"
    }
  ],
  "sandwichs": [
    {
      "name": "Grec",
      "description": "Viande grecque",
      "price": "9,00 €"
    },
    {
      "name": "Chicken",
      "description": "Chicken curry, cheddar",
      "price": "9,00 €"
    },
    {
      "name": "Escalope",
      "description": "Escalope, crème fraîche, cheddar",
      "price": "9,00 €"
    },
    {
      "name": "Américain",
      "description": "2 steaks, œuf, cheddar",
      "price": "9,50 €"
    },
    {
      "name": "X2",
      "description": "Chicken curry, steak, boursin, cheddar",
      "price": "9,50 €"
    },
    {
      "name": "Tenders Steak",
      "description": "Tenders, steak, cheddar",
      "price": "9,90 €"
    }
  ],
  "tacos": [
    {
      "name": "Tacos M",
      "description": "1 viande, sauce fromagère et frites à l’intérieur",
      "price": "7,00 €"
    },
    {
      "name": "Tacos L",
      "description": "2 viandes, sauce fromagère et frites à l’intérieur",
      "price": "8,00 €"
    },
    {
      "name": "Tacos XL",
      "description": "3 viandes, sauce fromagère et frites à l’intérieur",
      "price": "9,00 €"
    },
    {
      "name": "Supplément fromage",
      "price": "1,00 €"
    },
    {
      "name": "Choix de viandes",
      "description": "Cordon bleu, escalope, viande hachée, merguez, kebab, poulet, tenders, nuggets"
    }
  ],
  "burgers": [
    {
      "name": "Cheese",
      "description": "1 steak 45g, cheddar + frites + boisson 33cl",
      "price": "6,50 €"
    },
    {
      "name": "Double Cheese",
      "description": "2 steaks 45g, cheddar + frites + boisson 33cl",
      "price": "7,50 €"
    },
    {
      "name": "Chicken Burger",
      "description": "Poulet pané, cheddar + frites + boisson 33cl",
      "price": "7,50 €"
    }
  ],
  "offres": [
    {
      "name": "Offre 1",
      "description": "2 pizzas moyennes + 1 bouteille 1,5L",
      "price": "24,00 €"
    },
    {
      "name": "Offre 2",
      "description": "3 pizzas petites + 1 bouteille 1,5L",
      "price": "24,00 €"
    },
    {
      "name": "Offre 3",
      "description": "2 pizzas grandes + 1 bouteille 1,5L",
      "price": "34,00 €"
    }
  ],
  "menu-enfant": [
    {
      "name": "Menu Enfant",
      "description": "4 nuggets ou 1 cheese + frites + Capri Sun + 1 Pom’Pote",
      "price": "7,00 €"
    }
  ]
};
