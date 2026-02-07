import heroImage from "@/assets/uoi_logo.png";
import papyrologyLogo from "@/assets/papyrology_logo.png";

const Hero = () => {
  return (
    <section>
      {/* Papyrology Logo - centered above title */}
      <div className="w-full flex justify-center px-4 pt-8 sm:pt-12 pb-1 sm:pb-2">
        <img
          src={papyrologyLogo}
          alt="Papyrology Laboratory Logo"
          className="h-28 sm:h-32 md:h-40 lg:h-48 w-auto object-contain"
        />
      </div>

      {/* Hero Image and Title Section */}
      <div className="w-full flex items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 -mt-1 pb-0">
        {/* Image on the left - column as original, image slightly smaller */}
        <div className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 flex items-center justify-center">
          <img 
            src={heroImage} 
            alt="University of Ioannina Logo" 
            className="w-full h-auto max-w-[85%] object-contain"
          />
        </div>
        
        {/* Title on the middle/right */}
        <div className="flex-1 flex items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary animate-fade-in">
            LABORATORY FOR THE CREATION AND PROCESSING OF WRITING MATERIALS AND FOR THE PROCESSING OF ANCIENT GREEK AND LATIN TEXTS
          </h1>
        </div>
      </div>
      
      {/* Department and University Section */}
      {/* <div className="container px-4 -mt-2 sm:-mt-4 text-left">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-0 sm:mb-1">
            Department of Philology
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80">
            University of Ioannina
          </p>
        </div>
      </div> */}

    </section>
  );
};

export default Hero;
