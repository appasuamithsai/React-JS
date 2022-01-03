import React from 'react';

const Login = (props) => {
    return <div>
    {props.isLoggedIn ? <button className='btn btn-sm btn-danger my-3'>Logout</button> : <button className='btn my-3 btn-sm btn-success'>Login</button>}

    </div>;
}

export default Login;