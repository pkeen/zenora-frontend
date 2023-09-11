import React, { useEffect, useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import CourseList from "../../components/CourseList/CourseList";
import './CoursePage.css';
import H1 from "../../components/Typography/H1";

const CoursesPage = () => {
	

	return (
		<div>
			<H1>Courses Page</H1>
            <ErrorBoundary fallback={<p>uh oh!</p>}>
			    <CourseList />
            </ErrorBoundary>
		</div>
	);
};

export default CoursesPage;
