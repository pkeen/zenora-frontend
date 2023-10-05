import React from 'react';

const LessonContent = ({lesson}) => {

    const css = {
        flex: '1'
    }

    return (
        <div css={css}>
            <h2>{lesson.title}</h2>
            <p>{lesson.text}</p>
        </div>
    );
}

export default LessonContent;
