import { useTheme } from '@/components/ThemeProvider';
import styles from '@/styles/ThemeToggle.module.scss';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { toggleTheme , theme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <span onClick={toggleTheme}>
      {theme === 'dark' ? 
      <MdOutlineLightMode className={styles.themeIcon} />
      : 
      <MdOutlineDarkMode className={styles.themeIcon} />
       }
      </span>
    </div>
  );
}

export default ThemeToggle;
