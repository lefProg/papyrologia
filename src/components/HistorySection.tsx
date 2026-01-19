const HistorySection = () => {
  return (
    <section id="history" className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8">
            HISTORY
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
            2025
            The Lab has been founded (<a 
              href="/fek.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent underline font-medium"
            >
              Government Gazette, issue 255B/30-01-2025
            </a>) thanks to a number of initiatives Assoc. Professor Ioannis Fykaris has undertaken, in virtue of the <a 
              href="/fek_2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent underline font-medium"
            >
              Law's 4485/2017
            </a> Article n. 29.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

