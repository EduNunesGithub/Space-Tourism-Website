import Drawer from "@mui/material/Drawer";
import { Image } from "../Image/Image";
import { NavLink } from "../NavLink/NavLink";
import { pxToRem } from "../../utils/unitConverter";
import { useLocation } from "react-router-dom";
import iconClose from "../../assets/SVG/shared/icon-close.svg";
import iconHamburger from "../../assets/SVG/shared/icon-hamburger.svg";
import logo from "../../assets/SVG/shared/logo.svg";
import React from "react";
import styles from "./HeaderMobileStyles.module.scss";

type HeaderMobileProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

type MediaQueryListener = {
    event: MediaQueryListEvent | MediaQueryList;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderMobile = (props: HeaderMobileProps) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const location = useLocation();

    React.useEffect(() => {
        const media = window.matchMedia(`(min-width: ${571.5}px)`);

        mediaQueryListener({
            event: media,
            setState: setOpen
        });

        media.addEventListener("change", (event) => mediaQueryListener({
            event: event,
            setState: setOpen
        }));

        return () => media.removeEventListener("change", (event) => mediaQueryListener({
            event: event,
            setState: setOpen
        }));
    }, []);

    React.useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <>
            <header
                {...props}
                className={`${styles['header-mobile']} ${props.className}`}
            >
                <Image
                    alt="Logo"
                    className={styles['header-mobile__logo']}
                    src={logo}
                />

                <button
                    aria-label="Open navigation bar"
                    className={styles['hamburger-button']}
                    onClick={() => setOpen(true)}
                >
                    <div className={styles['hamburger-button__image']}>
                        <Image
                            alt=""
                            src={iconHamburger}
                        />
                    </div>
                </button>
            </header>

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    ".MuiBackdrop-root": {
                        backgroundColor: "transparent"
                    },
                    ".MuiPaper-root": {
                        backgroundColor: "#FFFFFF0A",
                        backdropFilter: `blur(${pxToRem(40)})`,
                        paddingBottom: pxToRem(28),
                        width: "100%",
                        maxWidth: pxToRem(254)
                    }
                }}
            >
                <div className={styles['drawer-header']}>
                    <button
                        aria-label="Close navigation bar"
                        className={styles['drawer-header-button']}
                        onClick={() => setOpen(false)}
                    >
                        <div className={styles['drawer-header-button__image']}>
                            <Image
                                alt=""
                                src={iconClose}
                            />
                        </div>
                    </button>
                </div>

                <nav className={styles["nav"]}>
                    <NavLink
                        active={location.pathname === "/"}
                        DivProps={{
                            className: styles.nav__link
                        }}
                        LinkProps={{
                            to: "/"
                        }}
                        name="HOME"
                        number="00"
                    />
                    <NavLink
                        active={location.pathname === "/destination"}
                        DivProps={{
                            className: styles.nav__link
                        }}
                        LinkProps={{
                            to: "/destination"
                        }}
                        name="DESTINATION"
                        number="01"
                    />
                    <NavLink
                        active={location.pathname === "/crew"}
                        DivProps={{
                            className: styles.nav__link
                        }}
                        LinkProps={{
                            to: "/crew"
                        }}
                        name="CREW"
                        number="02"
                    />
                    <NavLink
                        active={location.pathname === "/technology"}
                        DivProps={{
                            className: styles.nav__link
                        }}
                        LinkProps={{
                            to: "/technology"
                        }}
                        name="TECHNOLOGIES"
                        number="03"
                    />
                </nav>
            </Drawer>
        </>
    );
};

const mediaQueryListener = ({
    event,
    setState
}: MediaQueryListener) => {
    if (event.matches) setState(false);
};