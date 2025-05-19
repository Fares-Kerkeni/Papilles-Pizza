import { useState } from "react";
import MenuCategory from "./MenuCategory";
import { menuData } from "../data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("pizzas");

  const categories = [
    { id: "pizzas", name: "Nos Pizzas" },
    { id: "texmex", name: "Tex Mex" },
    { id: "paninis", name: "Paninis" },
    { id: "zappwichs", name: "Zapp'Wichs" },
    { id: "sandwichs", name: "Sandwichs" },
    { id: "tacos", name: "Tacos" },
    { id: "burgers", name: "Burgers" },
    { id: "menu-midi", name: "Menus Midi" },
    { id: "menu-enfant", name: "Menu Enfant" },
    { id: "offres", name: "Offres Spéciales" },
    { id: "desserts", name: "Desserts" },
    { id: "boissons", name: "Boissons" },
  ];

  return (
    <section id="menu" className="section-container">
      <h2 className="section-title">Notre Carte</h2>

      <div className="overflow-x-auto pb-4 mb-8">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap
                ${
                  activeCategory === category.id
                    ? "bg-secondary text-black"
                    : "bg-black/40 text-white hover:bg-black/60"
                }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className={activeCategory === category.id ? "block" : "hidden"}
          >
            <MenuCategory
              title={category.name}
              items={menuData[category.id] || []}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary">
        <p className="text-center text-sm">
          Minimum de commande :{" "}
          <span className="font-bold text-secondary">15€</span> • CB et Tickets
          Restaurant acceptés
        </p>
      </div>
    </section>
  );
};

export default Menu;
