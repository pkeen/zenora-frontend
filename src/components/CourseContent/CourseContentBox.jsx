import React, { useState } from "react";
import CourseContentNav from "./CourseContentNav";

const CourseContentBox = ({ content }) => {
	return <div css={{ flex: '1', display: 'flex'}}>{content}</div>;
};

export default CourseContentBox;
