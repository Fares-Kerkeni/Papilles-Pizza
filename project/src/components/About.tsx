import { Clock, CreditCard, Map } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">À Propos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="menu-card flex flex-col items-center">
          <Map size={48} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-center">Notre Adresse</h3>
          <address className="text-center not-italic">
            <p className="text-lg">23 rue Alfred Dubois</p>
            <p className="text-lg">91460 Marcoussis</p>
          </address>
        </div>

        <div className="menu-card flex flex-col items-center">
          <Clock size={48} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-center">Nos Horaires</h3>
          <ul className="space-y-2 text-center">
            <li>
              <p className="font-medium">Lundi à Samedi</p>
              <p className="text-gray-300">11h – 14h30, 18h – 22h30</p>
            </li>
            <li>
              <p className="font-medium">Week-end</p>
              <p className="text-gray-300">Jusqu'à 23h</p>
            </li>
            <li>
              <p className="font-medium">Dimanche</p>
              <p className="text-gray-300">18h - 23h30</p>
            </li>
          </ul>
        </div>

        <div className="menu-card flex flex-col items-center">
          <CreditCard size={48} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-center">
            Paiements Acceptés
          </h3>
          <div className="space-y-2 text-center">
            <p>Carte Bancaire</p>
            <p>Tickets Restaurant</p>
            <p className="text-yellow-500 font-medium mt-4">
              Minimum de commande: 15€
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 menu-card">
        <h3 className="text-2xl font-bold mb-6 text-center text-yellow-500">
          Livraison Gratuite
        </h3>
        <p className="text-center text-lg">
          Profitez de notre livraison gratuite à domicile et au bureau dans
          Marcoussis et ses environs.
        </p>
        <div className="flex justify-center mt-8">
          <a href="tel:0169806552" className="btn-primary">
            Commander maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
