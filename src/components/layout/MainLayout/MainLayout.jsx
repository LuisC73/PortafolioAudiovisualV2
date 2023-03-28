import PhotoContent from "../../common/photographs/photoContent";
import AboutContent from "../About/AboutContent";
import Header from "../Header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <AboutContent />
        <PhotoContent />
      </main>
    </>
  );
}

export default MainLayout;
