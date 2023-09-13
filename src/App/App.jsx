import React, { createContext, useState, useEffect } from "react";
import AuthPage from "../views/AuthPage/AuthPage";
import { getUser, logOut } from "../utils/users-service";
import * as usersAPI from '../utils/users-api'
import NavBar from "../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../views/CoursesPage/CoursesPage";
import MyCoursesPage from "../views/MyCoursesPage/MyCoursesPage";
import CreateCoursePage from "../views/CourseCreatePage/CreateCoursePage";
import ThemeProvider from "../themes/ThemeProvider";
import CourseDetailPage from "../views/CourseDetailPage";
import TestList from "../components/TestList";
import MarginWrapper from "../components/MarginWrapper";

export const UserContext = createContext([]);
export const PurchasedCoursesContext = createContext();

const App = () => {
	const [user, setUser] = useState(getUser());

	const [orderedCourses, setOrderedCourses] = useState([]); // array of courses PURCHASED by user

	useEffect(() => {
		const getPurchasedCourses = async () => {
			try {
				const purchasedCourses = await usersAPI.getUserPurchasedCourses(user.id)
				console.log(purchasedCourses);
				setpurchasedCourses(purchasedCourses);
			} catch (err) {
				console.log(err)
			}
		}
		getPurchasedCourses();
	}, [user]) 

	// test env mode
	console.log("mode:", import.meta.env.MODE);

	return (
		<UserContext.Provider value={[user, setUser]}>
			<PurchasedCoursesContext.Provider value={{orderedCourses, setOrderedCourses}}>
				<MarginWrapper>
					<NavBar user={user} />
					<main>
						<Routes>
							<Route path="/courses" element={<CoursesPage />} />
							<Route
								path="/courses/:id"
								element={<CourseDetailPage />}
							/>
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
				</MarginWrapper>
			</PurchasedCoursesContext.Provider>
		</UserContext.Provider>
	);
};

export default App;
