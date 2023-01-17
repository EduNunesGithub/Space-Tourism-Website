import React from "react";

import styles from "./TypographyStyles.module.scss";

type GenericProps = {
    component: React.ElementType<any>;
} & React.AllHTMLAttributes<any>;

const Generic = ({
    component = "div",
    ...props
}: GenericProps) => {
    const Element = component;

    return <Element {...props} />;
};

export const BodyText = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['body-text']} ${props.className}`}
        />
    );
};

export const Heading01 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['heading-01']} ${props.className}`}
        />
    );
};

export const Heading02 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['heading-02']} ${props.className}`}
        />
    );
};

export const Heading03 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['heading-03']} ${props.className}`}
        />
    );
};

export const Heading04 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['heading-04']} ${props.className}`}
        />
    );
};

export const Heading05 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['heading-05']} ${props.className}`}
        />
    );
};

export const NavText = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['nav-text']} ${props.className}`}
        />
    );
};

export const Subheading01 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['subheading-01']} ${props.className}`}
        />
    );
};

export const Subheading02 = (props: GenericProps) => {
    return (
        <Generic
            {...props}
            className={`${styles['subheading-02']} ${props.className}`}
        />
    );
};