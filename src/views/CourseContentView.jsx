import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../utils/courses-api";
import CourseContentBox from "../components/CourseContent/CourseContentBox";
import CourseContentNav from "../components/CourseContent/CourseContentNav";
import * as lessonsApi from "../utils/lessons-api";
import * as modulesApi from "../utils/modules-api";
import LessonContent from "./LessonContent";
import ModuleContent from "./ModuleContent";
import CoursePanels from "../components/CourseContent/CoursePanels";
import CourseContentHeader from "../components/CourseContent/CourseContentHeader";

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
		if (contentType === "lesson") {
			const lesson = await lessonsApi.getOne(contentId);
			newContent = <LessonContent lesson={lesson} />;
		} else {
			const module = await modulesApi.getOne(contentId);
			newContent = <ModuleContent module={module} />;
		}
		setCurrentContent(newContent);
	};

	console.log(course);

	console.log(currentContent);

	if (course) {
		return (
			<div
				css={{
					// width: "100%",
					// height: "100%",
					flex: "1",
					// border: "1px dashed cyan",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<CourseContentHeader>
					<h1 css={{ textAlign: "left" }}>{course.title}</h1>
				</CourseContentHeader>
				<CoursePanels>
					<CourseContentNav
						courseSlots={course.CourseSlots}
						// css={{ border: "1px solid red" }}
						handleSelectContent={handleSelectContent}
					/>

					<CourseContentBox content={currentContent} />

					{/* <CourseContentNav
							courseSlots={course.CourseSlots}
							css={{ border: "1px solid red" }}
							handleSelectContent={handleSelectContent}
						/>
						<CourseContentBox content={currentContent} /> */}
				</CoursePanels>
			</div>
		);
	}
};

export default CourseContentView;
