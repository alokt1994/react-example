import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

export default function UserWrapper() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      firstName: "Alex",
      lastName: "John",
      email: "alex@gmail.com",
      mobile: "1234567890",
    },
  ]);

  const onDelete = (id) => {
    const users = userList.filter((user) => user.id !== id);
    setUserList([...users]);
  };

  return (
    <div>
      <UserForm
        onUserFormSubmit={(values) => {
          console.log("User Wrapper", values);
          values.id = userList.length + 1;
          userList.push(values);
          setUserList([...userList]);
        }}
      />
      <UserList userList={userList} onUseDelete={onDelete} />
    </div>
  );
}
