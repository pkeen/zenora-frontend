import React, { useState } from "react";
import CourseContentNav from "./CourseContentNav";

const CourseContentBox = ({ content }) => {
	return <div css={{ border: "1px solid blue" }}>{content}</div>;
};

export default CourseContentBox;
