import React, { useContext, useState } from "react";
import { UserContext } from "../../App/App";
import "./CourseCard.css";
import { purple } from "../../themes/color-palette";
import Paragraph from "../Typography/Paragraph";
import Typography from "../Typography/Typography";
import CardLower from "./CardLower";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";
import Button from "../Button";
import CourseTags from "../CourseTags";

const CourseCard = ({ course, handleDelete, handleUpdate }) => {
	// const [user, setUser] = useContext(UserContext);
	// // const [isUpdating, setIsUpdating] = useState(false);
	// // const [title, setTitle] = useState("");

	return (
		<Link to={`/courses/${course.id}`}>
			<CardContainer>
				{/* Image */}

				<div
					css={{
						// display: "flex",
						overflow: "hidden",
						borderTopLeftRadius: "20px",
						borderTopRightRadius: "20px",
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
				{/*  body */}
				<CardLower>
					<div css={{textAlign: 'left'}}>
						<Typography variant="h2">{course.title}</Typography>
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
							// margin: "1rem",
							textAlign: 'left'
						}}
					>
						<Paragraph>
							{course.description.slice(0, 100)}...
						</Paragraph>
					</div>
					<div>
						<CourseTags />
					</div>
					{/* <div>
						<Button variant="ghost">Learn More</Button>
					</div> */}
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
			</CardContainer>
		</Link>
	);
};

export default CourseCard;
