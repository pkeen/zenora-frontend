import React, { createContext, useState } from "react";
import AuthPage from "../views/AuthPage/AuthPage";
import { getUser, logOut } from "../utils/users-service";
import NavBar from "../components/NavBar/NavBar";
import CoursesPage from "../views/CoursesPage/CoursesPage";
import MyCoursesPage from "../views/MyCoursesPage/MyCoursesPage";
import { Routes, Route } from "react-router-dom";

export const UserContext = createContext([]);

const App = () => {
	const [user, setUser] = useState(getUser());

	return (
		<UserContext.Provider value={[user, setUser]}>
			<NavBar user={user} />
			<main>
				{user ? (
					<Routes>
						<Route path="/" element={<CoursesPage />} />
						<Route path="/my-courses" element={<MyCoursesPage />} />
					</Routes>
				) : (
					<AuthPage setUser={setUser} />
				)}
			</main>
		</UserContext.Provider>
	);
};

export default App;
