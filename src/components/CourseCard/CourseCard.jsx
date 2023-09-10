import React, { useContext, useState } from "react";
import { UserContext } from "../../App/App";
import "./CourseCard.css";

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
		<div className="course-card">
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
			<p>by {course.User.name}</p>
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
