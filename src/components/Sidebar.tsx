import React from 'react'
import './Sidebar.modules.css'
import  {PencilLine}  from 'phosphor-react'
import { Avatar } from './Avatar';




export function Sidebar ()
{
    return (
    
    <aside className="sidebar">
     <img className="cover"src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50" ></img>
    <div className="profile">
        <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50"
/>
        



    <strong>Lucas Aparecido</strong>
    <span>Web Developer</span>

    <footer>
        
        <a href="#">
        <PencilLine size="20"/>
         Editar seu perfil 
         </a>
    </footer>
    
    </div>
    </aside>
    );
}