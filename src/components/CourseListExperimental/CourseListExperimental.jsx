import React, { useState, useEffect } from "react";
import * as coursesAPI from "../../utils/courses-api";
import useThrowAsyncError from "../../utils/hooks/useThrowAsyncError";

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

	return (
		<div>
			{courses.length ? (
				courses.map((course, idx) => {
					return (
						<div key={idx} className="course-card">
							<h2>{course.title}</h2>
							<p>by {course.User.name}</p>
						</div>
					);
				})
			) : (
				<p>No data yet (insert link to create one)</p>
			)}
		</div>
	);
};

export default CourseListExperimental;
