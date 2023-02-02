import { Image } from "../Image/Image";
import { TechnologyType } from "../../pages/Technology/Technology";
import React from "react";
import styles from "./TechnologySlideStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type TechnologySlideProps = {
    technology: TechnologyType;
};

export const TechnologySlide = ({
    technology = {} as TechnologyType
}: TechnologySlideProps) => {
    const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined);

    React.useEffect(() => {
        const media = window.matchMedia(`(min-width: 1104px)`);

        const listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any = (media) => {
            if (media.matches) setIsDesktop(true);
            else setIsDesktop(false);
        };

        if (media.matches) setIsDesktop(true);
        else setIsDesktop(false);

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, []);

    if (Object.keys(technology).length === 0) return null;

    return (
        <div className={styles['technology-slide']}>
            <Image
                alt={`Photo of the ${technology.name}`}
                className={styles['technology-slide__image']}
                src={isDesktop === true ? technology.images.portrait : technology.images.landscape}
            />

            <article className={styles["article"]}>
                <span className={styles["article__subheading"]}>
                    THE TERMINOLOGY...
                </span>

                <h2 className={`${typography["heading03"]} ${styles["article__heading"]}`}>
                    {technology?.name ?? "..."}
                </h2>

                <p className={`${typography['body-text']} ${styles["article__text"]}`}>
                    {technology?.description ?? "..."}
                </p>
            </article>
        </div>
    );
};