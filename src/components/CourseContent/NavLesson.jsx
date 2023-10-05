import React from 'react';
import NavButton from './NavButton';

const NavLesson = ({lesson, handleSelectContent}) => {

    const handleClick = () => {
        handleSelectContent(lesson.id, "lesson")
    }
    // onClick={() => handleSelectContent(lesson.id, "lesson")}
    return (
        <NavButton handleClick={handleClick} value={lesson.title}>
            {lesson.title}
        </NavButton>
    );
}

export default NavLesson;
