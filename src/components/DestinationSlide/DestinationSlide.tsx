import { DestinationType } from "../../pages/Destination/Destination";
import { Image } from "../Image/Image";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import React from "react";
import styles from "./DestinationSlideStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type DestinationSlideProps = {
    destination: DestinationType;
    destinations: DestinationType[];
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const DestinationSlide = ({
    destination = {} as DestinationType,
    destinations = [],
    index,
    setIndex
}: DestinationSlideProps) => {
    const [showSwiper, setShowSwiper] = React.useState<boolean>(false);

    if (Object.keys(destination).length === 0) return null;

    return (
        <div className={styles['destination-slide']}>
            <Image
                className={styles['destination-slide__image']}
                placeholder={undefined}
                src={destination?.images?.webp}
            />

            <div className={styles['information-container']}>
                <div
                    className={
                        styles['swiper-container'] + " " +
                        (showSwiper === true && styles['swiper-container--show'])
                    }
                >
                    <Swiper
                        breakpoints={{
                            0: {
                                centerInsufficientSlides: true,
                                spaceBetween: 26
                            },
                            571.5: {
                                centerInsufficientSlides: true,
                                spaceBetween: 36
                            },
                            1104: {
                                centerInsufficientSlides: false,
                                spaceBetween: 36
                            }
                        }}
                        className={styles["swiper"]}
                        onAfterInit={() => setShowSwiper(true)}
                        slidesPerView="auto"
                    >
                        {destinations.map((item, jindex) => {
                            return (
                                <SwiperSlide
                                    className={styles['swiper-slide']}
                                    key={jindex}
                                >
                                    <div className={styles['slide-button-container']}>
                                        <button
                                            className={
                                                styles['slide-button-container__button'] + " " +
                                                (item.name === destination.name && styles['slide-button-container__button--active'])
                                            }
                                            onClick={() => setIndex(jindex)}
                                        >
                                            {item.name}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <article className={styles["article"]}>
                    <h2
                        className={`${typography["heading02"]} ${styles["article__heading"]}`}
                    >
                        {destination?.name ?? "..."}
                    </h2>

                    <p
                        className={`${typography['body-text']} ${styles["article__text"]}`}
                    >
                        {destination?.description ?? "..."}
                    </p>

                    <span className={styles["article__decoration"]}></span>

                    <div className={styles['data-container']}>
                        <div className={styles["data"]}>
                            <span className={`${typography["subheading02"]} ${styles["data__subheading"]}`}>
                                AVG. DISTANCE
                            </span>
                            <span className={`${typography["subheading01"]} ${styles["data__information"]}`}>
                                {destination.distance}
                            </span>
                        </div>
                        <div className={styles["data"]}>
                            <span className={`${typography["subheading02"]} ${styles["data__subheading"]}`}>
                                EST. TRAVEL TIME
                            </span>
                            <span className={`${typography["subheading01"]} ${styles["data__information"]}`}>
                                {destination.travel}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};