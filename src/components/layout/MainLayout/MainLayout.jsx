import ContactContent from "../../common/contact/contactContent";
import PhotoContent from "../../common/photographs/photoContent";
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
        <PhotoContent />
        {/* <VideosContent /> */}
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
