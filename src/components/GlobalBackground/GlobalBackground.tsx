import Image, { StaticImageData } from "next/image";
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useState
} from "react";

import styles from "./GlobalBackgroundStyles.module.scss";

import placeholder from "../../../public/WEBP/placeholder.webp";

type CreateMediaQueries = {
    normalized: NormalizedURL[];
    setState: Dispatch<SetStateAction<string | StaticImageData | undefined>>
};

type ChangeURL = {
    normalized: NormalizedURL[];
    setState: Dispatch<SetStateAction<string | StaticImageData | undefined>>
};

type GlobalBackgroundProps = {
    colorPlaceholder?: string | undefined;
    URLs: URL[];
};

type MediaQueryListener = {
    event: MediaQueryListEvent | MediaQueryList;
    index: number;
    normalized: NormalizedURL[];
    setState: Dispatch<SetStateAction<string | StaticImageData | undefined>>
};

type NormalizedURL = {
    active: boolean;
    minWidth: number;
    URL: StaticImageData | string;
};

type NormalizeURLs = {
    URLs: URL[];
};

type URL = {
    minWidth: number;
    URL: StaticImageData | string;
};

export type URLs = URL[];

export const GlobalBackground = ({
    colorPlaceholder,
    URLs = []
}: GlobalBackgroundProps) => {
    const [URL, setURL] = useState<StaticImageData | string | undefined>(undefined);

    const normalized = useMemo(() => {
        return normalizeURLs({
            URLs: URLs
        });
    }, [URLs]);

    useEffect(() => {
        createMediaQueries({
            normalized: normalized,
            setState: setURL
        });
    }, [normalized]);

    return (
        <div className={styles['global-background']}>
            <div className={styles['image-container']}>
                <Image
                    alt=""
                    blurDataURL={placeholder.src}
                    fill={true}
                    quality={100}
                    src={URL === undefined ? placeholder : URL}
                    placeholder="blur"
                    style={{
                        objectFit: "cover"
                    }}
                />
            </div>
        </div>
    );
};

const createMediaQueries = ({
    normalized,
    setState
}: CreateMediaQueries) => {
    const aux: NormalizedURL[] = normalized.slice(0);

    normalized.forEach((URL, index) => {
        const media = window.matchMedia(`(min-width: ${URL.minWidth}px)`);

        mediaQueryListener({
            event: media,
            index: index,
            normalized: aux,
            setState: setState
        });

        media.addEventListener("change", (event) => mediaQueryListener({
            event: event,
            index: index,
            normalized: aux,
            setState: setState
        }));

        return () => media.removeEventListener("change", (event) => mediaQueryListener({
            event: event,
            index: index,
            normalized: aux,
            setState: setState
        }));
    });
};

const mediaQueryListener = ({
    event,
    index,
    normalized,
    setState
}: MediaQueryListener) => {
    normalized[index].active = event.matches;

    changeURL({
        normalized: normalized,
        setState: setState
    });
};

const changeURL = ({
    normalized,
    setState
}: ChangeURL) => {
    normalized.every((item) => {
        if (item.active === true) {
            setState(item.URL !== "" ? item.URL : placeholder);

            return false;
        };

        return true;
    });
};

const normalizeURLs = ({
    URLs
}: NormalizeURLs) => {
    const normalized: NormalizedURL[] = URLs.map((URL) => {
        return {
            ...URL,
            active: false
        };
    });

    normalized.sort((a, b) => b.minWidth - a.minWidth);

    return normalized;
};