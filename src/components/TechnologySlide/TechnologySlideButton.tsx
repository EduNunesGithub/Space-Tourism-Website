import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";

import { pxToRem } from "@/utils/unitConverter";

type TechnologySlideButtonProps = {
    active: boolean;
    ButtonBaseProps?: ButtonBaseProps;
    name: string;
};

export const TechnologySlideButton = ({
    active,
    ButtonBaseProps,
    name
}: TechnologySlideButtonProps) => {
    return (
        <ButtonBase
            {...ButtonBaseProps}
            sx={{
                backgroundColor: active === true ? "#FFFFFF" : "transparent",
                color: active === true ? "#0B0D17" : "#FFFFFF",
                fontFamily: "'Bellefair', sans-serif",
                fontSize: {
                    "xs": pxToRem(16),
                    "md": pxToRem(24),
                    "lg": pxToRem(32)
                },
                fontWeight: 400,
                letterSpacing: {
                    "xs": pxToRem(1),
                    "md": pxToRem(1.5),
                    "lg": pxToRem(2)
                },
                lineHeight: {
                    "xs": pxToRem(18.34),
                    "md": pxToRem(27.5),
                    "lg": pxToRem(36.67)
                },
                borderColor: active === true ? "transparent" : "#FFFFFF40",
                borderRadius: "50%",
                borderStyle: "solid",
                borderWidth: pxToRem(1),
                transitionDuration: "0.2s",
                transitionProperty: "background-color, border-color",
                transitionTimingFunction: "ease-in-out",
                width: {
                    "xs": pxToRem(40),
                    "md": pxToRem(60),
                    "lg": pxToRem(80)
                },
                height: {
                    "xs": pxToRem(40),
                    "md": pxToRem(60),
                    "lg": pxToRem(80)
                },
                ":hover": {
                    backgroundColor: active === true ? "#FFFFFF" : "#FFFFFF40"
                },
                ...ButtonBaseProps?.sx
            }}
        >
            {name}
        </ButtonBase>
    );
};