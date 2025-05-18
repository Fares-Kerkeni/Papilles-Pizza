import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact</h2>
      
      <div className="menu-card">
        <h3 className="text-2xl font-bold mb-6 text-yellow-500">Nous Contacter</h3>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <Phone className="text-red-500 h-8 w-8 mr-4" />
            <div>
              <p className="text-lg font-medium">Téléphone</p>
              <a href="tel:0169806552" className="text-2xl font-bold text-yellow-500 hover:underline">
                01 69 80 65 52
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-red-500 h-8 w-8 mr-4" />
            <div>
              <p className="text-lg font-medium">Adresse</p>
              <a 
                href="https://www.google.com/maps?sca_esv=44cd9e4f38d377fc&sxsrf=AHTn8zodi5lgB5JhR4UOhPRxbgs9QnoyoQ:1747594816168&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXBhcGlsbGVzIHBpenphIG1hcmNvdXNzaXMgbWFwMgIQJjIIEAAYogQYiQUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIvxdQrhNYrRVwA3gBkAEAmAFBoAHBAaoBATO4AQPIAQD4AQGYAgagAt8BwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigWYAwCIBgGQBgiSBwE2oAedCrIHATO4B80B&um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=Kc8jV0Fm1-VHMR7xCuTLOhZp&daddr=23+Rue+Alfred+Dubois,+91460+Marcoussis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition-colors"
              >
                <address className="not-italic">
                  23 rue Alfred Dubois, 91460 Marcoussis
                </address>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a 
            href="tel:0169806552" 
            className="btn-primary flex-1 text-center"
          >
            Appeler maintenant
          </a>
          <a 
            href="https://wa.me/33169806552"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-center"
          >
            Contacter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;