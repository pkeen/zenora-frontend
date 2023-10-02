import React, { useEffect, useState } from "react";
import * as coursesAPI from "../../utils/courses-api";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import CourseList from "../../components/CourseList/CourseList";
import './CoursePage.css';
import Typography from "../../components/Typography/Typography";
import CoursesContainer from "../../components/CoursesContainer";

const CoursesPage = () => {
	const [courses, setCourses] = useState([]);

	 const dataAPICall = async () => {
			return await coursesAPI.get(/*{ userId: user.id }*/);
			// perhaps a filter could go here??
			// the field key must match the field key in the DB! To be parsed as an int automatically
		};

	return (
		<div css={{width: '100%'}}>
			<div css={{
				padding: '3rem'
			}}>
				<Typography variant={"h1"}>Discover Courses</Typography>
			</div>	
			<ErrorBoundary fallback={<p>uh oh!</p>}>
				<CourseList
					courses={courses}
					setCourses={setCourses}
					apiCall={dataAPICall}
				/>
			</ErrorBoundary>
		</div>
	);
};

export default CoursesPage;
