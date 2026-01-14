import { Card } from "@/components/ui/card";

interface Student {
  name: string;
  role: string;
}

const students: Student[] = [
  { name: "Βασιλείου Αικατερίνη ", role: "BA Student" },
  { name: "Κυρατλίδου Αικατερίνη ", role: "BA Student" },
  { name: "Λαμπνταβίτης Ευάγγελος", role: "MA Student" },  
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
];

const StaffSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 gradient-papyrus">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-6 sm:mb-8">
            STAFF
          </h2>
          
          {/* Director Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              Director
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              In accordance with Article 5 of the <a 
                href="/fek.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline font-medium"
              >
                Laboratory's Regulations
              </a> the Director of the Laboratory, elected by the Assembly of the Faculty of Philology every three years, is responsible for its operation.
              In accordance with the <a 
                href="/director.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline font-medium"
              >
                Rector's Act No. 9785/10-03-2025
              </a>, <a 
                href="https://philology.uoi.gr/en/staff/faculty-members/fykaris-ioannis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline font-medium"
              >
                Ioannis Fykaris
              </a>, Assoc. Professor of Didactic Methodology, has been elected Director of the Laboratory.
            </p>
          </div>

          {/* Academic Partner, Students Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              Academic Partner, Students
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              In accordance with Article 4 of the <a 
                href="/fek.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline font-medium"
              >
                Laboratory's Regulations
              </a>, the Laboratory staff includes faculty members of the Department of Philology at the University of Ioannina whose expertise aligns with its research areas, supported by technical, scientific, and administrative personnel, as well as undergraduate and postgraduate students, doctoral candidates, and postdoctoral researchers. The Laboratory may also host permanent civil servants holding a doctoral degree in a relevant field through the Unified Mobility System of the Hellenic Republic.
            </p>
          </div>

          {/* Academic Partner Sub-section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-6">
              Academic Partner
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 px-2">
              <a 
                href="https://philology.uoi.gr/en/staff/faculty-members/athanasopoulos-panagiotis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline font-medium"
              >
                Assist. Professor Panagiotis Ch. Athanasopoulos
              </a> | pathanasopoulos@uoi.gr 
            </p>
          </div>

          {/* Students Sub-section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-primary mb-6 sm:mb-8">
              Students
            </h3>
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
      </div>
    </section>
  );
};

export default StaffSection;

