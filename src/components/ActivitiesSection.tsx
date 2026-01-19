import { downloadMultipleFiles } from "@/lib/utils";

const ActivitiesSection = () => {
  const handleImageClick = (e: React.MouseEvent<HTMLAnchorElement>, images: Array<{ url: string; filename: string }>) => {
    e.preventDefault();
    downloadMultipleFiles(images);
  };

  return (
    <section id="activities" className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8">
            ACTIVITIES
          </h2>
          
          {/* October 2025 Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              <a 
                href="/images/October 2025 - 01.jpg" 
                onClick={(e) => handleImageClick(e, [
                  { url: "/images/October 2025 - 01.jpg", filename: "October 2025 - 01.jpg" },
                  { url: "/images/October 2025 - 02.jpg", filename: "October 2025 - 02.jpg" }
                ])}
                className="text-primary hover:text-accent underline font-medium cursor-pointer"
              >
                October 2025
              </a>
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              Procurement of papyrus plants and initiation of their cultivation in pots by students of the Department of Philology, University of Ioannina.
            </p>
          </div>

          {/* October 2025 – Present Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              <a 
                href="/images/October 2025 - 03.jpg" 
                onClick={(e) => handleImageClick(e, [
                  { url: "/images/October 2025 - 03.jpg", filename: "October 2025 - 03.jpg" }
                ])}
                className="text-primary hover:text-accent underline font-medium cursor-pointer"
              >
                October 2025 – Present
              </a>
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              Ongoing collaboration between the Lab and the Regional Directorate of Primary and Secondary Education of Epirus, within the framework of the Ministry of Education, Religious Affairs and Sports programme "Active Citizen". The project focuses on the production of writable material from the papyrus plant, highlighting its sustainable management and relevance to contemporary societal needs.
            </p>
          </div>

          {/* 12 and 19 November 2025 Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              <a 
                href="/images/12 and 19 November 2025 - 1.jpg" 
                onClick={(e) => handleImageClick(e, [
                  { url: "/images/12 and 19 November 2025 - 1.jpg", filename: "12 and 19 November 2025 - 1.jpg" },
                  { url: "/images/12 and 19 November 2025 - 2.jpg", filename: "12 and 19 November 2025 - 2.jpg" },
                  { url: "/images/12 and 19 November 2025 - 3.jpg", filename: "12 and 19 November 2025 - 3.jpg" },
                  { url: "/images/12 and 19 November 2025 - 4.jpg", filename: "12 and 19 November 2025 - 4.jpg" }
                ])}
                className="text-primary hover:text-accent underline font-medium cursor-pointer"
              >
                12 and 19 November 2025
              </a>
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              Visits to the Primary Schools of Agios Dimitrios and Aneza (Arta), and the 6th and 7th Primary Schools of Ioannina, respectively, under the auspices of the "Active Citizen" programme. The activities involved the organisation of the production plan for writable material from the papyrus plant.
            </p>
          </div>

          {/* 11 and 25 November 2025 Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              <a 
                href="/images/11 and 25 November 2025 - 1.jpg" 
                onClick={(e) => handleImageClick(e, [
                  { url: "/images/11 and 25 November 2025 - 1.jpg", filename: "11 and 25 November 2025 - 1.jpg" },
                  { url: "/images/11 and 25 November 2025 - 2.jpg", filename: "11 and 25 November 2025 - 2.jpg" }
                ])}
                className="text-primary hover:text-accent underline font-medium cursor-pointer"
              >
                11 and 25 November 2025
              </a>
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              Professional demonstrations and hands-on sessions on document digitisation methodologies, conducted by specialised librarians at the Central Library of the University of Ioannina.
            </p>
          </div>

          {/* 9 December 2025 Sub-section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              <a 
                href="/images/9 December 2025 - 1.jpg" 
                onClick={(e) => handleImageClick(e, [
                  { url: "/images/9 December 2025 - 1.jpg", filename: "9 December 2025 - 1.jpg" },
                  { url: "/images/9 December 2025 - 2.jpg", filename: "9 December 2025 - 2.jpg" },
                  { url: "/images/9 December 2025 - 3.jpg", filename: "9 December 2025 - 3.jpg" },
                  { url: "/images/9 December 2025 - 4.jpg", filename: "9 December 2025 - 4.jpg" },
                  { url: "/images/9 December 2025 - 5.jpg", filename: "9 December 2025 - 5.jpg" },
                  { url: "/images/9 December 2025 - 6.jpg", filename: "9 December 2025 - 6.jpg" },
                  { url: "/images/9 December 2025 - 7.jpg", filename: "9 December 2025 - 7.jpg" },
                  { url: "/images/9 December 2025 - 8.jpg", filename: "9 December 2025 - 8.jpg" },
                  { url: "/images/9 December 2025 - 9.jpg", filename: "9 December 2025 - 9.jpg" },
                  { url: "/images/9 December 2025 - 10.jpg", filename: "9 December 2025 - 10.jpg" },
                  { url: "/images/9 December 2025 - 11.jpg", filename: "9 December 2025 - 11.jpg" }
                ])}
                className="text-primary hover:text-accent underline font-medium cursor-pointer"
              >
                9 December 2025
              </a>
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              Simulation exercises of papyrus production and processing methodologies using simple paper materials, carried out by students of the Department of Philology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

