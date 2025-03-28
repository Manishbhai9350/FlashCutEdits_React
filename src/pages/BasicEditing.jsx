import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { WorkData } from "../work_data";
import "../work.css";

const BasicEditing = () => {
  const location = useLocation();
  const { pathname } = location;
  const BuffData = pathname.split("/");
  const Category = BuffData[BuffData.length - 1];
  const VideoData = WorkData["basic_editing"];
  const VideoCat = VideoData.Categories[Category];
  console.log(VideoCat);

  return (
    <main>
      <section className="works">
        <div className="works-title">
          <h1>Basic Editing</h1>
        </div>
        <h3 className="works-sub-type">{VideoCat.title}</h3>
        <div className="works-content">
          {VideoCat?.works ? (
            VideoCat.works.map((work, i) => {
              return (
                <div key={i} playing="false" className="video-item">
                  <div className="video">
                    <iframe
                      style={{ width: "100%", height: "100%" }}
                      src={`https://drive.google.com/file/d/${work.id}/preview`}
                      allow="autoplay"
                    ></iframe>
                  </div>
                  <div className="content">
                    <div className="tag">
                      <p>{work.tag}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Work Available</h1>
          )}
        </div>
      </section>
      <section id="contact-section" className="work-contact-section">
        <ContactForm />
      </section>
    </main>
  );
};

export default BasicEditing;
