import * as React from 'react';
import { useState, useEffect } from 'react';



interface PropTypes {
onClick?: (e:React.SyntheticEvent)=> void
style?: {}
}

const style:{
    [index:string]: React.CSSProperties
} = {
    default: {
        height: 20,
        width: 100,
        border: 1
    }
}

const Button = ({onClick, style, ...props}:React.PropsWithChildren<PropTypes>) =>{

    return(
        <button style={style}onClick={onClick}>
            {props.children ? props.children : "Text"}
        </button>
    )

}

export default Button;