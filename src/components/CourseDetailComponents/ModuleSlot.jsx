import React from 'react';
import Lesson from './Lesson';

const ModuleSlot = ({slot, idx}) => {
    return (
        <div css={{
            paddingLeft: '1rem',
        }}>
            <Lesson lesson={slot.Lesson} idx={idx}/>

        </div>
    );
}

export default ModuleSlot;
