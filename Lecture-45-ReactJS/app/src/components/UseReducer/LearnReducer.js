import { useEffect, useState, useReducer } from "react";
import classes from "./LearnReducer.module.css";
import { values } from "../Cleanup/product";

function emailReducer(state, action) {
	if (action.type == "EMAIL_INP") {
		return { value: action.value, isValid: action.value.includes("@") };
	} else if (action.type == "EMAIL_VERIFY") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: state.value, isValid: state.isValid };
}

function passwordReducer(state, action) {
	if (action.type == "PASSWORD_INPUT") {
		return { value: action.value, isValid: action.value.trim().length > 5 };
	} else if (action.type == "PASSWORD_VERIFY") {
		return { value: state.value, isValid: state.value.trim().length > 5 };
	}
	return { value: state.value, isValid: state.isValid };
}

function App() {
	const [isValidForm, setIsValidForm] = useState(false);

	const [email, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: true,
	});

	const [password, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: true,
	});

	useEffect(() => {
		setIsValidForm(email.isValid && password.isValid);
	}, [email.isValid, password.isValid]);

	const emailChangeHandler = (ev) => {
		// console.log(ev.target.value);
		dispatchEmail({
			type: "EMAIL_INP",
			value: ev.target.value,
		});
	};

	const passwordChangeHandler = (ev) => {
		dispatchPassword({
			type: "PASSWORD_INPUT",
			value: ev.target.value,
		});
	};

	const validateEmailHandler = () => {
		dispatchEmail({
			type: "EMAIL_VERIFY",
		});
	};

	const validatePasswordHandler = () => {
		dispatchPassword({
			type: "PASSWORD_VERIFY",
		});
	};

	const FormSubmitHandler = (ev) => {
		ev.preventDefault();
	};

	return (
		<div className="App">
            {!isValidForm && <div>Please Correct email or password</div>}
			<form onSubmit={FormSubmitHandler}>
				<div
					className={`${email.isValid === false ? classes.invalid : ""}`}
				>
					<input
						value={email.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
						type="text"
						placeholder="Enter email"
					></input>
				</div>
				<div
					className={`${
						password.isValid === false ? classes.invalid : ""
					}`}
				>
					<input
						// value={password}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
						type="password"
						placeholder="Enter password"
					></input>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
