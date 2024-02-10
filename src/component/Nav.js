import React from "react"
import './Nav.css'
import logoimg from './Anhar_logo-removebg-preview.png'
import mes_icon from './message-icon.jpg'
import {Link} from 'react-scroll'

function showTaskbar(){

    const burgar = document.querySelector('.burgar');
    const shower = document.querySelector('.shower')
    
    return(

    burgar.style.display = 'flex',
    shower.style.display = 'none'


    );
}
function closeTaskbar(){

    const burgar = document.querySelector('.burgar');
    const shower = document.querySelector('.shower')
   
    return(

    burgar.style.display = 'none',
    shower.style.display = 'flex'
    

    );
}
export default function Nav(){
    
    return(
        <>
            <nav className="navbar">
                 <img className="logoadj" src= {logoimg}/>
                <div className="contentadj"><Link activeClass="active" to="container" spy = {true} smooth ={true} offset={-100} duration={500}>Home</Link>
                 <Link activeClass="active" to="container-intro" spy = {true} smooth ={true} offset={525} duration={500}>About</Link> 
                 <Link activeClass="active" to="conatiner-proj" spy = {true} smooth ={true} offset={-2} duration={500}>Projects</Link>
                </div> 
                <a className="buttonadj" href="mailto:hjugwani@gmail.com"><button> <img src={mes_icon}/> Contact me</button></a>
                <a className="hider"onClick={showTaskbar} href="#"><svg xmlns="http://www.w3.org/2000/svg" className="shower" height="28" viewBox="0 -960 960 960" width="28"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
                <div className="burgar"><svg onClick={closeTaskbar} xmlns="http://www.w3.org/2000/svg"className="crosser" c height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg><a>Home</a> <a>About</a> <a>Projects</a>
                </div>
            </nav>
        </>
    )
}
