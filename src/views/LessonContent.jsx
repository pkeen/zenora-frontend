import React from 'react';

const LessonContent = ({lesson}) => {
    return (
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.text}</p>
        </div>
    );
}

export default LessonContent;
