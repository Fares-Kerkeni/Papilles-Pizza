import { MenuCategory } from '../types';

export const menuData: Record<string, MenuCategory['items']> = {
  pizzas: [
    {
      name: 'Classica',
      description: 'Tomate, fromage, jambon, œuf',
      options: [
        { name: 'Petite', price: '9,50 €' },
        { name: 'Moyenne', price: '11,50 €' },
        { name: 'Grande', price: '13,50 €' }
      ]
    },
    {
      name: 'Calzone',
      description: 'Tomate, fromage, jambon, œuf',
      options: [
        { name: 'Petite', price: '9,50 €' },
        { name: 'Moyenne', price: '11,50 €' },
        { name: 'Grande', price: '13,50 €' }
      ]
    },
    {
      name: 'Reine',
      description: 'Tomate, fromage, jambon, champignons',
      options: [
        { name: 'Petite', price: '10,50 €' },
        { name: 'Moyenne', price: '12,50 €' },
        { name: 'Grande', price: '14,50 €' }
      ]
    },
    {
      name: '4 Fromages',
      description: 'Tomate, fromage, assortiment de 4 fromages',
      options: [
        { name: 'Petite', price: '11,50 €' },
        { name: 'Moyenne', price: '13,50 €' },
        { name: 'Grande', price: '15,50 €' }
      ]
    },
    {
      name: 'Orientale',
      description: 'Tomate, fromage, merguez, poivrons, oignons, œuf',
      options: [
        { name: 'Petite', price: '11,00 €' },
        { name: 'Moyenne', price: '13,00 €' },
        { name: 'Grande', price: '15,00 €' }
      ]
    }
  ],
  texmex: [
    {
      name: 'Chicken Wings',
      description: '7 pièces',
      price: '8,50 €'
    },
    {
      name: 'Nuggets',
      description: '8 pièces',
      price: '8,50 €'
    },
    {
      name: 'Tenders',
      description: '6 pièces',
      price: '8,50 €'
    },
    {
      name: 'Frites',
      options: [
        { name: 'Petite', price: '2,00 €' },
        { name: 'Grande', price: '3,00 €' }
      ]
    },
    {
      name: 'Frites Cheddar Bacon',
      options: [
        { name: 'Petite', price: '3,00 €' },
        { name: 'Grande', price: '4,00 €' }
      ]
    }
  ],
  paninis: [
    {
      name: 'Viande Hachée',
      price: '6,00 €',
      specialNote: '+ 1 Boisson 33cl'
    },
    {
      name: '3 Fromages',
      price: '6,00 €',
      specialNote: '+ 1 Boisson 33cl'
    },
    {
      name: 'Poulet',
      price: '6,00 €',
      specialNote: '+ 1 Boisson 33cl'
    },
    {
      name: 'Jambon',
      price: '6,00 €',
      specialNote: '+ 1 Boisson 33cl'
    },
    {
      name: 'Merguez',
      price: '6,00 €',
      specialNote: '+ 1 Boisson 33cl'
    }
  ],
  zappwichs: [
    {
      name: 'Viande Hachée',
      description: 'Sauce tomate ou crème fraîche, fromage',
      price: '7,00 €'
    },
    {
      name: 'Poulet',
      description: 'Sauce tomate ou crème fraîche, fromage',
      price: '7,00 €'
    },
    {
      name: 'Cannibale',
      description: 'Viande hachée, merguez, poulet',
      price: '8,00 €',
      specialNote: 'Notre spécialité'
    }
  ],
  'menu-midi': [
    {
      name: 'Menu Midi 1',
      description: '1 Pizza petit + 1 boisson 33cl',
      price: '10,00 €'
    },
    {
      name: 'Menu Midi 2',
      description: '1 Pizza moyenne + 1 boisson 33cl',
      price: '13,00 €'
    }
  ],
  desserts: [
    {
      name: 'Tarte au daim',
      price: '2,50 €'
    },
    {
      name: 'Tiramisu',
      price: '2,50 €'
    }
  ],
  boissons: [
    {
      name: 'Coca, Coca zéro, Coca Cherry 33cl',
      price: '1,50 €'
    },
    {
      name: 'Fanta citron ou orange, Ice Tea 33cl',
      price: '1,50 €'
    },
    {
      name: 'Sprite, Tropico 33cl',
      price: '1,50 €'
    },
    {
      name: '7 Up Mojito, Perrier 33cl',
      price: '1,50 €'
    },
    {
      name: 'Oasis tropical 33cl',
      price: '1,50 €'
    },
    {
      name: 'Maxi Coca, Fanta, Sprite 1,5L',
      price: '3,00 €'
    },
    {
      name: 'Maxi Oasis 2L',
      price: '3,50 €'
    }
  ]
};