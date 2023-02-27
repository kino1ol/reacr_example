import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import getProducts from "./actions/getProducts";
import "./App.css";
import Layout from "./components/Layout";
import Products from "./pages/Products/Products.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<h1>This is a main page</h1>} />
			<Route path="/products">
				<Route
					index
					element={<Products />}
					loader={getProducts}
				/>
				{/* <Route path=":id" element={} /> */}
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
