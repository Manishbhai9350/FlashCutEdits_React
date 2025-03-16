import "../work.css";
import ContactForm from "../components/ContactForm";
import { useLocation, useNavigation } from "react-router-dom";
import { WorkData } from "../work_data";

const Thumbnail = () => {
  console.clear();
  // const Navigator = useNavigation()
  const location = useLocation();
  const BuffData = location.pathname.split("/");
  const Category = BuffData[BuffData.length - 1];
  const ThumbnailData = WorkData["graphic_designing"].Categories[Category];
  return (
    <main>
      <section className="works">
        <div className="works-title">
          <h2 style={{textAlign:'center'}}>{ThumbnailData.title}</h2>
        </div>
        <div className="works-content">
          {ThumbnailData?.works ? (
            ThumbnailData.works.map((work, index) => {
              return (
                <div key={index} className="thumbnail-item">
                  <div className="thumbnail">
                    <img src={work.img} alt="" />
                  </div>
                  <div className="content">
                    <div className="tag">
                      <p>{work.tag}</p>
                    </div>
                  </div>
                </div>
              );
            }) ) : (
                <h1>No Work Available</h1>
            )
        }
        </div>
      </section>
      <section id="contact-section" className="work-contact-section">
        <ContactForm />
      </section>
    </main>
  );
};

export default Thumbnail;
