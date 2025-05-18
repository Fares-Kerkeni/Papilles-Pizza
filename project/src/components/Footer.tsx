import { Phone, MapPin, Clock, Pizza } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white/80 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Pizza className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="font-bold text-xl bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Papilles Pizza
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Des pizzas délicieuses préparées avec des ingrédients frais et de qualité.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:0169806552" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Téléphone"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="https://www.google.com/maps?sca_esv=44cd9e4f38d377fc&sxsrf=AHTn8zodi5lgB5JhR4UOhPRxbgs9QnoyoQ:1747594816168&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXBhcGlsbGVzIHBpenphIG1hcmNvdXNzaXMgbWFwMgIQJjIIEAAYogQYiQUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIvxdQrhNYrRVwA3gBkAEAmAFBoAHBAaoBATO4AQPIAQD4AQGYAgagAt8BwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigWYAwCIBgGQBgiSBwE2oAedCrIHATO4B80B&um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=Kc8jV0Fm1-VHMR7xCuTLOhZp&daddr=23+Rue+Alfred+Dubois,+91460+Marcoussis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Localisation"
              >
                <MapPin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Horaires d'ouverture</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Lundi à Samedi</span>
                <span>11h – 14h30, 18h – 22h30</span>
              </li>
              <li className="flex justify-between">
                <span>Week-end</span>
                <span>Jusqu'à 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>Soir uniquement</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="tel:0169806552" className="flex items-start hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>01 69 80 65 52</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps?sca_esv=44cd9e4f38d377fc&sxsrf=AHTn8zodi5lgB5JhR4UOhPRxbgs9QnoyoQ:1747594816168&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXBhcGlsbGVzIHBpenphIG1hcmNvdXNzaXMgbWFwMgIQJjIIEAAYogQYiQUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIvxdQrhNYrRVwA3gBkAEAmAFBoAHBAaoBATO4AQPIAQD4AQGYAgagAt8BwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigWYAwCIBgGQBgiSBwE2oAedCrIHATO4B80B&um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=Kc8jV0Fm1-VHMR7xCuTLOhZp&daddr=23+Rue+Alfred+Dubois,+91460+Marcoussis"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-start hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>23 rue Alfred Dubois, 91460 Marcoussis</span>
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Livraison gratuite à domicile et au bureau</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500">
          <p>© {currentYear} Papilles Pizza - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;