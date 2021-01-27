import Header from "parts/Header";
import Section from "elements/Section";
import HeroImage from "assets/images/hero-image.png";
import Fade from "react-reveal/Fade";
import Clients from "parts/Clients";

function Homepage() {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Section isCenterContent className="hero illustration-section-01">
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={350}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={700}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={1050}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients />
      </main>
    </div>
  );
}

export default Homepage;
