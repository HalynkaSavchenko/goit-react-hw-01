import clsx from 'clsx'
import css from './FriendListItem.module.css'
export default function FriendListItem ({friend: {
    avatar,
    name,
    isOnline
}}) {
    const statsClassName = clsx(css.textStats, isOnline ? css.isOnline : css.isOffline)
    return(
        <div className={css.item}>
            <img src={avatar} alt="Avatar" width="48"/>
            <p className={css.textName}>{name}</p>
            <p className={statsClassName}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}