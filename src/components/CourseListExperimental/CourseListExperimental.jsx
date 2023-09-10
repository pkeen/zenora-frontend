import React, { useState, useEffect } from "react";
import * as coursesAPI from "../../utils/courses-api";
import CourseCard from "../CourseCard/CourseCard";
import useThrowAsyncError from "../../utils/hooks/useThrowAsyncError";
import { Link } from "react-router-dom";

const CourseListExperimental = ({ setCourses, courses, apiCall }) => {
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

	const handleDelete = async (courseId) => {
		// Step 1: Optimistically remove the course from local state
		const updatedCourses = courses.filter(
			(course) => course.id !== courseId
		);
		setCourses(updatedCourses);
		try {
			// Step 2: Send the delete request to the server
			await coursesAPI.destroy(courseId);
		} catch (err) {
			console.error("Delete Failed:", err);
			// throwAsyncError(err); we dont really want this we want to handle the error gracefully
			// perhaps with a popup explaining it could not be deleted
			setCourses(courses);
		}
	};

	const handleUpdate = async (courseId, data) => {
		// Step 1: Optimistically update the course in local state
		const updatedCourses = courses.map((course) => {
			if (course.id === courseId) {
				return { ...course, ...data };
			}
			return course;
		});
		setCourses(updatedCourses);
		try {
			await coursesAPI.update(courseId, data);
		} catch (err) {
			console.error("updated failed:", err);
			setCourses(courses);
		}
	};

	return (
		<div>
			{courses && courses.length ? (
				courses.map((course, idx) => {
					return (
						<CourseCard
							key={idx}
							course={course}
							setCourses={setCourses}
							handleDelete={handleDelete}
							handleUpdate={handleUpdate}
						/>
					);
				})
			) : (
				<p>
					No data yet <Link to="/courses/create">create one</Link>
				</p>
			)}
		</div>
	);
};

export default CourseListExperimental;
