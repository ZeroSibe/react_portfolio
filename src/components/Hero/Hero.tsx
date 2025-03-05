import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tami</h1>
        <p className={styles.description}>
          I'm a Junior full stack Software developer with experience in React
          and NodeJS. Reach out if you'd like to know more about me!
        </p>
        <div className={styles.links_container}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/London"
          >
            🏠 London, UK.
          </a>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="Linkedin Icon"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tami-k-8a41ba2b2/"
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github Icon"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ZeroSibe"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={getImageUrl("hero/girl.png")}
        alt="animated avatar of a junior software developer"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
