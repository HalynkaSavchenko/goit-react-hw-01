import css from './Profile.module.css'

export default function Profile ({userData: {
  username,
  tag,
  location,
  avatar,
  stats: {
    followers,
    views,
    likes
  }
}}) {
  return (
  <div className={css.container}>
    <div className={css.userWrapper}>
      <img className={css.avatar} src={avatar} alt="User avatar"/>
      <h2>{username}</h2>
      <p className={css.text}>@{tag}</p>
      <p className={css.text}>{location}</p>
    </div>
    <ul className={css.statsList}>
      <li className={css.statsItem}>
        <span>Followers</span>
        <span className={css.count}>{followers}</span>
      </li>
      <li className={css.statsItem}>
        <span>Views</span>
        <span className={css.count}>{views}</span>
      </li>
      <li className={css.statsItem}>
        <span>Likes</span>
        <span className={css.count}>{likes}</span>
      </li>
    </ul>
</div>
  );
};