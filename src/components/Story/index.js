import Video from "./Video";
import Image from "./Image";

function Story({ video, image, ...props }) {
  if (video) {
    const { title, desc, imgURL, videoURL, fit } = video;
    return (
      <Video
        title={title}
        desc={desc}
        imgURL={imgURL}
        videoURL={videoURL}
        fit={fit}
      />
    );
  }
  if (image) {
    const { title, desc, imgURL, posterURL } = image;
    return (
      <Image title={title} desc={desc} imgURL={imgURL} posterURL={posterURL} />
    );
  }
}

export default Story;
