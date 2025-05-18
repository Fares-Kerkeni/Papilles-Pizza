import { FC } from 'react';
import { MenuItem } from '../types';

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory: FC<MenuCategoryProps> = ({ title, items }) => {
  return (
    <div className="menu-card">
      <h3 className="text-2xl font-bold mb-6 text-secondary">{title}</h3>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                {!item.options && (
                  <span className="price-tag whitespace-nowrap">{item.price}</span>
                )}
              </div>
              {item.description && (
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              )}
              {item.options && (
                <div className="mt-2 space-y-2">
                  {item.options.map((option, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-300">{option.name}</span>
                      <span className="price-tag">{option.price}</span>
                    </div>
                  ))}
                </div>
              )}
              {item.specialNote && (
                <p className="text-green-500 text-sm mt-1">{item.specialNote}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;