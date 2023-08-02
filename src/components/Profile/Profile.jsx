import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  console.log(user);

  if (!user) {
    return <span>Cargando...</span>;
  }
  //FIXME: change values, how to print in an easy way?
  return <div>Your profile {user.name}</div>;
};

export default Profile;
