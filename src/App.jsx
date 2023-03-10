import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import getProduct from "./actions/getProduct";
import getProducts from "./actions/getProducts";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/Main/MainPage";
import ProductCard from "./pages/Products/ProductCard/ProductCard";
import Products from "./pages/Products/Products.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<MainPage />} />
			<Route path="/products">
				<Route
					index
					element={<Products />}
					loader={getProducts}
				/>
				<Route path=":id" element={<ProductCard />} loader={getProduct}/>
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
