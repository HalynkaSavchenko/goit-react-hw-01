import FriendListItem from "./FriendListItem"

export default function FriendList ({friendlist}) {
    return(
        <ul>
            {friendlist.map((friend)=>(
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            )
            )}
        </ul>
    )
}