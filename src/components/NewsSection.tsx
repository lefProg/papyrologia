const NewsSection = () => {
  return (
    <section id="news" className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8 text-left">
            NEWS
          </h2>
          
          {/* December 18, 2025 Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6 text-left">
              Thursday, December 18, 2025
            </h3>
            <div className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2 text-left">
              <h4 className="text-xl sm:text-2xl font-serif text-primary mb-3 sm:mb-4 text-left">
                Associate Professor Ioannis Fykaris Honored by the <a 
                  href="https://www.academyofathens.gr/el/news/panigyriki-synedria-tis-akadimias-athinon-pinakas-timomenon-pempti-18-dekembrioy-2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent underline font-medium"
                >
                  Academy of Athens
                </a>
              </h4>
              <p>
                During the ceremonial session of the Academy of Athens held in its Hall of Ceremonies in Athens, Associate Professor of the <a 
                  href="https://philology.uoi.gr/genikes/vraveysi-toy-anapliroti-kathigiti-toy-tmimatos-filologias-k-ioanni-fykari-apo-tin-akadimia-athinon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent underline font-medium"
                >
                  Department of Philology
                </a>, Mr. Ioannis Fykaris, was awarded the Commendation of the Academy of Athens of the "Second Class of Letters and Fine Arts" for his work "The Socratic Phenomenon" in Contemporary Pedagogical and Teaching Perspective. This award represents a distinguished recognition of the contribution of this work to the field of Letters and, in particular, to his specific area of scholarly expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

