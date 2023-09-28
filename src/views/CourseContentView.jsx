import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../utils/courses-api";
import CourseContentBox from "../components/CourseContentBox";
import CourseContentNav from "../components/CourseContentNav";
import * as lessonsApi from "../utils/lessons-api"

const CourseContentView = () => {
	const [course, setCourse] = useState();

	const [currentContent, setCurrentContent] = useState();

	let { id } = useParams();

	useEffect(() => {
		const getCourse = async () => {
			try {
				const course = await getOne(id);
				setCourse(course);
			} catch (err) {
				console.error(err);
			}
		};
		getCourse();
	}, [id]);

	const handleSelectContent = async (contentId, contentType) => {
		let newContent;
		if (contentType === 'lesson') {
			newContent = await lessonsApi.getOne(contentId)
		}
		setCurrentContent(newContent.title);
	}

	console.log(course);

	console.log(currentContent);

    if (course) {
        return (
			<div>
				<h1 css={{ textAlign: "left" }}>{course.title}</h1>
				<CourseContentNav courseSlots={course.CourseSlots} css={{border: '1px solid red', }} handleSelectContent={handleSelectContent}/>
				<CourseContentBox content={currentContent} />
			</div>
		);
    }
};

export default CourseContentView;
