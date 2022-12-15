import React from "react";

const MyState = () => {
  const [myName, setMyname] = React.useState("");
  const [myPoint, setmyPoint] = React.useState(50);

  const onMyNameChange = (e) => {
    setMyname(e.target.value);
  };

  return (
    <div>
      <h2>MyState</h2>
      <h3>
        {myName}님의점수는 {myPoint}점입니다.
      </h3>
      <hr />
      <div>
        <label htmlFor="myNameInput">이름:</label>
        <input
          id="myNameInput"
          type="text"
          value={myName}
          onChange={onMyNameChange}
        />
      </div>

      <div>
        <label htmlFor="myPointInput">점수:</label>
        <input
          id="myPointInput"
          type="range"
          min="0"
          max="100"
          value={myPoint}
          onChange={(e) => {
            setmyPoint(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
};

export default MyState;
