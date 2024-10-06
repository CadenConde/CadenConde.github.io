import React from 'react';
import { useEffect } from 'react';
import { COLORS } from '../constants/constants'
import { AiOutlineJava, AiOutlineJavaScript, AiOutlinePython } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbSql, TbBrandReactNative  } from "react-icons/tb";
import { FaPhp, FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";


const componentsContext = require.context('../imgs', false, /\.(png|jpe?g|svg|webp)$/);

export const ProjCard = (props) => {
    const imagePath = componentsContext(`./${props.src}`);
    const icons = [];
    const projLink = [];
    projLink.push(<a href={props.gitLink} className='Proj-Link'><div className='Proj-Link-Box'>View Project</div></a>)

    const size = 45;

    if(props.projID === '1') { 
        icons.push(<FaReact size={size} color={COLORS.accent} style={{paddingRight: '4px'}} />)
        icons.push(<FaNodeJs size={size} color={COLORS.accent}/>)
    }            
    if(props.projID === '2') { 
        icons.push(<AiOutlineJava size={size} color={COLORS.accent}/>)
    }   
    if(props.projID === '3') { 
        icons.push(<TbSql size={size} color={COLORS.accent} style={{paddingRight: '4px'}}/>);
        icons.push(<FaPhp size={size} color={COLORS.accent} style={{paddingRight: '4px'}}/>)
        icons.push(<AiOutlineJavaScript size={size} color={COLORS.accent} />)
    }      
    if(props.projID === '4') { 
        icons.push(<AiOutlinePython size={size} color={COLORS.accent}/>)
    }      
    if(props.projID === '5') { 
        icons.push(<FaHtml5 size={size} color={COLORS.accent} style={{paddingRight: '4px'}} />);
        icons.push(<AiOutlineJavaScript size={size} color={COLORS.accent} style={{paddingRight: '4px'}}/>)
        icons.push(<IoLogoCss3 size={size} color={COLORS.accent}/>)
    }      
    if(props.projID === '6') { 
        icons.push(<TbBrandReactNative size={size} color={COLORS.accent} style={{paddingRight: '4px'}}/>)
        icons.push(<FaReact size={size} color={COLORS.accent} />)
        
        projLink.pop(0);
        projLink.push(<a className='Proj-Link'><div className='Proj-Link-Box Disabled'>View Project</div></a>)
    }      


    return (
        <div className='Proj-Card'>
            <img className='Proj-Thumbnail' src={imagePath} alt="Thumbnail of Project"/>
            <div className='Project-Card-Title'>{props.title}</div>
            <p className='Project-Card-Content'>{props.children}</p>
            <div className='Proj-Card-Footer'>
                {projLink}
                <div className='proj-languages'>
                    {icons}
                </div>
            </div>
        </div>
    )
}
