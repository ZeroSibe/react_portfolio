import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/girlLaptop.png")}
          alt="software developer sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Experienced in building user interfaces and ensuring
                accessibility and optimization for the client-side.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in developing the server-side, APIs, and efficient
                backend systems
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/matrixIcon.png")} alt="matrix icon" />
            <div className={styles.aboutItemText}>
              <h3>Cross-matrix collaborator</h3>
              <p>
                Experienced in working across different departments, teams and
                functions, using a matrix organisational structure to deliver
                solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
