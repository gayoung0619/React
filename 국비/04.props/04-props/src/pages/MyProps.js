import React from 'react';
import MyPropsSub from '../components/MyPropsSub';
import Meta from '../Meta';

// import Meta from './Meta';

const MyProps = () => {
    return(
        <div>
            <Meta title="MyProps.js" description='여기는 MyProps.js 파일 입니다' />
            <h2>MyProps</h2>

            {/* 컴포넌트에게 props 전달하기 - 문자열 값은 따옴표로 감싼다. 그 외의형식은 '{}'로 감싼다. */}
            <MyPropsSub />
            <MyPropsSub name ='민호' age='19' />
            <MyPropsSub name ='수영' age={21}  />
        </div>
    )
}

export default MyProps;