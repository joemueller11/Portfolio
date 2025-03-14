import { useState } from 'react'

function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Form field validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (name, value) => {
    // Check for empty fields
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }))
      return false
    }
    
    // Email-specific validation
    if (name === 'email' && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      return false
    }
    
    // Clear errors if validation passes
    setErrors(prev => ({ ...prev, [name]: '' }))
    return true
  }

  // Event handlers
  const handleBlur = (e) => {
    const { name, value } = e.target
    validateField(name, value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Form field components
  const FormField = ({ type, name, label, rows }) => (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={rows || 5}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {errors[name] && <p className="error-message">{errors[name]}</p>}
    </div>
  )

  return (
    <section>
      <h2>Contact Me</h2>
      <form className="contact-form">
        <FormField 
          type="text"
          name="name"
          label="Name"
        />
        
        <FormField 
          type="email"
          name="email"
          label="Email"
        />
        
        <FormField 
          type="textarea"
          name="message"
          label="Message"
        />

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
