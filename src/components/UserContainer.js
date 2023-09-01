import UserItem from './UserItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getResultItems } from '../users/userSlice';

const UserContainer = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getResultItems());
  }, [dispatch]);

  if (isLoading) {
    return(
      <div>Content Is Loading..!</div>
    )
  }

  if (error) {
    return (
      <div>Content Error! Something went wrong!</div>
    )
  }

  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.login.uuid} firstName={item.name.first} lastName={item.name.last} />
      })}
    </ul>
  );
}

export default UserContainer;