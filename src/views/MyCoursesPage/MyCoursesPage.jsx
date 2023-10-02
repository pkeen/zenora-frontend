import React, { useState , useContext } from "react";
import * as coursesAPI from "../../utils/courses-api";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import CourseListExperimental from "../../components/CourseListExperimental/CourseListExperimental";
import CourseList from "../../components/CourseList/CourseList";
import { UserContext } from "../../App/App";
import H1 from "../../components/Typography/H1";
import Typography from "../../components/Typography/Typography";


const MyCoursesPage = () => {
	const [courses, setCourses] = useState([]);
    const [user, setUser] = useContext(UserContext);   

    const dataAPICall = async () => {
		return await coursesAPI.get({ userId: user.id });
		// the field key must match the field key in the DB! To be parsed as an int automatically
	}

	return (
		<div css={{ width: "100%" }}>
			<div
				css={{
					padding: "3rem",
				}}
			>
				<Typography variant={"h1"}>My Courses</Typography>
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

export default MyCoursesPage;
