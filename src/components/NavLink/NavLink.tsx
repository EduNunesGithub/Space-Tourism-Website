import {
    Link,
    LinkProps
} from "react-router-dom";
import styles from "./NavLinkStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type NavLinkProps = {
    active: boolean;
    DivProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    LinkProps: LinkProps;
    name: string;
    number: string;
};

export const NavLink = ({
    active,
    DivProps,
    LinkProps,
    name,
    number
}: NavLinkProps) => {
    return (
        <div
            {...DivProps}
            className={`${styles['nav-link']} ${DivProps?.className}`}
        >
            <Link
                {...LinkProps}
                className={styles['nav-link__link']}
            >
                <span
                    className={
                        `${typography['nav-text']} ${styles['nav-text']}` + " " +
                        (active === true && styles['nav-text--active'])
                    }
                >
                    <span className={styles['nav-text--strong']}>{number}</span>
                    <span className={styles['nav-text--normal']}>{name}</span>
                </span>
            </Link>
        </div>
    );
};