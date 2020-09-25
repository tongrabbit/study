import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] =  useState(['남자 코트 추천','강남 우동 맛집','청담동 메이크업샵']);
  // state  장점 : 웹이 앱처럼 동작하게 만들고 싶어서, HTML이 자동 렌더링
  let [따봉, 따봉변경] = useState(0);
   function 제목바꾸기(){
     var newArray = [...글제목]; //...은 신문법이고 딥카피 할때 이용, 새로운 복사본 생성
     newArray[0] = '여자코트 추천';
     글제목변경(newArray);
   }  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue',fontSize:'30px'}}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
