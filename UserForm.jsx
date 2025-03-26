//Renu SID-4430
import Reach, { useState, useEffect } from "react";
import { createUser, updateUser } from "./services/api";

function userForm({ currentUser, onSave }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user._id) {
      await updateUser(user._id, user);
    } else {
      await createUser(user);
    }
    onSave();
    setUser({ name: "", email: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default userForm;
