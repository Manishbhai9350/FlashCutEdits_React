
import ContactForm from '../components/ContactForm'
import '../work.css'

const WorkDetail = () => {
  return (
    <main>
      <section className="works">
        <h1 className="works-title"></h1>
        <h3 className="works-sub-type"></h3>
        <div className="works-content">
          <h2>Currently No Work Available</h2>
        </div>
      </section>
      <section id="contact-section" className="work-contact-section">
        <ContactForm /> 
      </section>
    </main>
  )
}

export default WorkDetail