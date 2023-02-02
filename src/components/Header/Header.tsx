import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

import styles from "./HeaderStyles.module.scss";

export const Header = () => {
    return (
        <div>
            <HeaderDesktop className={styles.header__desktop} />
            <HeaderMobile className={styles.header__mobile} />
        </div>
    );
};