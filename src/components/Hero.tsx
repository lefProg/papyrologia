import heroImage from "@/assets/hero-papyrus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      
      <div className="container relative z-10 px-4 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-primary-foreground mb-4 sm:mb-6 animate-fade-in px-2">
          Laboratory for the creation and processing of writing materials and for the processing of Ancient Greek and Latin texts
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-3 sm:mb-4 max-w-3xl mx-auto px-2">
          Department of Philology
        </p>
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto px-2">
          University of Ioannina
        </p>
      </div>
    </section>
  );
};

export default Hero;
