import React, { useContext } from "react";
import { logOut } from "../../utils/users-service";
import { UserContext } from "../../App/App";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
	const [user, setUser] = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut();
		setUser(null);
		navigate("/");
	};

	return <button onClick={handleLogOut}>Log out</button>;
};

export default LogOutButton;
