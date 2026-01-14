const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8">
              THE LABORATORY
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
            Being part of the Faculty of Philology at the University of Ioannina the Lab promotes research within the broader fields of Ancient Greek and Latin Philology, focusing on Textual Criticism, scholarly Editing, Palaeography, and Papyrology, and extends its work to Didactic Methodology and Digital Humanities.
            The Lab’s main objectives are described as follows:
                • Connection of Ancient Greek and Latin Philology with the creation and processing of material substrates of texts
                • Research into Ancient Greek and Latin papyri and manuscripts
                • Transformation of Ancient Greek and/or Latin textual resources
                • Connection of Ancient Greek and Latin Philology with Didactic Methodology 
                • Contribution to Research Programs in Terms of Excellence and Innovation
                • Collaboration and Partnership with Institutions and Companies

            The mission and specific objectives of the Lab are set out in greater detail in the Article 3 of the Laboratory's Regulations published in the <a 
              href="/fek.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent underline font-medium"
            >
              Government Gazette
            </a>.
            The Lab strongly supports the <a href="https://www.roblabs.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent underline font-medium">RobLabs Consortium</a> being one of its active research partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
