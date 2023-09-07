import Video from "./Video";
import Image from "./Image";

function Story({ video, image, ...props }) {
  if (video) {
    return <Video {...video} {...props} />;
  }
  if (image) {
    return <Image {...image} {...props} />;
  }
}

export default Story;
