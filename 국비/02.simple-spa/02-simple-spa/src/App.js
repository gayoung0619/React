import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Home from './pages/home'
import About from './pages/about'
import Main from './pages/main'
import DepartmentGet from "./pages/departmentGet"
import DepartmentPath from "./pages/departmentPath"
import Error404 from './pages/error404'

const App = () => {
    return(
      <div>
        <h2>02-simpleSPA</h2>

        {/* 링크 구성 부분 */}
        <nav>
            <Link to="/home">[Home]</Link>
            <Link to="/about">[About]</Link>
            {/* 서브라우팅사용 */}
            <Link to="/main">[Main(SubRoute)]</Link>
            {/* HTTP GET 파라미터를 포함하는 링크 구성 : 쿼리파라미터 -> 값을 전달 */}
            <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
            <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
            {/* PATH 파라미터를 포함하는 링크 구성 : 패스파라미터 -> 폴더인냥 전달 */}
            <Link to="/department_path/201/hello">[전자공학과]</Link>
            <Link to="/department_path/202/world">[기계공학과]</Link>
        </nav>

        <a href='/about'>일반링크</a>

        {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
        <Routes>
            <Route path='/' element={<Home/>} exact={true} />
            <Route path='/about' element={<About/>} />
            {/* 서브라우팅사용 */}
            <Route path='/main/*' element={<Main/>} />
            {/*GET 파라미터 사용*/}
            <Route path='/department_get' element={<DepartmentGet/>} />
            {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다 */}
            <Route path='/department_path/:id/:msg' element={<DepartmentPath/>} />
            {/* path속성없이 Route지정 -> 지정되지 않은 모든 요청에 반응. 단 Routes블록의  */}
            <Route path='/*' element={<Error404/>} />
        </Routes>
      </div>
  )
};

export default App;