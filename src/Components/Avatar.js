import React from 'react';

function Avatar(props) {
    return  <img 
        src={props.img}
        alt="avatar_img"
        resizeMode="contain"
    />
}

export default Avatar;