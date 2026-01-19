import heroImage from "@/assets/hero-papyrus.jpg";
import handwrittenImage from "@/assets/handwritten.JPG";
import robLabsLogo from "@/assets/RobLabs_logo.png";

const Hero = () => {
  return (
    <section>
      {/* Hero Image Section - Full width on top */}
      <div className="w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Papyrus" 
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(0.8)'}}
        />
      </div>
      {/* Title Section */}
      <div className="container px-4 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-primary mb-4 sm:mb-6 animate-fade-in px-2">
          LABORATORY FOR THE CREATION AND PROCESSING OF WRITING MATERIALS AND FOR THE PROCESSING OF ANCIENT GREEK AND LATIN TEXTS
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
          Department of Philology
        </p>
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-2">
          University of Ioannina
        </p>
      </div>

      {/* Two images side by side below hero */}
      <div className="w-full flex gap-2 sm:gap-4">
        <div className="w-1/2 h-[30vh] sm:h-[40vh] overflow-hidden">
          <a 
            href="https://www.roblabs.eu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img 
              src={robLabsLogo} 
              alt="RobLabs Logo" 
              className="w-full h-full object-contain object-center bg-background p-2 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer"
            />
          </a>
        </div>
        <div className="w-1/2 h-[30vh] sm:h-[40vh] overflow-hidden flex items-center justify-center bg-background p-2 sm:p-4">
          <img 
            src={handwrittenImage} 
            alt="Handwritten" 
            className="w-full h-full object-contain object-center"
            style={{ transform: 'rotate(-90deg) scale(0.8)' }}
          />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
