import { Image } from "../Image/Image";
import { NavLink } from "../NavLink/NavLink";
import { useLocation } from "react-router-dom";
import logo from "../../assets/SVG/shared/logo.svg";
import styles from "./HeaderDesktopStyles.module.scss";

type HeaderDesktopProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export const HeaderDesktop = (props: HeaderDesktopProps) => {
    const location = useLocation();

    return (
        <header
            {...props}
            className={`${styles['header-desktop']} ${props.className}`}
        >
            <div className={styles['header-desktop__logo']}>
                <Image
                    alt="Logo"
                    src={logo}
                />
            </div>

            <span className={styles['header-desktop__decoration']} />

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
        </header>
    );
};