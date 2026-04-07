import { FlowerOfLifeLogo } from "../ui/FlowerOfLifeLogo";
import { ReWordsBanner } from "./ReWordsBanner";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero__bg" aria-hidden>
        <FlowerOfLifeLogo variant="hero" className="hero__watermark" />
      </div>
      <div className="hero__content container">
        <h1 className="hero__title">
          <span className="hero__title-main">Respire</span>
          <span className="hero__title-sub">Breathwork</span>
        </h1>
        <ReWordsBanner />
      </div>
    </div>
  );
}
