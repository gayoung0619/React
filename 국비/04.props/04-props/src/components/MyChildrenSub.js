import React from 'react';

import propTypes from 'prop-types'

const MyChildrenSub = ({width, height, children}) => {
    /* CSS 속성값을 변수화 할 경우 JSON 객체로 구성한다 */
    const myStyle = {
        width: width + 'px',
        height: height + 'px',
        border: '5px solid #d5d5d5',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#eeeeee'
    };
    return(
        <div>
            <h3>MyChildrenSub</h3>
            <div style={myStyle}>{children}</div>
        </div>
    );
};

// 속성들에 대한 타입 정의
MyChildrenSub.propTypes = {
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    children: propTypes.string
};

MyChildrenSub.defaultProps = {
    width: 300,
    height: 100,
    children: '내용이 없습니다.'
};

export default MyChildrenSub;