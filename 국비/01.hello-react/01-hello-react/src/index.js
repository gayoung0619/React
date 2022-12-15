/**
 * 프로그램 시작점
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함
 */

// 리액트의 기본을 구성하는 패키지 참조
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);