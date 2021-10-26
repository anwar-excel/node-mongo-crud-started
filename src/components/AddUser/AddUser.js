import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={ } >
                <input type="time" name="" id="" ref={nameRef} />
                <input type="email" name="" id="" ref={emailRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;