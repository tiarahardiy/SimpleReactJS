import React from 'react'
import CardItemsContent from './CardItemsContent'
import './Cards.css'
import { CSSTransition } from 'react-transition-group';


function CardsContent() {
  return (
    <div className='cards'>
    <h1>Welcome to Dream Creations</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CSSTransition
                timeout={300}
                unmountOnExit
      >
                <CardItemsContent 
                    embedId="fwmvF5ffmhg" 
                    text="So big it's about to burst My heart is chewing gum"
                    path='/services'
                />
            </CSSTransition>
                <CardItemsContent
                    embedId="4pUc7SD0PmU"
                    text="There won't be a second chance
                    You're my last love "
                    path='/services'
                />
                <CardItemsContent
                    embedId="h3aP1cxwCyk"
                    text="So what? We hot, we young"
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                  <CardItemsContent
                    embedId="cD8SYW8rjaQ"
                    text="We be screaming, Go! (Go!)
                    Go, go (Go!) "
                    path='/services'
                />
                    <CardItemsContent
                    embedId="LV1Es22E0RI"
                    text="Let's end this track and go to the next stage
                    We go up"
                    path='/services'
                />
                   <CardItemsContent
                    embedId="X-iJZ0gfKPo"
                    text="I become your dreams and a path to it (Path to it)
                    I can put your dream in your hands "
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                    <CardItemsContent
                    embedId="vofjeJvRT9c"
                    text="This empty feeling on the street (ridin' and rollin' oh baby)
                    Fill it with heat reloading "
                    path='/services'
                />
                  <CardItemsContent
                    embedId="PkKnp4SdE-w"
                    text="Hot sauce deeply dip that, eh
                    You follow me and twist that, eh "
                    path='/services'
                />
                     <CardItemsContent
                    embedId="QPUjV7epJqE"
                    text="Don't worry about anything
                    It'll be alright, hello future"
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                    <CardItemsContent
                    embedId="Px-Pi5UjB40"
                    text="Blow it out candle light, baby
                    It means I'm thankful for everyday you were with me"
                    path='/services'
                />
                  <CardItemsContent
                    embedId="ESVsbCkFvG4"
                    text="If you're waiting for a comeback, hold on
                    I don't need your love"
                    path='/services'
                />
                     <CardItemsContent
                    embedId="QyKe4VXDx5I"
                    text="The time is connected, a sense of awakening
                    Move beyond what you've dreamed of"
                    path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItemsContent
                    embedId="qS7e7FmVRo0"
                    text="We draw a circle in this growing space and become one,"
                    path='/services'
                />
                    <CardItemsContent
                    embedId="UXC9R1KeYuI"
                    text="Everybody, let's sing together
                    Dino ABC! Dino ABC!"
                    path='/services'
                />
                  <CardItemsContent
                    embedId="7zUqvCAJ7po"
                    text="Hot sauce gotta dip that. Have what you disire. ma dish "
                    path='/services'
                />
            </ul>
        </div>
    </div>

</div>
  )
}

export default CardsContent