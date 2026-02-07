import { type ReactNode } from "react";

interface NavigationProps {
  onSectionChange: (section: string | null) => void;
  activeSection: string | null;
  variant?: "default" | "split";
  children?: ReactNode;
}

const buttonClass = (
  isActive: boolean
) => `px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-serif rounded-md transition-all duration-300 shadow-card hover:shadow-elegant ${
  isActive
    ? "bg-primary text-primary-foreground border-2 border-primary"
    : "text-primary bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
}`;

/** Smaller, responsive buttons for split layout so they scale with the image on mobile */
const splitButtonClass = (isActive: boolean) =>
  `px-2 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-serif rounded transition-all duration-300 shadow-card hover:shadow-elegant ${
    isActive
      ? "bg-primary text-primary-foreground border-2 border-primary"
      : "text-primary bg-card border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
  }`;

const Navigation = ({
  onSectionChange,
  activeSection,
  variant = "default",
  children,
}: NavigationProps) => {
  const handleSectionClick = (sectionId: string) => {
    if (activeSection === sectionId) {
      onSectionChange(null);
    } else {
      onSectionChange(sectionId);
    }
  };

  if (variant === "split" && children != null) {
    return (
      <nav className="w-full py-2 sm:py-3 md:py-4 gradient-papyrus border-b border-border/40">
        <div className="container px-2 sm:px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-shrink-0 flex-col justify-center items-end gap-1.5 sm:gap-3 md:gap-4">
              <button
                onClick={() => handleSectionClick("history")}
                className={splitButtonClass(activeSection === "history")}
              >
                HISTORY
              </button>
              <button
                onClick={() => handleSectionClick("staff")}
                className={splitButtonClass(activeSection === "staff")}
              >
                STAFF
              </button>
            </div>
            <div className="flex-1 min-w-0 flex items-center justify-center overflow-hidden min-h-0">
              {children}
            </div>
            <div className="flex flex-shrink-0 flex-col justify-center items-start gap-1.5 sm:gap-3 md:gap-4">
              <button
                onClick={() => handleSectionClick("activities")}
                className={splitButtonClass(activeSection === "activities")}
              >
                ACTIVITIES
              </button>
              <button
                onClick={() => handleSectionClick("news")}
                className={splitButtonClass(activeSection === "news")}
              >
                NEWS
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full py-6 sm:py-8 gradient-papyrus border-b border-border/40">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
            <button
              onClick={() => handleSectionClick("history")}
              className={buttonClass(activeSection === "history")}
            >
              HISTORY
            </button>
            <button
              onClick={() => handleSectionClick("staff")}
              className={buttonClass(activeSection === "staff")}
            >
              STAFF
            </button>
            <button
              onClick={() => handleSectionClick("activities")}
              className={buttonClass(activeSection === "activities")}
            >
              ACTIVITIES
            </button>
            <button
              onClick={() => handleSectionClick("news")}
              className={buttonClass(activeSection === "news")}
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

