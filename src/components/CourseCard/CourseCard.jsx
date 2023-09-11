import React, { useContext, useState } from "react";
import { UserContext } from "../../App/App";
import "./CourseCard.css";
import { purple } from "../../themes/color-palette";
import Paragraph from "../Typography/Paragraph";

const CourseCard = ({ course, handleDelete, handleUpdate }) => {
	const [user, setUser] = useContext(UserContext);
	const [isUpdating, setIsUpdating] = useState(false);
	const [title, setTitle] = useState("");

	const handleChangeUpdating = () => {
		if (!isUpdating) {
			setTitle(course.title);
			setIsUpdating(true);
		} else {
			// if data has changed
			if (title !== course.title) {
				// call handleUpdate
				handleUpdate(course.id, { title: title });
			}
			setIsUpdating(false);
		}
	};

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<div
			css={{
				border: "1px solid white",
				borderRadius: "20px",
				margin: "2rem",
			}}
		>
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
					src="https://picsum.photos/200/300"
					css={{
						width: "100%",
						height: "auto",
					}}
				></img>
			</div>
			<div className="input-or-h2">
				{isUpdating ? (
					<input
						name="name"
						value={title}
						onChange={handleChange}
					></input>
				) : (
					<h2>{course.title}</h2>
				)}
			</div>
			<div>
				<Paragraph>{course.description}</Paragraph>
			</div>
			<p style={{ color: `${purple[400]}` }} color={purple.purple400}>
				by {course.User.name}
			</p>
			{user.id === course.userId && (
				<div>
					<button onClick={() => handleDelete(course.id)}>
						Delete
					</button>
					<button onClick={handleChangeUpdating}>
						{isUpdating ? "Save" : "Edit"}
					</button>
				</div>
			)}
		</div>
	);
};

export default CourseCard;
