import React, { useContext } from "react";
import { logOut } from "../../utils/users-service";
import { UserContext } from "../../App/App";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const LogOutButton = () => {
	const [user, setUser] = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut();
		setUser(null);
		navigate("/");
	};

	return <Button variant="ghost" size="sm" onClick={handleLogOut}>Log out</Button>;
};

export default LogOutButton;
