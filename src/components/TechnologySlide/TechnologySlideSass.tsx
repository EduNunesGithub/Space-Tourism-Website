import Image from "next/image";

import { Technology } from "@/pages/technology";

import styles from "./TechnologySlideStyles.module.scss";

import placeholder from "../../../public/JPG/placeholder.jpg";

type TechnologySlideProps = {
    technology: Technology;
};

export const TechnologySlide = ({
    technology = {} as Technology
}: TechnologySlideProps) => {
    if (Object.keys(technology).length === 0) return null;

    return (
        <div
            className={styles['technology-slide']}
        >
            <div
                className={styles['image-landscape-container']}
            >
                <Image
                    alt=""
                    blurDataURL={placeholder.blurDataURL}
                    className={styles['image-landscape-container__image']}
                    fill={true}
                    placeholder="blur"
                    quality={100}
                    sizes={`(max-width: 1104px) 100vw, (min-width: 1104px) 0vw`}
                    src={technology?.images?.landscape}
                />
            </div>

            <div
                className={styles['image-portrait-container']}
            >
                <Image
                    alt=""
                    blurDataURL={placeholder.blurDataURL}
                    className={styles['image-portrait-container__image']}
                    fill={true}
                    placeholder="blur"
                    quality={100}
                    sizes={`(max-width: 1102px) 0vw, (min-width: 0px) 100vw`}
                    src={technology?.images?.portrait}
                />
            </div>

            <article
                className={styles["article"]}
            >
                <span
                    className={styles["article__subheading"]}
                >
                    THE TERMINOLOGY…
                </span>

                <h2
                    className={styles["article__heading"]}
                >
                    {technology?.name ?? "..."}
                </h2>

                <p
                    className={styles["article__text"]}
                >
                    {technology?.description ?? "..."}
                </p>
            </article>
        </div>
    );
};