import React from 'react'
import CardItemsDream from './CardItemsDream'
import './Cards.css'

function CardsMember() {
  return (
    <div className='cards'>
    <h1>Get to know 7DREAM</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItemsDream
                    src='https://0.soompi.io/wp-content/uploads/2021/06/20082538/Mark2.jpg'
                    text="Canadian rapper, singer, songwriter, dancer, and host of Korean descent. "
                    label='MARK LEE'
                    path='/services'
                />
                  <CardItemsDream
                    src='https://i.pinimg.com/originals/7c/75/fa/7c75fa6f2198b200d2bc47c451b432bd.jpg'
                    text="Chinese idol based in South Korea. The lead vocalist of NCT Dream."
                    label='HUANG RENJUN'
                    path='/services'
                />
                    <CardItemsDream
                    src='https://0.soompi.io/wp-content/uploads/2021/06/24082013/nct-dream-jeno.jpeg'
                    text="South Korean rapper, dancer, singer, and songwriter."
                    label='JENO LEE'
                    path='/services'
                />
                  <CardItemsDream
                    src='https://0.soompi.io/wp-content/uploads/2021/06/20082459/Haechan2.jpg'
                    text="South Korean singer and dancer. The main vocalist and the lead dancer of NCT Dream."
                    label='HAECHAN LEE'
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                    <CardItemsDream
                    src='https://0.soompi.io/wp-content/uploads/2021/06/20082236/Jaemin1.jpg'
                    text="South Korean rapper, singer, dancer, songwriter and actor."
                    label='JAEMIN NA'
                    path='/services'
                />
                  <CardItemsDream
                    src='https://0.soompi.io/wp-content/uploads/2021/06/20082309/Chenle1.jpg'
                    text="Chinese singer, songwriter, and actor currently based in South Korea. "
                    label='ZHONG CHENLE'
                    path='/services'
                />
                    <CardItemsDream 
                    src='https://i.pinimg.com/originals/fe/49/dd/fe49ddb8ba5d841ff5dfa66ee0a76a38.jpg'
                    text="South Korean rapper, singer, songwriter, dancer, and actor."
                    label='JISUNG PARK'
                    path='/services'
                />
            </ul>
    

        </div>
    </div>

</div>
  )
}

export default CardsMember