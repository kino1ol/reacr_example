import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App
			aksana
			alenaEstHleb="da"
			event={23}
			user={{
				id: 1,
				name: "User",
				surname: "Userovich",
			}}>
			<div> children </div>
		</App>
	</React.StrictMode>
);

const [a, b, c, ...unit] = [1, 2, 3, 4, 5, 6];
console.log(unit); // [4,5,6]

const egor = {
	aksana: true,
	name: "User",
	user: {
		id: 0,
	},
	loh: undefined,
	a: "b",
	c: "d",
};

const { name, aksana: alena, loh = "net", abc = "b", user: {id}, ...obj } = egor;

// delete obj.user;
console.log(id);
console.log(name); // 'User'
console.log(alena); // true
console.log(loh); // 'net'
console.log(abc); // 'b'
console.log(obj); // {a: "b", c: "d"}
