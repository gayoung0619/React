import React from 'react';
import propTypes from "prop-types";


const MyPropTypesSub = ({name, age, hobby}) => {
    return(
        <div>
            <h3>MyPropTypesSub</h3>
            <p>
                안녕하세요, 제 이름은 {name} 이고, 나이는 {age}세 입니다.
            </p>
            <p>
                {hobby && (<span>취미는 {hobby} 입니다.</span>)}
            </p>
        </div>
    );
};

MyPropTypesSub.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    hobby: propTypes.string.isRequired
}
export default MyPropTypesSub;