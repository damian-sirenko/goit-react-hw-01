import css from "./FriendsListItem.module.css";
import clsx from "clsx";

export default function FriendsListItem({
  friend: { avatar, name, isOnline },
}) {
  const statusClasses = clsx(
    css.status,
    isOnline ? css.statusOnline : css.statusOffline
  );
  return (
    <div className={css.contentWrapper}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
