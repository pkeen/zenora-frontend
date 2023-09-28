import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Typography from "../components/Typography/Typography";
import { getOne } from "../utils/courses-api";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import CourseDetailDiv from "../components/CourseInfoComponents/CourseDetailDiv";
import CardLower from "../components/CourseCard/CardLower";
import CourseSlotList from "../components/CourseInfoComponents/CourseSlotList";
import Button from "../components/Button";
import { useTheme } from "@emotion/react";
import CourseTags from "../components/CourseTags";
import { UserContext, PurchasedCoursesContext } from "../App/App";
import * as ordersAPI from "../utils/orders-api";
import { create } from "../utils/orders-api";
import { Navigate } from "react-router-dom";

const CourseInfoPage = () => {
	// experiment with a course being passable
	// thing might make for a good user experience as some detail is already loaded about the course
	// then the rest loads and only fills what needs to change
	const [course, setCourse] = useState();

	const [user, setuser] = useContext(UserContext);

	const { orderedCourses, setOrderedCourses } = useContext(
		PurchasedCoursesContext
	);

	let { id } = useParams();

	const theme = useTheme();

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

	const handlePurchase = async () => {

		if (orderedCourses.find(orderedCourse => orderedCourse.courseId === course.id)) {
			console.log('going to course')
			return;
		}

		try {
			console.log("courseId:", course.id)
			const order = await ordersAPI.create(course.id);
			console.log(order);
			setOrderedCourses((prev) => {
				return {...prev, order}
			})
			console.log(orderedCourses);
		} catch (err) {
			console.log(err);
		}
	};
	// console.log(course);

	if (course) {
		return (
			<CourseDetailDiv>
				{/* Image */}
				<div
					css={{
						display: "flex",
						overflow: "hidden",
						borderRadius: "20px",
						borderTopLeftRadius: "20px",
						borderTopRightRadius: "20px",
						order: "1",
						[theme.breakpoints.sm.higher]: {
							order: "2",
						},
					}}
				>
					<img
						src="https://picsum.photos/500/300"
						css={{
							width: "100%",
							height: "auto",
						}}
					></img>
				</div>

				<div
					css={{
						textAlign: "left",
						order: "2",
						[theme.breakpoints.sm.higher]: {
							order: "1",
						},
					}}
				>
					<div>
						<Typography variant="h1">{course.title}</Typography>
					</div>
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
					<div
						css={{
							margin: "2rem 0",
						}}
					>
						<Typography>{course.description}</Typography>
					</div>
				</div>
				<div
					css={{
						order: "3",
					}}
				>
					<CourseSlotList courseSlots={course.CourseSlots} />
				</div>
				<div
					css={{
						order: "4",
						paddingTop: "20px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						minHeight: "15rem",
					}}
				>
					<Typography>{course.description}</Typography>
					<CourseTags />

					<Button
						onClick={handlePurchase}
						css={{ marginBottom: "1rem" }}
					>
						{orderedCourses.find(order => order.courseId === course.id) ? "Go to course" : "Buy Course"}
					</Button>
				</div>
			</CourseDetailDiv>
		);
	}
};

export default CourseInfoPage;
