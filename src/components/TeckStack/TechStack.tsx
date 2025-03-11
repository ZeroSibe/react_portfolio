import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./TechStack.module.css";
import { useState } from "react";

export const TechStack = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [error, setError] = useState<Boolean>(false);
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
      <div className={styles.btnContainer}>
        <button
          onClick={() => setIsBtnClicked(!isBtnClicked)}
          aria-expanded={isBtnClicked}
        >
          {isBtnClicked ? "Hide " : "View "}Qualifications
        </button>
      </div>
      {isBtnClicked ? (
        <div className={styles.file_container}>
          {error ? (
            <div className={styles.errMsg}>Failed to Load PDF </div>
          ) : (
            <iframe
              src={getImageUrl("qualifications/tami_cert.pdf")}
              title="PDF Viewer"
              className={styles.pdf_file}
            />
          )}
        </div>
      ) : null}
    </section>
  );
};
