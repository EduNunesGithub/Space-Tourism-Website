import React from "react";
import styles from "./ImageStyles.module.scss";

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    placeholder?: string;
};

export const Image = (props: ImageProps) => {
    const [loading, setLoading] = React.useState<boolean>(true);

    return (
        <div
            className={
                `${props.className} ${styles['image-container']}` + " " +
                (props.placeholder === undefined && styles['image-container--no-blur'])
            }
            style={{
                backgroundImage: loading === true ? `url(${props.placeholder})` : "none",
            }}
        >
            <img
                {...props}
                className={`${styles['image-container__image']} ${props.className} ${loading === true && styles['image-container__image--hidden']}`}
                onLoad={(event) => {
                    setLoading(false);

                    if (props.onLoad !== undefined) props.onLoad(event);
                }}
            />
        </div>
    );
};