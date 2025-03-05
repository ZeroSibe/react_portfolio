import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./TechStack.module.css";

export const TechStack = () => {
  return (
    <section className={styles.container} id="tech-stack">
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.slice(0, 10).map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImgContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
