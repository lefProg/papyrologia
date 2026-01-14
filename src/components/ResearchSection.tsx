const ResearchSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8">
            RESEARCH
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
            Add your research content here. You can include links like this: <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent underline font-medium">example link</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

