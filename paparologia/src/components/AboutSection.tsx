const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8">
            About Our Research
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
            The Papyrology Research Center at the University of Ioannina's Department of Philology 
            is dedicated to the study, preservation, and interpretation of ancient manuscripts written on papyrus. 
            Our interdisciplinary team works to uncover the stories, knowledge, and cultural heritage 
            preserved in these fragile documents.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-2">
            Through careful analysis and cutting-edge research methodologies, we contribute to the broader 
            understanding of ancient civilizations, their languages, literature, and daily life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
