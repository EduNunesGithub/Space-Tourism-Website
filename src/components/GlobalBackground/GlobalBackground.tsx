import React from "react";
import styles from "./GlobalBackgroundStyles.module.scss";

type CreateMediaQueries = {
    setSRC: React.Dispatch<React.SetStateAction<string | undefined>>;
    URLsAuxiliar: URLsAuxiliar[];
};

type GlobalBackgroundProps = {
    URLs: URL[];
};

type MediaQueryListener = {
    setSRC: React.Dispatch<React.SetStateAction<string | undefined>>;
    URLsAuxiliar: URLsAuxiliar[];
};

export type URL = {
    minWidth: number;
    src: string | undefined;
};

type URLsAuxiliar = URL & {
    active: boolean;
};

export const GlobalBackground = ({
    URLs = []
}: GlobalBackgroundProps) => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [SRC, setSRC] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        const URLsAuxiliar: URLsAuxiliar[] = URLs.map((url) => {
            return {
                ...url,
                active: false
            };
        });

        createMediaQueries({
            setSRC: setSRC,
            URLsAuxiliar: URLsAuxiliar
        });
    }, []);

    return (
        <div
            aria-hidden={true}
            className={styles['global-background']}
        >
            <img
                alt=""
                className={(
                    styles['global-background__image'] + " " +
                    ((loading === true || SRC === undefined) && styles['global-background__image--hidden'])
                )}
                src={SRC}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

const createMediaQueries = ({
    setSRC,
    URLsAuxiliar
}: CreateMediaQueries) => {
    URLsAuxiliar.sort((a, b) => a.minWidth - b.minWidth);

    URLsAuxiliar.forEach((URL) => {
        const media = window.matchMedia(`(min-width: ${URL.minWidth}px)`);

        if (media.matches) URL.active = true;

        const handler: (this: MediaQueryList, ev: MediaQueryListEvent) => any = (event) => {
            URL.active = event.matches;

            mediaQueryListener({
                setSRC: setSRC,
                URLsAuxiliar: URLsAuxiliar
            });
        };

        media.addEventListener("change", handler);

        return () => media.removeEventListener("change", handler);
    });

    mediaQueryListener({
        setSRC: setSRC,
        URLsAuxiliar: URLsAuxiliar
    });
};

const mediaQueryListener = ({
    setSRC,
    URLsAuxiliar
}: MediaQueryListener) => {
    const reverse = URLsAuxiliar.map(URL => URL).reverse();

    reverse.every((URL) => {
        if (URL.active === true) {
            setSRC(URL.src);

            return false;
        };

        return true;
    });
};