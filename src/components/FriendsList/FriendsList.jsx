import FriendsListItem from "../FriendsListItem/FriendsListItem";
import css from "./FriendsList.module.css";

export default function FriednsList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((item) => (
        <li className={css.listItem} key={item.id}>
          <FriendsListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
