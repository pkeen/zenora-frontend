import React, { createContext, useState } from "react";
import AuthPage from "../views/AuthPage/AuthPage";
import { getUser, logOut } from "../utils/users-service";
import NavBar from "../components/NavBar/NavBar";

export const UserContext = createContext([]);

const App = () => {
	const [user, setUser] = useState(getUser());

	const handleLogOut = () => {
		logOut();
		setUser(null);
	};

	return (
		<UserContext.Provider value={[user, setUser]}>
			<NavBar user={user} />
			<main>
				{user ? (
					<>
						<h1>main</h1>
						<p>Hello, {user.name}</p>
					</>
				) : (
					<AuthPage setUser={setUser} />
				)}
			</main>
		</UserContext.Provider>
	);
};

export default App;
