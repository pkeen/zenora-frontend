import CoursesContainer from "./CoursesContainer";

import React, {useState} from 'react';



const TestList = () => {

    const xyRatio = useState([2, 3]);



    const squares = [0, 0, 0, 0, 0, 0, 0, 0]

    return (
        <div>
            
            {squares.map((sq) => {
                return (
                    <div css={{
                        backgroundColor: 'orange',
                        height: `100px`,
                        width: `100px`,
                        border: '1px solid red'
                    }}></div>
                )
            })}

            
        </div>
    );
}

export default TestList;

