import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/marbre.png')" }}
      ></div>

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 drop-shadow-sm">
          <span className="block">Papilles Pizza</span>
          <span className="block text-3xl sm:text-4xl mt-2 text-primary">
            Marcoussis
          </span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-gray-800">
          Livraison gratuite à domicile et au bureau -{" "}
          <span className="text-green-600">Halal</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:0169806552"
            className="btn-primary flex items-center justify-center gap-2 text-lg"
          >
            <Phone size={20} />
            Commander par téléphone: 01 69 80 65 52
          </a>

          <a href="#menu" className="btn-secondary">
            Voir notre menu
          </a>
        </div>

        <div className="bg-white/90 py-4 px-6 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-200">
          <p className="text-lg sm:text-xl font-bold text-gray-900">
            1 pizza achetée = la 2ème offerte*
          </p>
          <p className="text-sm text-gray-600 mt-1">*À emporter uniquement</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
