import React from 'react';

const NavLesson = ({lesson, handleSelectContent}) => {
    return (
        <div onClick={() => handleSelectContent(lesson.id, "lesson")} value={lesson.title}>
            {lesson.title}
        </div>
    );
}

export default NavLesson;
