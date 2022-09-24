import { useState } from "react";
import axios from "axios";

import { UserProfile } from "../types/userProfile";
import { User } from "../types/api/user";


export const useGetUsers = () => {
  const [ userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((user) =>({
        id:user.id,
        name:user.name,
        company:user.company.name,
        phone:user.phone,
        email:user.email
      }));
      setUserProfiles(data);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return { getUsers, userProfiles, loading, error };
}