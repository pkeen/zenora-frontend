import React, { useContext } from "react";
import { logOut } from "../../utils/users-service";
import { UserContext } from "../../App/App";

const LogOutButton = () => {

    const [user, setUser] = useContext(UserContext);   

	const handleLogOut = () => {
		logOut();
		setUser(null);
	};

	return <button onClick={handleLogOut}>Log out</button>;
};

export default LogOutButton;
