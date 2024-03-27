import './App.css';
import Profile from './Profile/Profile.jsx';
import user from '../userData.json';
import FriendList from './Friends/FriendList.jsx';
import list from '../friends.json';
import TransactionHistory from './Transaction/TransactionHistory.jsx';
import transactions from '../transactions.json';


export default function App() {
  return (
    <>
     <Profile userData={user}/>
     <FriendList friendlist={list}/>
     <TransactionHistory items={transactions}/>
    </>
  );
}