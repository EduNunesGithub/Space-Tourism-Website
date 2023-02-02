import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom";
import { Crew } from "./pages/Crew/Crew";
import { Destination } from "./pages/Destination/Destination";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import {
	QueryClient,
	QueryClientProvider
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Technology } from "./pages/Technology/Technology";
import styles from "./styles/AppStyles.module.scss";

import "./styles/global.scss";
import "swiper/css";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className={styles["app"]}>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route
							element={<Home />}
							path="/"
						/>

						<Route
							element={<Destination />}
							path="/destination"
						/>

						<Route
							element={<Crew />}
							path="/crew"
						/>

						<Route
							element={<Technology />}
							path="/technology"
						/>
					</Routes>
				</BrowserRouter>
			</div>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};