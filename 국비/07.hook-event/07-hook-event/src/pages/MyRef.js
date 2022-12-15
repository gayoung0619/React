import React from "react";
import MyBox from "../components/MyBox";

const MyRef = () => {
  const myDname = React.useRef();
  const myLoc = React.useRef();
  const myResult = React.useRef();

  const myBoxRef = React.useRef();

  return (
    <div>
      <h2>MyRef</h2>
      <h3>ref 기본 사용 방법</h3>

      {/* 미리 준비한 컴포넌트 참조변수와 html 태그 연결 */}
      <div>
        <label htmlFor="dname">학과명 : </label>
        <input type="text" rel={myDname} id="dname" />
      </div>
      <div>
        <label htmlFor="dname">학과위치 : </label>
        <input type="text" rel={myLoc} id="loc" />
      </div>
      <p>
        입력값 확인: <span ref={myResult}></span>
      </p>

      <button
        onClick={(e) => {
          console.log(myDname);
          console.log(myLoc);

          const dname = myDname.current.value;
          const loc = myLoc.current.value;

          myResult.current.innerHtml = dname + ", " + loc;
        }}
      >
        클릭
      </button>

      <hr />

      <h3>컴포넌트에 ref 적용하기</h3>

      {/* ref 참조변수를 컴포넌트에 전달한다. */}
      <MyBox ref={myBoxRef} />
      <button
        type="button"
        onClick={() => {
          myBoxRef.current.style.backgroundColor = "#f00";
        }}
      >
        Red
      </button>

      <button
        type="button"
        onClick={() => {
          myBoxRef.current.style.backgroundColor = "#00f";
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default MyRef;
