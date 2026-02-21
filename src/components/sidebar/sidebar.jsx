import styles from "./sidebar.module.css";

export const Sidebar = ({ correctCounter }) => {
  const levels = [
    100, 200, 500, 1000, 5000, 10000, 25000, 50000, 100000, 500000,
  ];

  return (
    <div className={styles.sidebar}>
      <ul>
        {levels.map((level, index) => (
          <li
            key={levels.length - index - 1}
            className={
              correctCounter === levels.length - index &&
              correctCounter !== 0
                ? styles.sidebarLi
                : ""
            }
          >
            {levels[levels.length - index - 1]} &#8364;
          </li>
        ))}
      </ul>
    </div>
  );
};
