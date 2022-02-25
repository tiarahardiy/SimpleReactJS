import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these DREAM Destination</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/nct-dream-chewing-gum-mv-2.jpg?itok=lNLW50JF&mtime=1485473365'
                        text="So big it's about to burst My heart is chewing gum"
                        label='Chewing Gum'
                        path='/services'
                    />
                      <CardItem 
                        src='https://www.dreamers.id/img_artikel/58nct-dream-my-first-and-last.jpg'
                        text="There won't be a second chance
                        You're my last love "
                        label='My First and Last'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='https://thebiaslistcom.files.wordpress.com/2017/08/nct-dream-we-young.jpg'
                        text="So what? We hot, we young"
                        label='We Young'
                        path='/services'
                    />
                      <CardItem 
                        src='https://www.hellokpop.com/wp-content/uploads/2018/03/2018-03-07-01.20.30-1.jpg'
                        text="We be screaming, Go! (Go!)
                        Go, go (Go!) "
                        label='GO'
                        path='/services'
                    />
                        <CardItem 
                        src='https://smentcorporation.s3.amazonaws.com/upload/editor/presscenter/2018/09/06/5odJym0algb2a7066e648f4cc490f893523c9b780euDOPEpFYHSxjlpkzij.kd4.jpg'
                        text="Let's end this track and go to the next stage
                        We go up"
                        label='We Go Up'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                      <CardItem 
                        src='https://www.kibrispdr.org/dwn/0/foto-nct-dream-boom.jpg'
                        text="I become your dreams and a path to it (Path to it)
                        I can put your dream in your hands "
                        label='BOOM'
                        path='/services'
                    />
                        <CardItem 
                        src='https://akcdn.detik.net.id/visual/2020/04/20/954b207b-9e72-4152-8ade-09d7e6271b9e_169.png?w=650'
                        text="This empty feeling on the street (ridin' and rollin' oh baby)
                        Fill it with heat reloading"
                        label='Ridin'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                      <CardItem 
                        src='https://awsimages.detik.net.id/community/media/visual/2021/04/28/nct-dream-1_43.jpeg?w=700&q=90'
                        text="Hot sauce deeply dip that, eh
                        You follow me and twist that, eh "
                        label='Hot Sauce'
                        path='/services'
                    />
                         <CardItem 
                        src='https://awsimages.detik.net.id/community/media/visual/2021/06/28/nct-dream_43.jpeg?w=700&q=90'
                        text="Don't worry about anything
                        It'll be alright, hello future"
                        label='Hello Future'
                        path='/services'
                    />
                        <CardItem 
                        src='https://i.pinimg.com/originals/ae/98/4f/ae984f9bf5648a39d137492f42f73038.jpg'
                        text="COMING SOON "
                        label='2nd Album'
                        path='/services'
                    />
                </ul>

            </div>
        </div>

    </div>
  )
}

export default Cards