import React, { useState , useContext } from "react";
import * as coursesAPI from "../../utils/courses-api";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import CourseListExperimental from "../../components/CourseListExperimental/CourseListExperimental";
import { UserContext } from "../../App/App";


const MyCoursesPage = () => {
	const [courses, setCourses] = useState([]);
    const [user, setUser] = useContext(UserContext);   

	// const getCourses = async () => {
	// 	const courseData = await coursesAPI.get();
	// 	// console.log(courses);
	// 	setCourses(courseData);
    //     // so with no try catch we will add that in the child component this time
    //     // will this work???
	// };

    const dataAPICall = async () => {
        return await coursesAPI.getWithFilters({user: user.id});
    }

	return (
		<div>
			<h1>Courses Page</h1>
			<ErrorBoundary fallback={<p>uh oh!</p>}>
				<CourseListExperimental courses={courses} setCourses={setCourses} apiCall={dataAPICall}/>
			</ErrorBoundary>
		</div>
	);
};

export default MyCoursesPage;
