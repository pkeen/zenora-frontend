import React from 'react';
import LessonSlot from './Lesson';
import ModuleSlot from './Module';

const CourseSlot = ({slot, idx}) => {

    return (
        <div css={{
            textAlign: 'left'
        }}>
            {slot.Module ? <ModuleSlot module={slot.Module} idx={idx} /> : <LessonSlot lesson={slot.Lesson} idx={idx} />}
        </div>
    )

    // if (slot.Lesson ) {
    //     return <LessonSlot lesson={slot.Lesson}/>
    // } else {
    //     return <ModuleSlot module={slot.Module} />
    // }
    
}
export default CourseSlot;
