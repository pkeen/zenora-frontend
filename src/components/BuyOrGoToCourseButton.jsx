import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { PurchasedCoursesContext } from "../App/App";
import * as ordersAPI from "../utils/orders-api";

const BuyOrGoToCourseButton = ({ course, className }) => {
	const navigate = useNavigate();

	const { orderedCourses, setOrderedCourses } = useContext(
		PurchasedCoursesContext
	);

	let userHasCourse;

	if (course) {
		userHasCourse = orderedCourses.find((oc) => oc.courseId === course.id);
	}

	const handlePurchase = async () => {
		try {
			console.log("courseId:", course.id);
			const order = await ordersAPI.create(course.id);
			console.log(order);
			setOrderedCourses((prev) => {
				return { ...prev, order };
			});
			console.log(orderedCourses);
			navigate(`/courses/${course.id}/content`);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = async () => {
		if (userHasCourse) {
			console.log("going to course");
			navigate(`/courses/${course.id}/content`);
		} else {
			await handlePurchase();
		}
	};

	return (
		<Button className={className} onClick={handleClick}>
			{userHasCourse ? "Go to course" : "Buy Course"}
		</Button>
	);
};

export default BuyOrGoToCourseButton;
