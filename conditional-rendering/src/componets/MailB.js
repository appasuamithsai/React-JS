import React from 'react';

const MailB = (props) => {
    return <div>

    <>Hello</>

    {/* { props.message.length>0 && <h3>You have  {props.message.length} Message. </h3>} */}

    { props.message.length>0 ? <h3>You have  {props.message.length} Message. </h3> : <h4>Sorry No Messages</h4>}
        

    </div>;
}

export default MailB;