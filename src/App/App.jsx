import React, { useState } from "react";
import AuthPage from "../views/AuthPage/AuthPage";
import { getUser , logOut } from "../utils/users-service";

const App = () => {
	const [user, setUser] = useState(getUser());

	const handleLogOut = () => {
		logOut();
		setUser(null);
	}

	return (
		<main>
			{user ? (
				<>
					<h1>main</h1>
					<p>Hello, {user.name}</p>
					<button onClick={handleLogOut}>Log out</button>
				</>
			) : (
				<AuthPage setUser={setUser}/>
			)}
		</main>
	);
};

export default App;
