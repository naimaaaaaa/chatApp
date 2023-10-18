// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage=(props)=> 
{
    // const chatProps=useMultiChatLogic
    //  (
    // '4d5454bc-588a-4475-9b79-180ba195e0f9',
    //  props.user.username,
    //  props.user.secret
    //  );
     
    
    return(
        <div style={{height: '100vh'}}> 
        {/* <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...ChatsPage} style={{height: '100'}}/> */}

        <PrettyChatWindow 
        projectId='4d5454bc-588a-4475-9b79-180ba195e0f9'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}/>

       
        </div>
    )
       
    
       
    
    
}
export default ChatsPage