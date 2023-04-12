import VideosOnly from "../../common/videos/VideosOnly";
import ScrollTop from "../../ui/ScrollTop";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

function VideosLayout() {
  return (
    <>
      <main className="main">
        <VideosOnly />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default VideosLayout;
