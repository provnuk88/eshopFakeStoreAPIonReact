import React from 'react'
import Card from 'react-bootstrap/Card';
import Products from './Products';



export default function Home() {
  return (
    <div>
 <>
 <Card className="bg-dark text-white">
      <Card.Img className='max-width: 100% height: auto' src="/assets/bg.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style ={{color:'grey'}} >NEW ARRIWED</Card.Title>
        <Card.Text style={{color:'grey'}} >
     TO DAY WE HAVE A BIG SALES 
        </Card.Text>
        <Card.Text style={{color:'grey'}} >УСПЕЙ КУПИТЬ</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </>
      <Products/>

    </div>
  )
}
