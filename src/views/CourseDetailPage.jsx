import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "../components/Typography/Typography";
import { getOne } from "../utils/courses-api";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import CourseDetailDiv from "../components/CourseDetailComponents/CourseDetailDiv";
import CardLower from "../components/CourseCard/CardLower";
import CourseSlotList from "../components/CourseDetailComponents/CourseSlotList";
import Button from "../components/Button";


const CourseDetailPage = () => {
	// experiment with a course being passable
	// thing might make for a good user experience as some detail is already loaded about the course
	// then the rest loads and only fills what needs to change
	const [course, setCourse] = useState();

	let { id } = useParams();

	console.log(id);

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

	console.log(course);

	if (course) {
		return (
			<CourseDetailDiv>
				{/* Image */}
				<div
					css={{
						display: "flex",
						overflow: "hidden",
						height: "10rem",
						borderTopLeftRadius: "20px",
						borderTopRightRadius: "20px",
					}}
				>
					<img
						src="https://picsum.photos/500/150"
						css={{
							width: "100%",
							height: "auto",
						}}
					></img>
				</div>
				<CardLower>
					<Typography variant="h1">{course.title}</Typography>
					<div>
						{/* <Paragraph>{course.User.name}</Paragraph> */}
						<Typography
							variant="h3"
							css={{
								marginTop: "-.5rem",
							}}
						>
							{course.User.name}
						</Typography>
					</div>
                    <div>
                        <CourseSlotList courseSlots={course.CourseSlots} />
                    </div>
					<Button css={{marginBottom: '1rem'}}>Buy Course</Button>
				</CardLower>
			</CourseDetailDiv>
		);
	}
};

export default CourseDetailPage;
