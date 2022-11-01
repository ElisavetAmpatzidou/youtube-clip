import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { loadPlugin } from "@donkeyclip/motorcortex";
import MCVideo from "@kissmybutton/motorcortex-youtube";
const VideoPlugin = loadPlugin(MCVideo);

const clip = new HTMLClip({
  html,
  css,
  selector: "#root",
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

const VideoClip = new VideoPlugin.Clip(
  {
    startFrom: 5000,
    width: 1280,
    height: 720,
    videoId: "RUpDslHSLbU",
    volume: 0.6,
  },
  {
    selector: "#video-container",
    id: "videoClip",
  }
);

const Playback = new VideoPlugin.Playback({
  selector: "!#video",
  duration: 10000,
});


clip.addIncident(VideoClip, 0);
VideoClip.addIncident(Playback, 0);
export default clip;
