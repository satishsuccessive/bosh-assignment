import React from 'react';

const UserDetails = (props) => {
    const {data} = props;
    console.log(props, 'props');
    return(
        <>
        <img src={data.avatar} style={{width:'70px',borderRadius:'50%'}}/>
        <lable>First Name:</lable> <input type="text" value={data.first_name} />
        <lable>Last Name:</lable> <input type="text" value={data.last_name} />
        <lable>Email:</lable> <input type="text" value={data.email} />
        </>
    )
}

export default UserDetails;