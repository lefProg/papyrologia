import papyrus1 from "@/assets/papyrus-1.jpg";
import papyrus2 from "@/assets/papyrus-2.jpg";
import papyrus3 from "@/assets/papyrus-3.jpg";
import { Card } from "@/components/ui/card";

const papyriImages = [
  { src: papyrus1, title: "Hellenistic Period Fragment", description: "3rd Century BCE" },
  { src: papyrus2, title: "Literary Text", description: "2nd Century CE" },
  { src: papyrus3, title: "Documentary Papyrus", description: "1st Century CE" },
];

const PapyriGallery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary text-center mb-8 sm:mb-10 md:mb-12">
          Featured Papyri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {papyriImages.map((papyrus, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={papyrus.src} 
                  alt={papyrus.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 bg-card">
                <h3 className="text-lg sm:text-xl font-serif text-primary mb-2">{papyrus.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{papyrus.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PapyriGallery;
