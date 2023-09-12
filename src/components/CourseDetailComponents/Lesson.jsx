import React from 'react';
import Typography from '../Typography/Typography';

const Lesson = ({lesson, idx}) => {
    return <Typography variant="h4">{idx} Lesson: {lesson.title}</Typography>;
}

export default Lesson;
