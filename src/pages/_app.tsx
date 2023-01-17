import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from 'next/app';

import { GlobalStylesComponent } from "@/styles/GlobalStylesComponent/GlobalStylesComponent";

import { theme } from "@/styles/Theme/default";
import { pxToRem } from "@/utils/unitConverter";

import "../styles/global.scss";
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			theme={theme}
		>
			<GlobalStylesComponent />

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					margin: "auto",
					width: "100%",
					maxWidth: pxToRem(1440),
					minHeight: "100vh"
				}}
			>
				<Component {...pageProps} />
			</Box>
		</ThemeProvider>
	);
};