import React, { useContext, useState } from "react";
import { UserContext } from "../../App/App";
import "./CourseCard.css";
import { purple } from "../../themes/color-palette";
import Paragraph from "../Typography/Paragraph";
import Typography from "../Typography/Typography";
import CardLower from "./CardLower";
import { Link } from 'react-router-dom';

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
		<Link to={`/courses/${course.id}`}>
			<div
				css={{
					// border: "1px solid white",
					borderRadius: "20px",
					margin: "2rem",
					display: "flex",
					flexDirection: "column",
					transition: "transform 0.3s ease",
					"&:hover": {
						transform: "scale(1.05)",
					},
				}}
			>
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
				{/*  body */}
				<CardLower>
					{/* <div className="input-or-h2">
						{isUpdating ? (
							<input
								name="name"
								value={title}
								onChange={handleChange}
							></input>
						) : (
							// <h2>{course.title}</h2>
							<Typography variant="h2">{course.title}</Typography>
						)}
					</div> */}
					<div>
						<Typography variant="h2">{course.title}</Typography>
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
					<div css={{
						margin: '1rem'
					}}>
						<Paragraph>{course.description}</Paragraph>
					</div>
				</CardLower>

				{/* <p style={{ color: `${purple[400]}` }} color={purple.purple400}>
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
				)} */}
			</div>
		</Link>
	);
};

export default CourseCard;
