import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utils/utils";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Users = () => {
  const { loggedIn, setLoggedIn, setUser, user } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, []);

  return (
    <>
      {loggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(false);
            setUser("");
          }}
        >
          Logout
        </button>
      ) : (
        <div className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
            {users.map((user) => (
              <Link
                key={user.username}
                className="link"
                onClick={() => {
                  setLoggedIn(true);
                  setUser(user.username);
                }}
              >
                {user.username}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
