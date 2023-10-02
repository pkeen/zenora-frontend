import React from "react";
import CreateCourseForm from "../../components/CreateCourseForm/CreateCourseForm";
import Typography from "../../components/Typography/Typography";

const CreateCoursePage = () => {
	return (
		<div
			css={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				css={{
					padding: "3rem",
				}}
			>
				<Typography variant={"h1"}>Create a course</Typography>
			</div>
			<CreateCourseForm />
		</div>
	);
};

export default CreateCoursePage;
