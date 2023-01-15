import Typography, { TypographyProps as TypographyPropsMUI } from "@mui/material/Typography";

import { pxToRem } from "../../utils/unitConverter";

interface TypographyProps extends TypographyPropsMUI {
    component?: React.ElementType<any>;
};

export const BodyText = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "p" : props.component}
            sx={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: {
                    "xs": pxToRem(15),
                    "md": pxToRem(16),
                    "lg": pxToRem(18)
                },
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: {
                    "xs": pxToRem(25),
                    "md": pxToRem(28),
                    "lg": pxToRem(32)
                },
                ...props.sx
            }}
        />
    );
};

export const Heading01 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "h1" : props.component}
            sx={{
                fontFamily: "'Bellefair', sans-serif",
                fontSize: {
                    "xs": pxToRem(80),
                    "md": pxToRem(150)
                },
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: {
                    "xs": pxToRem(100),
                    "md": pxToRem(150),
                    "lg": pxToRem(172)
                },
                ...props.sx
            }}
        />
    );
};

export const Heading02 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "h2" : props.component}
            sx={{
                fontFamily: "'Bellefair', sans-serif",
                fontSize: {
                    "xs": pxToRem(56),
                    "md": pxToRem(80),
                    "lg": pxToRem(100)
                },
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: {
                    "xs": pxToRem(64.18),
                    "md": pxToRem(91.68),
                    "lg": pxToRem(114.6)
                },
                ...props.sx
            }}
        />
    );
};

export const Heading03 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "h3" : props.component}
            sx={{
                fontFamily: "'Bellefair', sans-serif",
                fontSize: {
                    "xs": pxToRem(24),
                    "md": pxToRem(40),
                    "lg": pxToRem(56)
                },
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: {
                    "xs": pxToRem(27.5),
                    "md": pxToRem(45.84),
                    "lg": pxToRem(64.18)
                },
                ...props.sx
            }}
        />
    );
};

export const Heading04 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "h4" : props.component}
            sx={{
                fontFamily: "'Bellefair', sans-serif",
                fontSize: {
                    "xs": pxToRem(16),
                    "md": pxToRem(24),
                    "lg": pxToRem(32)
                },
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: {
                    "xs": pxToRem(18.34),
                    "md": pxToRem(27.5),
                    "lg": pxToRem(36.68)
                },
                ...props.sx
            }}
        />
    );
};

export const Heading05 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "h5" : props.component}
            sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: {
                    "xs": pxToRem(16),
                    "md": pxToRem(20),
                    "lg": pxToRem(28)
                },
                fontWeight: 400,
                letterSpacing: {
                    "xs": pxToRem(2.7),
                    "md": pxToRem(3.38),
                    "lg": pxToRem(4.72)
                },
                lineHeight: {
                    "xs": pxToRem(19.2),
                    "md": pxToRem(24),
                    "lg": pxToRem(33.6)
                },
                ...props.sx
            }}
        />
    );
};

export const NavText = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "span" : props.component}
            sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: {
                    "xs": pxToRem(16),
                    "md": pxToRem(14),
                    "lg": pxToRem(16)
                },
                fontWeight: 400,
                letterSpacing: {
                    "xs": pxToRem(2.7),
                    "md": pxToRem(2.36),
                    "lg": pxToRem(2.7)
                },
                lineHeight: {
                    "xs": pxToRem(19.2),
                    "md": pxToRem(16.8),
                    "lg": pxToRem(19.2)
                },
                ...props.sx
            }}
        />
    );
};

export const Subheading01 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "span" : props.component}
            sx={{
                fontFamily: "'Bellefair', sans-serif",
                fontSize: pxToRem(28),
                fontWeight: 400,
                letterSpacing: "normal",
                lineHeight: pxToRem(32.10),
                ...props.sx
            }}
        />
    );
};

export const Subheading02 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            component={props.component === undefined ? "span" : props.component}
            sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: pxToRem(14),
                fontWeight: 400,
                letterSpacing: pxToRem(2.36),
                lineHeight: pxToRem(16.8),
                ...props.sx
            }}
        />
    );
};