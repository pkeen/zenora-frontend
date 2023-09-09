import React, { useState } from "react";
import { create } from "../../utils/courses-api";

const CreateCourseForm = () => {
	const [courseData, setCourseData] = useState({
		title: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setCourseData((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
        setError('');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await create(courseData);
		} catch (err) {
			console.log("back at component", err);
			setError(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">Title</label>
			<input
				type="text"
				name="title"
				id="title"
				value={courseData.title}
				onChange={handleChange}
			/>
			<button type="submit">Create</button>
			<p>{error}</p>
		</form>
	);
};

export default CreateCourseForm;
