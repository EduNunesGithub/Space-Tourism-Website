import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useState
} from "react";

import placeholder from "../../../public/JPG/placeholder.jpg";

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
        <Box
            sx={{
                backgroundColor: colorPlaceholder ?? "#FFFFFF",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1000000,
                width: "100vw",
                height: "100vh"
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}
            >
                <Image
                    alt=""
                    blurDataURL={placeholder.blurDataURL}
                    fill={true}
                    quality={100}
                    src={URL === undefined ? placeholder : URL}
                    placeholder="blur"
                    style={{
                        objectFit: "cover"
                    }}
                />
            </Box>
        </Box>
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