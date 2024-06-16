import FriendsListItem from "../FriendsListItem/FriendsListItem";

export default function FriednsList({ friends }) {
  return (
    <ul>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendsListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
