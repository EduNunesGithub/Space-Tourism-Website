import React from "react";
import styles from "./ExploreButtonStyles.module.scss";

type ExploreButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ExploreButton = (props: ExploreButtonProps) => {
    return (
        <button
            {...props}
            className={`${styles['explore-button']} ${props.className}`}
        />
    );
};