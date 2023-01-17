import Typography, { TypographyProps as TypographyPropsMUI } from "@mui/material/Typography";

import { pxToRem } from "../../utils/unitConverter";

import styles from "./TypographyStyles.module.scss";

interface TypographyProps extends TypographyPropsMUI {
    component?: React.ElementType<any>;
};

export const BodyText = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['body-text']} ${props.className}`}
            component={props.component === undefined ? "p" : props.component}
        />
    );
};

export const Heading01 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['heading-01']} ${props.className}`}
            component={props.component === undefined ? "h1" : props.component}
        />
    );
};

export const Heading02 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['heading-02']} ${props.className}`}
            component={props.component === undefined ? "h2" : props.component}
        />
    );
};

export const Heading03 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['heading-03']} ${props.className}`}
            component={props.component === undefined ? "h3" : props.component}
        />
    );
};

export const Heading04 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['heading-04']} ${props.className}`}
            component={props.component === undefined ? "h4" : props.component}
        />
    );
};

export const Heading05 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['heading-05']} ${props.className}`}
            component={props.component === undefined ? "h5" : props.component}
        />
    );
};

export const NavText = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['nav-text']} ${props.className}`}
            component={props.component === undefined ? "span" : props.component}
        />
    );
};

export const Subheading01 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['subheading-01']} ${props.className}`}
            component={props.component === undefined ? "span" : props.component}
        />
    );
};

export const Subheading02 = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            className={`${styles['subheading-02']} ${props.className}`}
            component={props.component === undefined ? "span" : props.component}
        />
    );
};