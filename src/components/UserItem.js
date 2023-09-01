const UserItem = ({firstName, lastName}) => {
  return (
    <li>
      <span>{firstName} {lastName}</span>
    </li>
  );
};

export default UserItem;