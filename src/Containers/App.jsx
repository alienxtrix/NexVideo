import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/app.scss'

const API = 'http://localhost:3000/initalState/';

const App =()=>{
    const initialState = useInitialState(API);

    return(
        <div>
            <Header/>
            <Search/>
            {
                initialState.mylist.lenght>0 && 
                <Categories name="lista">
                <Carousel>
                    <CarouselItem />
                </Carousel>
                </Categories>
            }
            <Categories name="Tendencias"/>
            <Carousel>
            {
                initialState.trends.map(item=>
                    
                    <CarouselItem key={item.id} {...item}/>
                    )
            }
                
            </Carousel>
            

            <Categories name="Originales de Kooper"/>
            <Carousel>
            {
                initialState.originals.map(item=>
                <CarouselItem key={item.id}{...item}/>
                )
            }
                
            </Carousel>
            
            <Footer/>
        </div>
    )
}

export default App;