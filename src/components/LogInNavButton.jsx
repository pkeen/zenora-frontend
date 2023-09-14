import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const LogInNavButton = ({ className }) => {
	return (
		<Link to="/login">
			<Button variant={"ghost"} size="sm" className={className}>
				Log In
			</Button>
		</Link>
	);
};

export default LogInNavButton;
