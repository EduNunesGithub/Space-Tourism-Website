import { useNavigate } from "react-router-dom";
import { ExploreButton } from "../ExploreButton/ExploreButton";
import styles from "./HomeContentStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

export const HomeContent = () => {
    const navigate = useNavigate();

    return (
        <div className={styles['home-content']}>
            <section className={styles["section"]}>
                <article className={styles["article"]}>
                    <span
                        className={`${typography.heading05} ${styles["article__subheading"]}`}
                    >
                        SO, YOU WANT TO TRAVEL TO
                    </span>

                    <h1
                        className={`${typography.heading01} ${styles["article__heading"]}`}
                    >
                        SPACE
                    </h1>

                    <p
                        className={`${typography['body-text']} ${styles.article__text}`}
                    >
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </article>

                <ExploreButton
                    aria-label="Navigate to Destination Page"
                    onClick={() => navigate("/destination")}
                >
                    EXPLORE
                </ExploreButton>
            </section>
        </div>
    );
};