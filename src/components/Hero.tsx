import heroImage from "@/assets/uoi-logo-new.webp";
import handwrittenImage from "@/assets/handwritten_new.jpg";

const Hero = () => {
  return (
    <section>
      {/* Hero Image and Title Section */}
      <div className="w-full flex items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-0">
        {/* Image on the left */}
        <div className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 flex items-center justify-center">
          <img 
            src={heroImage} 
            alt="University of Ioannina Logo" 
            className="w-full h-auto max-w-full object-contain"
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

      {/* Handwritten Image Section - Alone */}
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-background p-4 sm:p-8 mt-8 sm:mt-12 mb-8 sm:mb-12">
        <img 
          src={handwrittenImage} 
          alt="Handwritten" 
          className="w-full h-full object-contain object-center"
        />
      </div>
      
    </section>
  );
};

export default Hero;
