import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

// const router = createBrowserRouter(createRoutesFromElements(
// <Route path="/" element={< Layout />}>
//   <Route index element={<h1>This is a main page</h1>} />
//   <Route path="/products">
//     <Route index element={<h1>This page with products</h1>} />
//     {/* <Route path=":id" element={} /> */}
//   </Route>
// </Route>
// ))
// return <RouterProvider router={router} />
// props: {
// 	children: <>
// 		<div> children </div>
// 		<div> 1</div>
// 		<div> 2</div>
// 		<div> 3</div>
// 	</>;
//   aksana: true,
//   alenaEstHleb: 'da',
//   event: 23,
//   user: {
//     id: 1,
//     name: 'User',
//     surname: 'Userovich',
//   },
// }

function App({ aksana, alenaEstHleb, event, user: {id,name,surname}, children}) {

	return (
  <div className="parent">
    {children}
    <div className="props.aksana">
      {String(aksana)}
    </div>
    <div className="props.alenaEstHleb">
      Алёна ест хлеб? {alenaEstHleb}!
    </div>
    <div className="event">
      {event}
    </div>
    <div className="parenForUser">
      <div className="id">
        {id}
      </div>
      <div className="name">
        {name}
      </div>
      <div className="surname">
        {surname}
      </div>
    </div>
  </div>);
}

export default App;
