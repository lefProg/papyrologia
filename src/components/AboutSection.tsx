import robLabsLogo from "@/assets/RobLabs_logo.png";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container pl-18 sm:pl-18 md:pl-18 pr-4">
        <div className="max-w-6xl ml-0 mr-auto">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* RobLabs Logo on the left - larger and centered */}
            <div className="flex-shrink-0 w-1/4 sm:w-1/5 md:w-1/5 flex items-center justify-center">
              <a 
                href="https://www.roblabs.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full max-w-xs"
              >
                <img 
                  src={robLabsLogo} 
                  alt="RobLabs Logo" 
                  className="w-full h-auto object-contain hover:opacity-90 transition-opacity cursor-pointer scale-110"
                />
              </a>
            </div>
            
            {/* Content on the middle/right */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8 text-left">
                  THE LABORATORY
              </h2>
              <div className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
            <p className="mb-4">
              Being part of the Faculty of Philology at the University of Ioannina the Lab promotes research within the broader fields of Ancient Greek and Latin Philology, focusing on Textual Criticism, scholarly Editing, Palaeography, and Papyrology, and extends its work to Didactic Methodology and Digital Humanities.
            </p>
            <p className="mb-4">
              The Lab's main objectives are described as follows:
            </p>
            <ul className="list-none space-y-2 mb-4 text-left max-w-3xl">
              <li>• Connection of Ancient Greek and Latin Philology with the creation and processing of material substrates of texts</li>
              <li>• Research into Ancient Greek and Latin papyri and manuscripts</li>
              <li>• Transformation of Ancient Greek and/or Latin textual resources</li>
              <li>• Connection of Ancient Greek and Latin Philology with Didactic Methodology</li>
              <li>• Contribution to Research Programs in Terms of Excellence and Innovation</li>
              <li>• Collaboration and Partnership with Institutions and Companies</li>
            </ul>
            <p className="mb-4">
              The mission and specific objectives of the Lab are set out in greater detail in the Article 3 of the Laboratory's Regulations published in the <a 
                href="/fek.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline font-medium"
              >
                Government Gazette
              </a>.
            </p>
            <p>
              The Lab strongly supports the <a href="https://www.roblabs.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent underline font-medium">RobLabs Consortium</a> being one of its active research partners.
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
