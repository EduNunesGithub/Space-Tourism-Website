import {
    useEffect,
    useState
} from "react";
import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { DestinationsSlide } from "../DestinationsSlide/DestinationsSlide";
import { DestinationsSlideButton } from "../DestinationsSlide/DestinationsSlideButton";
import { Heading05 } from "../Typography/Typography";

import { Destination } from "@/pages/destinations";

import styles from "./DestinationsContentStyles.module.scss";

type DestinationsContentProps = {
    data: Destination[];
};

export const DestinationsContent = ({
    data
}: DestinationsContentProps) => {
    const [index, setIndex] = useState<number>(0);
    const [swiperSlides, setSwiperSlides] = useState<SwiperClass>({} as SwiperClass);
    const [visibilityControlSwiper, setVisibilityControlSwiper] = useState<boolean>(false);
    const [visibilitySwiper, setVisibilitySwiper] = useState<boolean>(false);

    useEffect(() => {
        if (
            Object.keys(swiperSlides).length === 0 ||
            swiperSlides.destroyed
        ) return;

        swiperSlides.slideTo(index);
    }, [index, swiperSlides]);

    return (
        <div className={styles['destinations-content']}>
            <Heading05
                className={styles['destinations-content__heading']}
                component="h1"
            >
                <span className={styles['destinations-content__heading--strong']}>
                    01
                </span>
                <span className={styles['destinations-content__heading--normal']}>
                    Pick your destination
                </span>
            </Heading05>

            <div className={styles['section-container']}>
                <section className={styles["section"]}>
                    <div
                        className={(
                            styles['control-container'] + " " +
                            (visibilityControlSwiper === true && styles['control-container--show'])
                        )}
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
                            className={styles['control-container-swiper']}
                            grabCursor={true}
                            onAfterInit={(swiper) => setVisibilityControlSwiper(true)}
                            slidesPerView="auto"
                        >
                            {data.map((item, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['control-container-swiper-slide']}
                                        key={jindex}
                                    >
                                        <DestinationsSlideButton
                                            active={index === jindex}
                                            ButtonBaseProps={{
                                                onClick: () => setIndex(jindex)
                                            }}
                                        >
                                            {item.name}
                                        </DestinationsSlideButton>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>

                    <div
                        className={(
                            styles['swiper-container'] + " " +
                            (visibilitySwiper === true && styles['swiper-container--show'])
                        )}
                    >
                        <Swiper
                            allowTouchMove={false}
                            className={styles['swiper-container__swiper']}
                            slidesPerView={1}
                            onAfterInit={(swiper) => setVisibilitySwiper(true)}
                            onSwiper={(swiper) => setSwiperSlides(swiper)}
                        >
                            {data.map((destination, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['swiper-container__swiper-slide']}
                                        key={jindex}
                                    >
                                        <DestinationsSlide data={destination} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    );
};