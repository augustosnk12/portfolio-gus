"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter, Github, ExternalLink } from "lucide-react"

interface ThemeSectionsProps {
  isDarkMode: boolean
  projects: Array<{
    name: string
    description: string
    stars: string
    forks: string
    language: string
    url: string
  }>
}

export function ContactSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2
              className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Let's Connect
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6 animate-slide-in-left">
              <Card
                className={`transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail
                      className={`h-6 w-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    />
                    <div>
                      <h3
                        className={`font-semibold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Email
                      </h3>
                      <p className={`transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        your.email@example.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Linkedin
                      className={`h-6 w-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    />
                    <div>
                      <h3
                        className={`font-semibold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        LinkedIn
                      </h3>
                      <p className={`transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        linkedin.com/in/yourprofile
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Twitter
                      className={`h-6 w-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    />
                    <div>
                      <h3
                        className={`font-semibold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        Twitter
                      </h3>
                      <p className={`transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                        @yourusername
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card
              className={`animate-slide-in-right transition-all duration-300 ${
                isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              <CardHeader>
                <CardTitle className={`transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      First Name
                    </label>
                    <Input
                      className={`transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-black border-gray-700 text-white focus:border-white"
                          : "bg-white border-gray-300 text-gray-900 focus:border-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Last Name
                    </label>
                    <Input
                      className={`transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-black border-gray-700 text-white focus:border-white"
                          : "bg-white border-gray-300 text-gray-900 focus:border-gray-500"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    className={`transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-black border-gray-700 text-white focus:border-white"
                        : "bg-white border-gray-300 text-gray-900 focus:border-gray-500"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Message
                  </label>
                  <Textarea
                    className={`min-h-[120px] transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-black border-gray-700 text-white focus:border-white"
                        : "bg-white border-gray-300 text-gray-900 focus:border-gray-500"
                    }`}
                  />
                </div>
                <Button
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection({ isDarkMode, projects }: ThemeSectionsProps) {
  return (
    <section
      id="github"
      className={`min-h-screen flex items-center transition-colors duration-300 ${isDarkMode ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2
              className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              My Projects
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Here are some of my favorite projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className={`transition-all duration-300 hover:scale-105 animate-card-appear group cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(project.url, "_blank")}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Github
                        className={`h-6 w-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      />
                      <CardTitle
                        className={`transition-colors duration-300 ${
                          isDarkMode
                            ? "text-white group-hover:text-blue-400"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {project.name}
                      </CardTitle>
                    </div>
                    <ExternalLink
                      className={`h-4 w-4 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"
                      }`}
                    />
                  </div>
                  <CardDescription
                    className={`transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={`flex items-center justify-between text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <div className="flex items-center space-x-4">
                      <span>⭐ {project.stars}</span>
                      <span>🍴 {project.forks}</span>
                      <span>{project.language}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
