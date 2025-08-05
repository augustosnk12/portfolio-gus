"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Mail,
  Briefcase,
  User,
  ExternalLink,
  Linkedin,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useGitHub } from "../hooks/useGitHub";
import { LanguageSelector } from "../components/LanguageSelector";
import { type Locale, defaultLocale } from "../lib/i18n";
import { getTranslation } from "../lib/translations";

export default function PersonalPortfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);

  const t = getTranslation(currentLocale);
  const {
    repos,
    loading: reposLoading,
    error: reposError,
  } = useGitHub("augustosnk12");

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }

    // Load locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && ["en", "pt", "es", "it"].includes(savedLocale)) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and update document class
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // Save locale to localStorage
    localStorage.setItem("locale", currentLocale);
  }, [currentLocale]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLocaleChange = (locale: Locale) => {
    setCurrentLocale(locale);
  };

  const allTechnologies = [
    {
      name: "React",
      description: t.technologyDescriptions.React,
      icon: "⚛️",
      docUrl: "https://react.dev/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Node.js",
      description: t.technologyDescriptions.Nodejs,
      icon: "🟢",
      docUrl: "https://nodejs.org/docs/",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TypeScript",
      description: t.technologyDescriptions.TypeScript,
      icon: "🔷",
      docUrl: "https://www.typescriptlang.org/docs/",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Next.js",
      description: t.technologyDescriptions.Nextjs,
      icon: "▲",
      docUrl: "https://nextjs.org/docs",
      color: "from-gray-700 to-gray-500",
    },
    {
      name: "NestJS",
      description: t.technologyDescriptions.NestJS,
      icon: "🐦",
      docUrl: "https://nestjs.com/docs",
      color: "from-gray-700 to-gray-500",
    },
    {
      name: "React Native",
      description: t.technologyDescriptions.ReactNative,
      icon: "📱",
      docUrl: "https://reactnative.dev/docs/getting-started",
      color: "from-gray-700 to-gray-500",
    },
    {
      name: "Flutter",
      description: t.technologyDescriptions.Flutter,
      icon: "📱",
      docUrl: "https://flutter.dev/docs",
      color: "from-gray-700 to-gray-500",
    },
    {
      name: "Python",
      description: t.technologyDescriptions.Python,
      icon: "🐍",
      docUrl: "https://docs.python.org/3/",
      color: "from-yellow-500 to-blue-500",
    },
    {
      name: "Docker",
      description: t.technologyDescriptions.Docker,
      icon: "🐳",
      docUrl: "https://docs.docker.com/",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "AWS",
      description: t.technologyDescriptions.AWS,
      icon: "☁️",
      docUrl: "https://docs.aws.amazon.com/",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "SQL",
      description: t.technologyDescriptions.SQL,
      icon: "🗃️",
      docUrl: "https://www.w3schools.com/sql/",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "MongoDB",
      description: t.technologyDescriptions.MongoDB,
      icon: "🍃",
      docUrl: "https://docs.mongodb.com/",
      color: "from-green-600 to-green-400",
    },
    {
      name: "PostgreSQL",
      description: t.technologyDescriptions.PostgreSQL,
      icon: "🐘",
      docUrl: "https://www.postgresql.org/docs/",
      color: "from-blue-700 to-indigo-600",
    },
    {
      name: "Firebase",
      description: t.technologyDescriptions.Firebase,
      icon: "🔥",
      docUrl: "https://firebase.google.com/docs",
      color: "from-red-500 to-red-700",
    },
    {
      name: "GitHub",
      description: t.technologyDescriptions.GitHub,
      icon: "🐙",
      docUrl: "https://docs.github.com/",
      color: "from-gray-700 to-gray-500",
    },
  ];

  const displayedTechnologies = showAllTechnologies
    ? allTechnologies
    : allTechnologies.slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "jobs", "contact", "github"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: t.nav.about, icon: User },
    { id: "jobs", label: t.nav.experience, icon: Briefcase },
    { id: "contact", label: t.nav.contact, icon: Mail },
    { id: "github", label: t.nav.projects, icon: Github },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`border-b ${
          isDarkMode
            ? "border-gray-800 bg-black/95"
            : "border-gray-200 bg-white/95"
        } backdrop-blur-sm fixed top-0 w-full z-50 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <h1
                className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } transition-colors duration-300`}
              >
                Gus
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <div className="flex space-x-6 lg:space-x-10">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-2 px-3 lg:px-4 py-2 lg:py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? isDarkMode
                            ? "bg-white text-black transform scale-105"
                            : "bg-gray-900 text-white transform scale-105"
                          : isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden lg:inline">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <LanguageSelector
                currentLocale={currentLocale}
                onLocaleChange={handleLocaleChange}
                isDarkMode={isDarkMode}
              />

              <button
                onClick={toggleTheme}
                className={`p-2 lg:p-3 rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSelector
                currentLocale={currentLocale}
                onLocaleChange={handleLocaleChange}
                isDarkMode={isDarkMode}
              />

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden border-t ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-3 w-full px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? isDarkMode
                            ? "bg-white text-black"
                            : "bg-gray-900 text-white"
                          : isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Section */}
      <AboutSection
        isDarkMode={isDarkMode}
        displayedTechnologies={displayedTechnologies}
        showAllTechnologies={showAllTechnologies}
        setShowAllTechnologies={setShowAllTechnologies}
        allTechnologies={allTechnologies}
        t={t}
      />

      {/* Experience Section */}
      <ExperienceSection isDarkMode={isDarkMode} t={t} />

      {/* Contact Section */}
      <ContactSection
        isDarkMode={isDarkMode}
        t={t}
        currentLocale={currentLocale}
      />

      {/* Projects Section */}
      <ProjectsSection
        isDarkMode={isDarkMode}
        repos={repos}
        loading={reposLoading}
        error={reposError}
        t={t}
      />

      {/* Footer */}
      <footer
        className={`border-t transition-colors duration-300 py-8 sm:py-12 ${
          isDarkMode ? "border-gray-800 bg-black" : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className={`text-sm sm:text-base transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              &copy; {new Date().getFullYear()} Gustavo. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AboutSection({
  isDarkMode,
  displayedTechnologies,
  showAllTechnologies,
  setShowAllTechnologies,
  allTechnologies,
  t,
}: any) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="space-y-12 sm:space-y-16">
          <div
            ref={heroRef}
            className={`text-center space-y-6 sm:space-y-8 transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              } leading-tight px-4 sm:px-0`}
            >
              {t.hero.title}
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto transition-colors duration-300 leading-relaxed px-4 sm:px-0 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.hero.subtitle}
            </p>
          </div>

          <div
            ref={techRef}
            className={`transition-all duration-1000 delay-300 ${
              techVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {t.about.title}
              </h2>
              <p
                className={`text-base sm:text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.about.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {displayedTechnologies.map((tech: any, index: number) => (
                <TechCard
                  key={tech.name}
                  tech={tech}
                  index={index}
                  isDarkMode={isDarkMode}
                  isVisible={techVisible}
                />
              ))}
            </div>

            {allTechnologies.length > 6 && (
              <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
                <Button
                  onClick={() => setShowAllTechnologies(!showAllTechnologies)}
                  className={`transition-all duration-300 hover:scale-105 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 ${
                    isDarkMode
                      ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
                  }`}
                >
                  {showAllTechnologies ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      {t.about.showLess}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">
                        {t.about.showMore} ({allTechnologies.length - 6} more)
                      </span>
                      <span className="sm:hidden">
                        {t.about.showMore} ({allTechnologies.length - 6})
                      </span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, index, isDarkMode, isVisible }: any) {
  return (
    <Card
      className={`transition-all duration-700 hover:scale-105 group cursor-pointer ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 hover:border-gray-600"
          : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={() => window.open(tech.docUrl, "_blank")}
    >
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-2xl sm:text-3xl">{tech.icon}</span>
            <CardTitle
              className={`text-lg sm:text-xl transition-colors duration-300 ${
                isDarkMode
                  ? "text-white group-hover:text-blue-400"
                  : "text-gray-900 group-hover:text-blue-600"
              }`}
            >
              {tech.name}
            </CardTitle>
          </div>
          <ExternalLink
            className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-400 group-hover:text-white"
                : "text-gray-500 group-hover:text-gray-900"
            }`}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p
          className={`text-sm sm:text-base transition-colors duration-300 leading-relaxed ${
            isDarkMode
              ? "text-gray-300 group-hover:text-gray-200"
              : "text-gray-600 group-hover:text-gray-700"
          }`}
        >
          {tech.description}
        </p>
        <div
          className={`mt-3 sm:mt-4 h-1 bg-gradient-to-r ${tech.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
        ></div>
      </CardContent>
    </Card>
  );
}

function ExperienceSection({ isDarkMode, t }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="jobs"
      className={`min-h-screen flex items-center py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`space-y-12 sm:space-y-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 sm:space-y-6 px-4 sm:px-0">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.experience.title}
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto transition-colors duration-300 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.experience.subtitle}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <ExperienceCard
              isDarkMode={isDarkMode}
              job={t.experience.jobs.senior}
              skills={["Next.js", "TypeScript", "Tailwind CSS"]}
              index={0}
              isVisible={isVisible}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ isDarkMode, job, skills, index, isVisible }: any) {
  return (
    <Card
      className={`transition-all duration-700 hover:scale-[1.02] ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 hover:border-gray-600"
          : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
      } ${
        isVisible
          ? "opacity-100 translate-x-0"
          : index % 2 === 0
          ? "opacity-0 -translate-x-10"
          : "opacity-0 translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <CardHeader className="pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
          <div className="flex-1">
            <CardTitle
              className={`text-xl sm:text-2xl mb-1 sm:mb-2 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {job.title}
            </CardTitle>
            <CardDescription
              className={`text-base sm:text-lg transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {job.period}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p
          className={`mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {job.description}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill: string) => (
            <span
              key={skill}
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectsSection({ isDarkMode, repos, loading, error, t }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="github"
      className={`min-h-screen flex items-center py-12 sm:py-16 lg:py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`space-y-12 sm:space-y-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 sm:space-y-6 px-4 sm:px-0">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.projects.title}
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto transition-colors duration-300 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.projects.subtitle}
            </p>
          </div>

          {loading && (
            <div className="text-center">
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.projects.loading}
              </p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p
                className={`text-lg ${
                  isDarkMode ? "text-red-400" : "text-red-600"
                }`}
              >
                {t.projects.error}
              </p>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {repos.map((repo: any, index: number) => (
                <ProjectCard
                  key={repo.id}
                  repo={repo}
                  index={index}
                  isDarkMode={isDarkMode}
                  isVisible={isVisible}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ repo, index, isDarkMode, isVisible }: any) {
  return (
    <Card
      className={`transition-all duration-700 hover:scale-105 group cursor-pointer ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 hover:border-gray-600"
          : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={() => window.open(repo.html_url, "_blank")}
    >
      <CardHeader className="pb-4 sm:pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Github
              className={`h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            />
            <CardTitle
              className={`text-lg sm:text-xl transition-colors duration-300 ${
                isDarkMode
                  ? "text-white group-hover:text-blue-400"
                  : "text-gray-900 group-hover:text-blue-600"
              }`}
            >
              {repo.name}
            </CardTitle>
          </div>
          <ExternalLink
            className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-400 group-hover:text-white"
                : "text-gray-500 group-hover:text-gray-900"
            }`}
          />
        </div>
        <CardDescription
          className={`text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {repo.description || "No description available"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div
          className={`flex items-center justify-between text-sm sm:text-base transition-colors duration-300 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <div className="flex items-center space-x-3 sm:space-x-6">
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
            {repo.language && (
              <span className="hidden sm:inline">{repo.language}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ContactCard({ isDarkMode, icon, title, content, link }: any) {
  return (
    <Card
      className={`transition-all duration-300 hover:scale-105 ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 hover:border-gray-600"
          : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
      }`}
    >
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div
            className={`transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {icon}
          </div>
          <div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-1 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h3>
            <p
              onClick={() => window.open(link, "_blank")}
              className={`text-base sm:text-lg transition-colors duration-300 break-all sm:break-normal cursor-pointer ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ContactSection({ isDarkMode, t, currentLocale }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-12 sm:py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`space-y-12 sm:space-y-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 sm:space-y-6 px-4 sm:px-0">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t.contact.title}
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto transition-colors duration-300 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.contact.subtitle}
            </p>
          </div>

          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <ContactCard
              isDarkMode={isDarkMode}
              icon={<Mail className="h-6 w-6 sm:h-8 sm:w-8" />}
              title={t.contact.info.email}
              content="augustosnk12@gmail.com"
              link="mailto:augustosnk12@gmail.com"
            />
            <ContactCard
              isDarkMode={isDarkMode}
              icon={<Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />}
              title={t.contact.info.linkedin}
              content="linkedin.com/in/augusto-1908"
              link="https://linkedin.com/in/augusto-1908"
            />
            <ContactCard
              isDarkMode={isDarkMode}
              icon={<Github className="h-6 w-6 sm:h-8 sm:w-8" />}
              title={t.contact.info.github}
              content="github.com/augustosnk12"
              link="https://github.com/augustosnk12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
