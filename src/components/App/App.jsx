import Profile from "../Profile/Profile";
import profileInfo from "../../userData.json";

import FriendsList from "../FriendsList/FriendsList";
import friends from "../../friends.json";

import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <div>
      <Profile info={profileInfo[0]} />
      <br />
      <FriendsList friends={friends} />
      <br />
      <TransactionHistory items={transactions} />
    </div>
  );
}
