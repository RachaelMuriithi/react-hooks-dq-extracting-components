import React from'react';
import MessageForm from "./MessageForm";
import Display from "./DisplaySection";

function Main ({messages}) {
    return(
        <main>
            <h2> Messages</h2>
            <Display messages= {messages}/>
            <MessageForm/>
        </main>
    )
}
export default Main;