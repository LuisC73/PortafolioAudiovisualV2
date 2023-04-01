import ContactContent from "../../common/contact/contactContent";
import PhotoContent from "../../common/photographs/photoContent";
import SkillContent from "../../common/skills/skillsContent";
import VideosContent from "../../common/videos/videosContent";
import AboutContent from "../About/AboutContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <AboutContent />
        <SkillContent />
        <PhotoContent />
        {/* <VideosContent /> */}
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
