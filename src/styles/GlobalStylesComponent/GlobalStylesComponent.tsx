import GlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStylesComponent = () => {
    return (
        <GlobalStyles
            styles={(theme) => ({
                "*": {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    overflowWrap: "break-word",
                    scrollbarColor: "#d0d6f9 #0b0d17",
                    scrollbarWidth: "auto",
                    minWidth: 0,
                    "::-webkit-scrollbar": {
                        width: "12px"
                    },
                    "::-webkit-scrollbar-track": {
                        background: "#0b0d17"
                    },
                    "::-webkit-scrollbar-thumb": {
                        backgroundColor: "#d0d6f9",
                        borderRadius: "100px",
                        border: "0px none #ffffff"
                    }
                },
                "body": {
                    overflowX: "hidden",
                    overflowY: "scroll"
                },
                [theme.breakpoints.down("sm")]: {
                    "html": {
                        fontSize: `${100 * 16 / theme.breakpoints.values.sm}vw`
                    }
                }
            })}
        />
    );
};