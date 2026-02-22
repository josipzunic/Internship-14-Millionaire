import styles from "./sidebar.module.css";
import { levels, safeLevel } from "../../constants/levels";

export const Sidebar = ({ correctCounter }) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {levels.map((level, index) => (
          <li
            key={levels.length - index - 1}
            className={
              correctCounter === levels.length - index && correctCounter !== 0
                ? styles.sidebarLi
                : ""
            }
            style={
              levels[levels.length - index - 1] === safeLevel
                ? { textDecoration: "underline" }
                : {}
            }
          >
            {levels[levels.length - index - 1]} &#8364;
          </li>
        ))}
      </ul>
    </div>
  );
};
