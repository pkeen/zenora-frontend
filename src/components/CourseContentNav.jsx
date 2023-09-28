import React from 'react';
import CourseContentNavSlot from './CourseContentNavSlot';

const CourseContentNav = ({courseSlots, className, handleSelectContent}) => {
    return (
        <div className={className}>
            {courseSlots.map(slot => <CourseContentNavSlot slot={slot} handleSelectContent={handleSelectContent}/>)}
        </div>
    );
}

export default CourseContentNav;
