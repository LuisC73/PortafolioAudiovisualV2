function ScrollBottom() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  };
  return (
    <div className="scrollBottom" onClick={scrollToBottom}>
      <span className="scrollBottom__btn">
        <span className="scrollBottom__icon"></span>
      </span>
    </div>
  );
}

export default ScrollBottom;
