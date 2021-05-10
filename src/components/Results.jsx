import React from 'react';

const Results = props => {
    const {first, last, email, password, cpassword} = props.data;
    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cpassword}</p>
        </div>
    );
};


export default Results;