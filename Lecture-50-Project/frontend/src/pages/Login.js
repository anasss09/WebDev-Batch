import { useDispatch } from "react-redux";
import axios from "../utils/axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";


const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitHandler = async (ev) => {
		ev.preventDefault()
		const username = emailRef.current.value;
		const password = passwordRef.current.value;

		// console.log(username, password);

		try {
			const { data } = await axios.post("login", { username, password });

			if (!username) return alert("Please enter username");
			if (!password) return alert("Please enter password");

			dispatch({
				type: "SET_USER",
				payload: data.user,
			});

			navigate("/app");
		} catch (error) {
			console.log(error.response.data.message);
		}
	};
	return (
		<>
			<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
				<Card style={{ width: "400px", padding: "20px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
					<Card.Body>
						<h2 className="text-center mb-4" style={{ fontWeight: "600", color: "#007bff" }}>Login</h2>
						<Form onSubmit={onSubmitHandler} className="form-control">
							<Form.Group className="mb-3" >
								<Form.Label>Username</Form.Label>
								<Form.Control ref={emailRef} type="text" placeholder="Enter username or email" />
							</Form.Group>

							<Form.Group className="mb-3" >
								<Form.Label>Password</Form.Label>
								<Form.Control ref={passwordRef} type="password" placeholder="Enter password" />
							</Form.Group>

							<Button variant="primary" type="submit">Login</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default Login;



{/* <input
				ref={emailRef}
				type="text"
				placeholder="Enter username or email"
			/>
			<input
				ref={passwordRef}
				type="password"
				placeholder="Enter password"
			/>
			<button onClick={loginHandler}>Login</button> */}