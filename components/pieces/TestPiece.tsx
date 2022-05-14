import React, {useState} from 'react';
import styles from './piece.module.css';

interface PropsType {
    init_x: number;
    init_y: number;

}

const TestPiece = ({init_x, init_y,...props}:PropsType) =>{
    const h = 50;
    const w = 50;
    
    const [position, updatePosition] = useState([init_x - w/2, init_y - h/2]);
    console.log(init_x, init_y);
    
    const drag = (e:React.DragEvent) =>{    
        updatePosition([e.clientX - w/2, e.clientY - h/2]);
        
    }
    const dragEnd = (e:React.DragEvent)=>{
        updatePosition([init_x - w/2, init_y - h/2]);
    }
    return(
        <div className={styles.test} style={{
            left: position[0],
            top: position[1],
            height: h,
            width: w,
            position: "absolute"
        }}
            draggable={true}
            onDrag={drag}
            onDragEnd={dragEnd}
        >

        </div>
    );
}
export default TestPiece;