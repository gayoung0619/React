// react 기본 패키지 참조 (필수)
import React from 'react';
import MySubComponent from "./MySubComponent";


// 함수형 컴포넌트 정의
const MyComponent2 = () => {
    return(
        <div>
            <h2>virtual DOM</h2>
            <p>This is React MyComponent</p>

            <MySubComponent/>
            <MySubComponent/>
            <MySubComponent/>
            <MySubComponent/>
        </div>
    );
};
export default MyComponent2;