import React from 'react'
import { Link } from 'react-router-dom';
import './Cards.css'
import YoutubeEmbed from "./YoutubeEmbed";
function CardItemsContent(props, embedId) {
  return (
    <>
    <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <YoutubeEmbed  className='cards__item__img' embedId={props.embedId}   />
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </Link>
    </li>
</>
  )
}

export default CardItemsContent