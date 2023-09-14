import React, { useState, useEffect } from "react";
import * as coursesAPI from "../../utils/courses-api";
import useThrowAsyncError from "../../utils/hooks/useThrowAsyncError";
import CourseCard from "../CourseCard/CourseCard";
import { Routes, Route } from "react-router-dom";
import CoursesContainer from "../CoursesContainer";

const CourseList = ({ courses, setCourses, apiCall }) => {
	// const [courses, setCourses] = useState([]);
	const throwAsyncError = useThrowAsyncError();

	useEffect(() => {
		const getCourses = async () => {
			try {
				const courseData = await apiCall();
				// console.log("courseData: ", courseData)
				setCourses(courseData);
			} catch (err) {
				throwAsyncError(err);
			}
		};
		getCourses();

		// OHHH SO THIS WORKS!!!
	}, []);	

	return (
		<CoursesContainer>
			{courses &&
				courses.map((course, idx) => {
					return <CourseCard key={idx} course={course} />;
				})}
		</CoursesContainer>
	);
};

export default CourseList;
