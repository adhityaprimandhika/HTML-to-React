import Header from "parts/Header";
import Section from "elements/Section";
import HeroImage from "assets/images/hero-image.png";
import Fade from "react-reveal/Fade";
import Clients from "parts/Clients";
import Feature from "parts/Feature";
import FeatureIcon01 from "assets/images/feature-tile-icon-01.svg";
import FeatureIcon02 from "assets/images/feature-tile-icon-02.svg";
import FeatureIcon03 from "assets/images/feature-tile-icon-03.svg";

function Homepage() {
  const features = [
    {
      imgSrc: FeatureIcon01,
      imgAlt: "Feature tile icon 01",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureIcon02,
      imgAlt: "Feature tile icon 02",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureIcon03,
      imgAlt: "Feature tile icon 03",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  return (
    <div className="body-wrap">
      <Fade bottom delay={350}>
        <Header />
      </Fade>
      <main className="site-content">
        <Section isCenterContent className="hero illustration-section-01">
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={700}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1050}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={1400}>
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
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 350}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default Homepage;
