function ScrollBottom() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  };
  return (
    <div class="scrollBottom" onClick={scrollToBottom}>
      <span class="scrollBottom__btn">
        <span class="scrollBottom__icon"></span>
      </span>
    </div>
  );
}

export default ScrollBottom;
