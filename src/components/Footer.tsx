import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4">Papyrology Research Center</h3>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              Department of Philology<br />
              University of Ioannina
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-serif mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  University Campus<br />
                  45110 Ioannina, Greece
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 break-all">+30 26510 07XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 break-all">papyrology@uoi.gr</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-serif mb-3 sm:mb-4">Visit Us</h4>
            <p className="text-primary-foreground/80 text-xs sm:text-sm mb-2">
              Office Hours:<br />
              Monday - Friday<br />
              9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm px-2">
            © {new Date().getFullYear()} University of Ioannina - Papyrology Research Center
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
