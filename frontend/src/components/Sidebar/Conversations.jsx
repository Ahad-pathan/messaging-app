import useGetConversations from "../../Hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const {conversations} = useGetConversations()
  console.log("convetions",conversations)
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((item,index)=>{ return <Conversation key={index} 
      conversation={item}
      lastIdx={index === conversations.length - 1 } /> })}
    </div>
  );
};
export default Conversations;
