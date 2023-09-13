import React, { createContext, useState } from "react";
import AuthPage from "../views/AuthPage/AuthPage";
import { getUser, logOut } from "../utils/users-service";
import NavBar from "../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../views/CoursesPage/CoursesPage";
import MyCoursesPage from "../views/MyCoursesPage/MyCoursesPage";
import CreateCoursePage from "../views/CourseCreatePage/CreateCoursePage";
import ThemeProvider from "../themes/ThemeProvider";
import CourseDetailPage from "../views/CourseDetailPage";
import TestList from "../components/TestList";

export const UserContext = createContext([]);
export const OwnedCoursesContext = createContext();

const App = () => {
	const [user, setUser] = useState(getUser());

	const [ownedCourses, setOwnedCourses] = useState([]); // array of courses PURCHASED by user

	// test env mode
	console.log("mode:", import.meta.env.MODE);

	return (
		<UserContext.Provider value={[user, setUser]}>
			<NavBar user={user} />
			<main>
				<Routes>
					<Route path="/courses" element={<CoursesPage />} />
					<Route path="/courses/:id" element={<CourseDetailPage />} />
					{user ? (
						<>
							<Route
								path="/my-courses"
								element={<MyCoursesPage />}
							/>
							<Route
								path="/courses/create"
								element={<CreateCoursePage />}
							/>
						</>
					) : (
						<Route
							path="/*"
							element={<AuthPage setUser={setUser} />}
						/>
					)}
				</Routes>
			</main>
		</UserContext.Provider>
	);
};

export default App;
