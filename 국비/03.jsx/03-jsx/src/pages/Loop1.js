import React from 'react';

const Loop1 = () => {
    /* 목록정의 태그를 구성하기 위한 사용자 정의 함수 */
    const createListItems = (count) => {
        // <li>...</li> 단위를 저장할 배열
        let li = [];

        //주어진 count수 만큼 반복
        for(let i=0;i<count;i++){
                // key는 출력되는 값이 아니라 리액트가 식별하기 위한 값
                li.push(<li key={i}>Item {i}</li>);
            }
            return li;
        };

        return(
            <div>
                <h2>Loop1</h2>
                <ul>{createListItems(5)}</ul>
            </div>
        )
    }

    export default Loop1;