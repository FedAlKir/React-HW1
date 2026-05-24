import { Link } from "react-router";
import styles from "./styles.module.css"

export const WelcomePage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>Welcome!</h1>
                <Link to="/restaurants" className={styles.link}>Start</Link>
            </div>
        </div>
    );
};