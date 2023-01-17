import Image from "next/image";

import {
    BodyText,
    Heading02,
    Subheading01,
    Subheading02
} from "../Typography/Typography";

import { Destination } from "@/pages/destinations";

import styles from "./DestinationsSlideStyles.module.scss";

type DestinationsSlideProps = {
    data: Destination;
};

export const DestinationsSlide = ({
    data = {} as Destination
}: DestinationsSlideProps) => {
    if (Object.keys(data).length === 0) return null;

    return (
        <div className={styles['destinations-slide']}>
            <div className={styles['destinations-slide__image']}>
                <Image
                    alt={`A picture of the ${data.name}`}
                    fill={true}
                    sizes="(max-width: 571.5px) 45vw, (max-width: 1104px) 40vw, 30vw"
                    src={data.images.webp}
                    style={{
                        objectFit: "cover"
                    }}
                />
            </div>

            <article className={styles.article}>
                <Heading02
                    className={styles.article__heading}
                    component="h2"
                >
                    {data.name ?? "..."}
                </Heading02>

                <BodyText
                    className={styles.article__text}
                    component="p"
                >
                    {data.description ?? "..."}
                </BodyText>

                <span className={styles["article__decoration"]} />

                <div className={styles['article-information-container']}>
                    <div className={styles['article-information-container__information']}>
                        <Subheading02
                            className={styles.information__heading}
                            component="span"
                        >
                            AVG. DISTANCE
                        </Subheading02>

                        <Subheading01
                            className={styles.information__text}
                            component="p"
                        >
                            {data.distance ?? "..."}
                        </Subheading01>
                    </div>

                    <div className={styles['article-information-container__information']}>
                        <Subheading02
                            className={styles.information__heading}
                            component="span"
                        >
                            EST. TRAVEL TIME
                        </Subheading02>

                        <Subheading01
                            className={styles.information__text}
                            component="p"
                        >
                            {data.travel ?? "..."}
                        </Subheading01>
                    </div>
                </div>
            </article>
        </div>
    );
};