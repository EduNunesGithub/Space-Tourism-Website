import Box from "@mui/material/Box";
import Image from "next/image";

import {
    BodyText,
    Heading03,
    Subheading02
} from "../Typography/Typography";

import { pxToRem } from "@/utils/unitConverter";
import { Technology } from "@/pages/technology";
import { theme } from "@/styles/Theme/default";

import placeholder from "../../../public/JPG/placeholder.jpg";

type TechnologySlideProps = {
    technology: Technology;
};

export const TechnologySlide = ({
    technology = {} as Technology
}: TechnologySlideProps) => {
    if (Object.keys(technology).length === 0) return null;

    return (
        <Box
            sx={{
                display: "flex",
                gap: {
                    "xs": "normal",
                    "lg": pxToRem(55)
                },
                flexDirection: {
                    "xs": "column",
                    "lg": "row-reverse"
                },
                alignItems: {
                    "xs": "normal",
                    "lg": "center"
                },
                width: "100%",
                height: "100%"
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    display: {
                        "xs": "flex",
                        "lg": "none"
                    },
                    marginBottom: {
                        "xs": pxToRem(100),
                        "md": pxToRem(160)
                    },
                    aspectRatio: {
                        "xs": "375 / 170",
                        "md": "768 / 310"
                    },
                    width: "100%"
                }}
            >
                <Image
                    alt=""
                    blurDataURL={placeholder.blurDataURL}
                    fill={true}
                    placeholder="blur"
                    quality={100}
                    sizes={`(max-width: ${theme.breakpoints.values.lg}px) 100vw, (min-width: ${theme.breakpoints.values.lg}px) 0vw`}
                    src={technology?.images?.landscape}
                    style={{
                        objectFit: "cover"
                    }}
                />
            </Box>

            <Box
                sx={{
                    position: "relative",
                    display: {
                        "xs": "none",
                        "lg": "flex"
                    },
                    aspectRatio: "515 / 527",
                    width: "100%",
                    maxWidth: pxToRem(515),
                    height: "fit-content"
                }}
            >
                <Image
                    alt=""
                    blurDataURL={placeholder.blurDataURL}
                    fill={true}
                    placeholder="blur"
                    quality={100}
                    sizes={`(max-width: ${theme.breakpoints.values.lg - 1}px) 0vw, (min-width: ${0}px) 100vw`}
                    src={technology?.images?.portrait}
                    style={{
                        objectFit: "cover"
                    }}
                />
            </Box>

            <Box
                component="article"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    paddingRight: {
                        "xs": pxToRem(24),
                        "md": 0
                    },
                    paddingLeft: {
                        "xs": pxToRem(24),
                        "md": 0
                    },
                    width: "100%",
                    maxWidth: {
                        "xs": pxToRem(375),
                        "md": pxToRem(450),
                        "lg": "none"
                    }
                }}
            >
                <Subheading02
                    component="span"
                    sx={{
                        color: "#D0D6F9",
                        fontSize: {
                            "xs": pxToRem(14),
                            "md": pxToRem(16)
                        },
                        fontWeight: 400,
                        letterSpacing: {
                            "xs": pxToRem(2.36),
                            "md": pxToRem(2.7)
                        },
                        lineHeight: {
                            "xs": pxToRem(16.8),
                            "md": pxToRem(19.2)
                        },
                        textAlign: {
                            "xs": "center",
                            "lg": "left"
                        },
                        marginBottom: {
                            "xs": pxToRem(8),
                            "md": pxToRem(16),
                            "lg": pxToRem(12)
                        }
                    }}
                >
                    THE TERMINOLOGY…
                </Subheading02>

                <Heading03
                    component="h2"
                    sx={{
                        color: "#FFFFFF",
                        fontWeight: 400,
                        textAlign: {
                            "xs": "center",
                            "lg": "left"
                        },
                        textTransform: "uppercase",
                        marginBottom: pxToRem(16)
                    }}
                >
                    {technology?.name ?? "..."}
                </Heading03>

                <BodyText
                    component="p"
                    sx={{
                        color: "#D0D6F9",
                        fontWeight: 400,
                        textAlign: {
                            "xs": "center",
                            "lg": "left"
                        },
                        maxWidth: {
                            "xs": "none",
                            "lg": pxToRem(445)
                        }
                    }}
                >
                    {technology?.description ?? "..."}
                </BodyText>
            </Box>
        </Box>
    );
};