import React from 'react';
import CourseTag from './CourseTag';
import { css } from '@emotion/react';

const CourseTags = () => {
    return (
        <div css={css`
            display: flex;
            align-items: center

        `}>
            <CourseTag>business</CourseTag>
            <CourseTag>digital-nomad</CourseTag>
            <CourseTag>marketing</CourseTag>
        </div>
    );
}

export default CourseTags;
