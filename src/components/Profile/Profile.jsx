import css from "./Profile.module.css";

export default function Profile({
  info: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.contentWrapper}>
        <img className={css.image} src={avatar} alt="User avatar" />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.indexName}>Followers</span>
          <span className={css.indexValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.indexName}>Views</span>
          <span className={css.indexValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.indexName}>Likes</span>
          <span className={css.indexValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
