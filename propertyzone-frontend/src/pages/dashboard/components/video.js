
const Video = () => {

  return (
    <div className="ltn__video-popup-area ltn__video-popup-margin---">
      <div
        className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1"
        data-bs-bg={"/assets/img/pictures/video-banner.avif"}
      >
        <a
          className="ltn__video-icon-2 ltn__video-icon-2-border---"
          href="https://www.youtube.com/embed/lpzEd8gpWVM?si=sB-Lsm7ctUQtrhsK"
          data-rel="lightcase:myCollection"
        >
          <i className="fa fa-play" />
        </a>
      </div>
    </div>
  );
};

export default Video;