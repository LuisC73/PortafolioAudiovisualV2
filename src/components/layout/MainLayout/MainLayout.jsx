import AboutContent from "../About/AboutContent";
import Header from "../Header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <AboutContent />
      </main>
    </>
  );
}

export default MainLayout;
