interface NavigationProps {
  onSectionChange: (section: string | null) => void;
  activeSection: string | null;
}

const Navigation = ({ onSectionChange, activeSection }: NavigationProps) => {
  const handleSectionClick = (sectionId: string) => {
    // Toggle: if clicking the same section, hide it; otherwise show the new one
    if (activeSection === sectionId) {
      onSectionChange(null);
    } else {
      onSectionChange(sectionId);
    }
  };

  return (
    <nav className="w-full py-6 sm:py-8 gradient-papyrus border-b border-border/40">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
            <button
              onClick={() => handleSectionClick('history')}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-serif rounded-md transition-all duration-300 shadow-card hover:shadow-elegant ${
                activeSection === 'history'
                  ? 'bg-primary text-primary-foreground border-2 border-primary'
                  : 'text-primary bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary'
              }`}
            >
              HISTORY
            </button>
            <button
              onClick={() => handleSectionClick('staff')}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-serif rounded-md transition-all duration-300 shadow-card hover:shadow-elegant ${
                activeSection === 'staff'
                  ? 'bg-primary text-primary-foreground border-2 border-primary'
                  : 'text-primary bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary'
              }`}
            >
              STAFF
            </button>
            <button
              onClick={() => handleSectionClick('activities')}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-serif rounded-md transition-all duration-300 shadow-card hover:shadow-elegant ${
                activeSection === 'activities'
                  ? 'bg-primary text-primary-foreground border-2 border-primary'
                  : 'text-primary bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary'
              }`}
            >
              ACTIVITIES
            </button>
            <button
              onClick={() => handleSectionClick('news')}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-serif rounded-md transition-all duration-300 shadow-card hover:shadow-elegant ${
                activeSection === 'news'
                  ? 'bg-primary text-primary-foreground border-2 border-primary'
                  : 'text-primary bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary'
              }`}
            >
              NEWS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

