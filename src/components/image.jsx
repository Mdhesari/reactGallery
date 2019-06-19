import React from 'react';

export default function Image({image}){
    return <img className="single-photo" src={image.urls.thumb} alt={image.user.first_name} />;
}