import React, { useState, useEffect } from "react";
import * as coursesAPI from "../../utils/courses-api";
import useThrowAsyncError from "../../utils/hooks/useThrowAsyncError";

const CourseList = () => {
	const [courses, setCourses] = useState([]);
	// const [error, setError] = useState(null);
    const throwAsyncError = useThrowAsyncError();
	// useEffect(() => {
	//     throw new Error('my error')
	// })

	useEffect(() => {
		const getCourses = async () => {
			try {
				const courseData = await coursesAPI.get();
				// console.log(courses);
				setCourses(courseData);
			} catch (err) {
				console.log("we are getting to useEffect catch");
				// setError(() => {
				// 	throw new Error(err.message);
				// });
                throwAsyncError(err);
			}
		};
		getCourses();
	}, []);

	// if (error) {
	//     throw error;
	// }

	return (
		<div>
			{courses && courses.map((course, idx) => {
				return (
					<div key={idx} className="course-card">
						<h2>{course.title}</h2>
						<p>by {course.User.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default CourseList;
