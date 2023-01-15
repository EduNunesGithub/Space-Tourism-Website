import Box from "@mui/material/Box";
import {
    useEffect,
    useState
} from "react";
import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { Heading05 } from "../Typography/Typography";
import { Technology } from "../../pages/technology";
import { TechnologySlide } from "@/components/TechnologySlide/TechnologySlide";
import { TechnologySlideButton } from "@/components/TechnologySlide/TechnologySlideButton";

import { pxToRem } from "@/utils/unitConverter";

type TechnologyContentProps = {
    data: Technology[];
};

export const TechnologyContent = ({
    data = []
}: TechnologyContentProps) => {
    const [index, setIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperClass>({} as SwiperClass);
    const [swiperControl, setSwiperControl] = useState<SwiperClass>({} as SwiperClass);

    useEffect(() => {
        if (
            Object.keys(swiper).length === 0 ||
            Object.keys(swiperControl).length === 0 ||
            swiper.destroyed ||
            swiperControl.destroyed
        ) return;

        swiper.slideTo(index);
    }, [index, swiper, swiperControl]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                paddingTop: {
                    "xs": 0,
                    "md": pxToRem(40),
                    "lg": pxToRem(36)
                },
                paddingBottom: {
                    "xs": pxToRem(80),
                    "md": pxToRem(100)
                },
                paddingLeft: {
                    "xs": 0,
                    "lg": pxToRem(55)
                }
            }}
        >
            <Heading05
                component="h1"
                sx={{
                    display: "flex",
                    gap: {
                        "xs": pxToRem(16),
                        "lg": pxToRem(24)
                    },
                    alignItems: "center",
                    justifyContent: {
                        "xs": "center",
                        "md": "flex-start"
                    },
                    marginBottom: {
                        "xs": pxToRem(32),
                        "md": pxToRem(60),
                        "lg": pxToRem(26)
                    },
                    marginLeft: {
                        "xs": 0,
                        "lg": "auto"
                    },
                    paddingLeft: {
                        "xs": 0,
                        "md": pxToRem(40),
                        "lg": 0
                    },
                    width: "100%",
                    maxWidth: pxToRem(1275)
                }}
            >
                <Box
                    component="span"
                    sx={{
                        color: "#FFFFFF40",
                        fontWeight: 700
                    }}
                >
                    03
                </Box>

                <Box
                    component="span"
                    sx={{
                        color: "#FFFFFF",
                        fontWeight: 400
                    }}
                >
                    SPACE LAUNCH 101
                </Box>
            </Heading05>

            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "center"
                }}
            >
                <Box
                    component="section"
                    sx={{
                        display: "flex",
                        gap: {
                            "xs": "normal",
                            "lg": pxToRem(55)
                        },
                        flexDirection: {
                            "xs": "column",
                            "lg": "row"
                        },
                        alignItems: {
                            "xs": "normal",
                            "lg": "center"
                        },
                        marginLeft: {
                            "xs": 0,
                            "lg": "auto"
                        },
                        width: "100%",
                        maxWidth: pxToRem(1275)
                    }}
                >
                    <Box
                        sx={{
                            position: {
                                "xs": "absolute",
                                "lg": "relative"
                            },
                            flexShrink: 0,
                            zIndex: 10,
                            width: {
                                "xs": "100%",
                                "lg": "fit-content"
                            },
                            height: {
                                "xs": "auto",
                                "lg": "100vh"
                            },
                            maxHeight: {
                                "xs": "none",
                                "lg": pxToRem(376)
                            }
                        }}
                    >
                        <Box
                            sx={{
                                display: {
                                    "xs": "flex",
                                    "lg": "none"
                                },
                                marginBottom: {
                                    "xs": pxToRem(34),
                                    "md": pxToRem(56)
                                },
                                aspectRatio: {
                                    "xs": "375 / 170",
                                    "md": "768 / 310"
                                },
                                width: "100%"
                            }}
                        />

                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                ".swiper": {
                                    paddingRight: {
                                        "xs": pxToRem(24),
                                        "md": pxToRem(40),
                                        "lg": 0
                                    },
                                    paddingLeft: {
                                        "xs": pxToRem(24),
                                        "md": pxToRem(40),
                                        "lg": 0
                                    },
                                    width: "100%",
                                    height: "100%"
                                },
                                ".swiper-slide": {
                                    width: "fit-content",
                                    height: "auto"
                                }
                            }}
                        >
                            <Swiper
                                breakpoints={{
                                    0: {
                                        direction: "horizontal",
                                        spaceBetween: 16
                                    },
                                    1104: {
                                        direction: "vertical",
                                        spaceBetween: 32
                                    }
                                }}
                                centerInsufficientSlides={true}
                                className="swiper"
                                grabCursor={true}
                                onSwiper={(swiper) => setSwiperControl(swiper)}
                                preventClicks={true}
                                slidesPerView="auto"
                            >
                                {data.map((technology, jindex) => {
                                    return (
                                        <SwiperSlide
                                            className="swiper-slide"
                                            key={jindex}
                                        >
                                            <TechnologySlideButton
                                                active={index === jindex}
                                                ButtonBaseProps={{
                                                    onClick: () => setIndex(jindex)
                                                }}
                                                name={`${jindex + 1}`}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            marginLeft: {
                                "xs": 0,
                                "lg": "auto"
                            },
                            width: "100%",
                            maxWidth: pxToRem(1115),
                            ".swiper": {
                                width: "100%"
                            },
                            ".swiper-slide": {
                                width: "fit-content",
                                height: "auto"
                            }
                        }}
                    >
                        <Swiper
                            allowTouchMove={false}
                            className="swiper"
                            onSwiper={(swiper) => setSwiper(swiper)}
                            preventClicks={true}
                            slidesPerView={1}
                            spaceBetween={32}
                        >
                            {data.map((technology, jindex) => {
                                return (
                                    <SwiperSlide
                                        className="swiper-slide"
                                        key={jindex}
                                    >
                                        <TechnologySlide
                                            technology={technology}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};