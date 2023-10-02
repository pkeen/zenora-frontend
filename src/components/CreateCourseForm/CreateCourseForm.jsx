import React, { useState } from "react";
import { create } from "../../utils/courses-api";
import { Navigate, useNavigate } from "react-router-dom";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import Button from "../Button";

const CreateCourseForm = () => {
	const [courseData, setCourseData] = useState({
		title: "",
		description: "",
		price: 0
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setCourseData((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await create(courseData);
			navigate("/my-courses"); // go back to my course page for now
		} catch (err) {
			console.log("back at component", err);
			setError(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} css={{ width: "400px" }}>
			<InputField
				type="text"
				name="title"
				id="title"
				value={courseData.title}
				onChange={handleChange}
				label="Title"
			/>
			<TextAreaField
				name="description"
				id="description"
				label="Description"
				value={courseData.description}
				onChange={handleChange}
			/>
			<div
				css={{
					display: "flex",
					flexDirection: "column",
					textAlign: "left",
				}}
			>
				<label htmlFor="isPublished">Published Status</label>
				<div>
					<select
						name="isPublished"
						id="isPublished"
						css={{ padding: ".5rem", borderRadius: ".5rem" }}
					>
						<option value="false">Draft</option>
						<option value="true">Published</option>
					</select>
				</div>
			</div>
			<InputField
				type="number"
				name="price"
				id="price"
				label="Price"
				value={courseData.price}
				onChange={handleChange}
			/>
			<Button type="submit" variant="sm">
				Create
			</Button>
			<p>{error}</p>
		</form>
	);
};

export default CreateCourseForm;
