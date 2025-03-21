import Project from '../components/Project/Project'

function Portfolio() {
  const projects = [
    {
      title: "README Generator",
      description: "A command-line application that dynamically generates a professional README.md file from user input.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/joemueller11/README_GEN",
      repo: "https://github.com/joemueller11/README_GEN"
    },
    {
      title: "Employee Editor",
      description: "Command line application that allows you to edit and track database for employees.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/joemueller11/Employee_editor.git",
      repo: "https://github.com/joemueller11/Employee_editor.git"
    },
    {
      title: "Vechicle Builder",
      description: "CLI that allows users to build and interact with application written in Typescript.",
      image: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/joemueller11/Employee_editor.git",
      repo: "https://github.com/joemueller11/Employee_editor.git"
    },
    {
      title: "",
      description: "",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
      repo: ""
    },
    {
      title: "",
      description: "",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
      repo: ""
    },
    {
      title: "",
      description: "",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
      repo: ""
    },
    // I dont have any more projects to add, added 3 extra placeholders due to assignment requirements
  ]

  return (
    <section className="portfolio-section">
      <h2>PORTFOLIO</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
