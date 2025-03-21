function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <h3>Joseph Mueller</h3> 
      <img 
        src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="placeholder" 
        style={{ 
          width: "100%",
          maxWidth: "300px",
          height: "auto",
          margin: "0 auto"
        }}
      />
      <p style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
        "As a veteran Computed Tomography Technologist, I bring a versatile skillset to the diagnostic imaging field, with demonstrated expertise across CT, Interventional Radiology (IR), and Radiography.
         My career encompasses significant clinical and leadership experience within both U.S. Air Force and civilian healthcare environments. 
         I possess a proven ability to manage high-acuity, emergent care scenarios, coupled with a strong focus on quality assurance and optimized equipment management. 
         I am dedicated to fostering collaborative team environments and possess a passion for knowledge dissemination and application training.
         My military background has cultivated a results-driven work ethic, strong discipline, and the capacity to excel in high-pressure environments. 
         In alignment with continuous professional development, I have recently undertaken a comprehensive Full Stack Web Development program, broadening my technical capabilities."
      </p>   
    </section>
  )
}

export default AboutMe
