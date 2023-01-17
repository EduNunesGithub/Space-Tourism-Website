import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";

import styles from "./DestinationsSlideButtonStyles.module.scss";

type DestinationsSlideButtonProps = {
    active: boolean;
    ButtonBaseProps?: ButtonBaseProps;
    children?: React.ReactNode;
};

export const DestinationsSlideButton = ({
    active,
    ButtonBaseProps,
    children
}: DestinationsSlideButtonProps) => {
    return (
        <div className={styles["container"]}>
            <ButtonBase
                {...ButtonBaseProps}
                children={children}
                className={(
                    styles['destinations-slide-button'] + " " +
                    (active === true && styles['destinations-slide-button--active'])
                )}
            />
        </div>
    );
};