import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'

export default function FriendList ({friendlist}) {
    return(
        <ul className={css.friendlist}>
            {friendlist.map((friend)=>(
                <li className={css.friendItem} key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            )
            )}
        </ul>
    )
}