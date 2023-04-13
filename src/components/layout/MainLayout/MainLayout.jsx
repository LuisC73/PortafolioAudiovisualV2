import AlliancesContent from "../../common/alliances/alliancesContent";
import ContactContent from "../../common/contact/contactContent";
import PhotoContent from "../../common/photographs/photoContent";
import SkillContent from "../../common/skills/skillsContent";
import VideosContent from "../../common/videos/videosContent";
import ScrollTop from "../../ui/ScrollTop";
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
        <VideosContent />
        <AlliancesContent />
        <ContactContent />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default MainLayout;
