import React, { useEffect, useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import CourseList from "../../components/CourseList/CourseList";
import './CoursePage.css';

const CoursesPage = () => {
	// const [courses, setCourses] = useState([]);

	// useEffect(() => {
	// 	const getCourses = async () => {
	// 		const courses = await coursesAPI.get();
	// 		setCourses(courses);
	// 	};
	// 	getCourses();
	// }, []);

	return (
		<div>
			<h1>Courses Page</h1>
            <ErrorBoundary fallback={<p>uh oh!</p>}>
			    <CourseList />
            </ErrorBoundary>
		</div>
	);
};

export default CoursesPage;
