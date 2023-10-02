import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import { Routes, Route } from "react-router-dom";
import { css } from "@emotion/react";

const AuthPage = ({ setUser }) => {
	return (
		<div>
			{/* <h1>Auth Page</h1> */}
			<div css={css`
				display: flex;
				justify-content: center
			`}>
				<Routes>
					<Route
						path="/"
						element={<SignUpForm setUser={setUser} />}
					></Route>
					<Route
						path="login"
						element={<LogInForm setUser={setUser} />}
					></Route>
				</Routes>
			</div>

			{/* <SignUpForm setUser={setUser} /> */}
		</div>
	);
};

export default AuthPage;
