import type { AppProps } from 'next/app';

import styles from "../styles/app.module.scss";

import "../styles/global.scss";
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={styles.app}>
			<Component {...pageProps} />
		</div>
	);
};