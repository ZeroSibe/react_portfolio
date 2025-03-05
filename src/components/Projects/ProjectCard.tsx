import styles from "./ProjectCard.module.css";
import { getImageUrl, getSkillImage } from "../../utils";

interface Project {
  imageSrc: string;
  title: string;
  description: string;
  skills: string[];
  demo?: string;
  video?: string;
  source: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const { imageSrc, title, description, skills, demo, video, source } = project;
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          const skillImage = getSkillImage(skill);
          return (
            <li key={id} className={styles.skill}>
              {skillImage && (
                <img
                  src={getImageUrl(skillImage)}
                  alt={`${skill} Icon`}
                  className={styles.skillIcon}
                />
              )}
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={demo}
            className={styles.link}
          >
            <img src={getImageUrl("icons/website.png")} alt="Webiste Icon" />
            Live Demo
          </a>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={video}
            className={styles.link}
          >
            <img src={getImageUrl("icons/play.png")} alt="play Icon" />
            Watch Demo
          </a>
        )}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={source}
          className={styles.link}
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          Source Code
        </a>
      </div>
    </div>
  );
};
