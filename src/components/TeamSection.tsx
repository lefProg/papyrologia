import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface Professor {
  name: string;
  title: string;
  specialization: string;
  email: string;
}

interface Student {
  name: string;
  role: string;
}

const professors: Professor[] = [
  {
    name: "Dr. Φυκαρης Ιωάννης",
    title: "Αναπληρωτής Kαθηγητής",
    specialization: "Τμήμα Φιλολογίας Πανεπιστημίου Ιωαννίνων",
    email: "ifykaris@uoi.gr"
  }//,
//  {
//    name: "Prof. Dimitrios Nikolaidis",
//    title: "Associate Professor",
//    specialization: "Documentary Papyri",
//    email: "d.nikolaidis@uoi.gr"
//  },
//  {
//    name: "Prof. Eleni Vasileiou",
//    title: "Assistant Professor",
//    specialization: "Literary Papyri",
//    email: "e.vasileiou@uoi.gr"
//  },
];

const students: Student[] = [
  { name: "Βασιλείου Αικατερίνη ", role: "BA Student" },
  { name: "Κυρατλίδου Αικατερίνη ", role: "BA Student" },
  { name: "Λυκοπάντη Δήμητρα Στυλιανή ", role: "BA Student" },
  { name: "Μυριούνη Ειρήνη Χρυσοβαλάντου ", role: "BA Student" },
  { name: "Νικολούζου Ειρήνη Ξένια ", role: "BA Student" },
  { name: "Νταλαμπύρα Ευγενία ", role: "MA Student" },  
  { name: "Προδρομίτη Φιλάνθη Μαρία ", role: "BA Student" },
  { name: "Σταμάτη Παρασκευή ", role: "MA Student" },
  { name: "Τρουλλή Ευδοκία Τσαμπίκα ", role: "BA Student" },
  { name: "Τσάτσος Παναγιώτης ", role: "BA Student" },
  { name: "Τσόγκα Ελευθερία ", role: "BA Student" },
  { name: "Φασούλα Φωτεινή ", role: "BA Student" },
  { name: "Xατζηγιάννης Κωνσταντίνος ", role: "MA Student" },





  //  { name: "Andreas Georgiou", role: "PhD Candidate" },
//  { name: "Sofia Christou", role: "PhD Candidate" },
//  { name: "Konstantinos Athanasiou", role: "Research Assistant" },
//  { name: "Ioanna Petrou", role: "Research Assistant" },
//  { name: "Nikos Stavrou", role: "MA Student" },
//  { name: "Elena Dimitriou", role: "MA Student" },
];

const TeamSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary text-center mb-8 sm:mb-12 md:mb-16">
          Dream Team
        </h2>
        
        {/* Professors Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-6 sm:mb-8 text-center">Faculty</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {professors.map((professor, index) => (
              <Card key={index} className="p-6 sm:p-8 shadow-elegant hover:shadow-xl transition-all duration-300 bg-card border-2 border-accent/20 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.34rem)] xl:max-w-sm">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-hero mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-serif text-primary-foreground">
                      {professor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif text-primary mb-2">{professor.name}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-accent mb-2">{professor.title}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{professor.specialization}</p>
                  <a 
                    href={`mailto:${professor.email}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-primary hover:text-accent transition-colors break-all text-xs sm:text-sm justify-center flex-wrap"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="break-all">{professor.email}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Students Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-6 sm:mb-8 text-center">Researchers & Students</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {students.map((student, index) => (
              <Card key={index} className="p-3 sm:p-4 shadow-card hover:shadow-elegant transition-all duration-300 bg-card text-center w-full max-w-[200px] sm:w-[calc(50%-0.5rem)] sm:max-w-[200px] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                  <span className="text-base sm:text-lg font-serif text-secondary-foreground">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-serif text-primary mb-1 break-words">{student.name}</h4>
                <p className="text-xs text-muted-foreground">{student.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
