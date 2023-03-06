import { useState } from "react";
import Input from "./Input";

export default function Form() {
	const [form, setState] = useState({
		login: "",
		password: "",
	});

	const [error, setError] = useState("");
	const [src, setSrc] = useState('')

	return (
		<div>
			{Object.keys(form)
				.filter((name) => name !== "sadsad")
				.map((name, i) => (
					<Input
						value={form[name]}
						name={name}
						key={`${name}_${i}`}
						setState={setState}
					/>
				))}
			<button
				onClick={submit}
				style={{
					border: 0,
					backgroundColor: "wheat",
					borderRadius: "30px",
					cursor: "pointer",
				}}>
				Отправить данные
			</button>
			<div style={{ color: "red" }}>{error}</div>
			{src && (<img src={src} alt='avatar' />)}
		</div>
	);

	async function submit() {
		let ok;
		fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: form.login,
				password: form.password,
			}),
		})
			.then((res) => {
				ok = res.ok
				return res.json();
			})
			.then((data) => {
				!ok && setError(data.message);
				ok && setSrc(data.image)
			});
	}
}
