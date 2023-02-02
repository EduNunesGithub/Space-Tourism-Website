import { CrewType } from "../../pages/Crew/Crew";
import { Image } from "../Image/Image";
import styles from "./CrewSlideStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type CrewSlideProps = {
    crew: CrewType;
};

export const CrewSlide = ({
    crew = {} as CrewType
}: CrewSlideProps) => {
    if (Object.keys(crew).length === 0) return null;

    return (
        <div className={styles['crew-slide']}>
            <Image
                className={styles['crew-slide__image']}
                src={crew?.images?.webp}
            />

            <article className={styles["article"]}>
                <h2 className={`${typography["heading04"]} ${styles["article__subheading"]}`}>
                    {crew?.role ?? "..."}
                </h2>

                <span className={`${typography["heading03"]} ${styles["article__heading"]}`}>
                    {crew?.name ?? "..."}
                </span>

                <p className={`${typography['body-text']} ${styles["article__text"]}`}>
                    {crew?.bio ?? "..."}
                </p>
            </article>
        </div>
    );
};