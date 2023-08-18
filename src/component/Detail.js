import { useParams } from "react-router-dom";
import { DAYLIST } from "./Daylist";
import "./Detail.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


const Detail = () => {

  const {id} = useParams();
  const [favorCheck, setFavorCheck] = useState(false);
  const item = DAYLIST.find(data => data.id === +id);

  useEffect(()=>{
    let favorite = localStorage.getItem('favor');

    if(favorite) {
      favorite = JSON.parse(favorite);
      
      let temp = favorite.find((f) => f.title === item.title);
      setFavorCheck(temp);
    } else {

    } 
  }, [])

  return (
    <div className="Detail">
      <div className="dt">
        <div className="im">
          <img src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'900px', height:'900px'}} />
          <i onClick={() => {
            if (favorCheck) { // true일떼 삭제시키기
              setFavorCheck(false);
              let favorite = localStorage.getItem('favor');
              favorite = JSON.parse(favorite);
              let idx;
              favorite.forEach((f, i) => {
                if(f.title === item.title) {
                  idx =i;
                }
              });
              
              favorite.splice(idx,1);
              localStorage.setItem('favor', JSON.stringify(favorite));

            } else {
              setFavorCheck(!favorCheck);
              let favorite = localStorage.getItem('favor');
              
              if(!favorite) {
                localStorage.setItem('favor', JSON.stringify([{img : item.img, title : item.title}]));
              } else {
                favorite = JSON.parse(favorite);
                favorite = [...favorite, {img : item.img, title : item.title}];
                localStorage.setItem('favor', JSON.stringify(favorite));
              }
            }
       
          }}>
            {
              favorCheck ? 
              <i className="fa-solid fa-star star" style={{color:'yellow'}}></i>
              : <i className="fa-regular fa-star star" style={{color:'yellow'}}></i>
            }
          </i>
        </div>
        <div className="m">
          <h3>제목</h3>
          <h4>{item.title}</h4>
          <h3>장르</h3>
          <h4>{item.genre}</h4>
          <h3>작가</h3>
          <h4>{item.author}</h4>
          <h3>줄거리</h3>
          <h4>{item.story}</h4>
        </div>
      </div>
    </div>  
  )
}
//     <Container className="Detail">
//       <Row>
//         <Col className="im">
//           {/* <div className="im"> */}
//             <img src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'100%', aspectRatio:'1'}} />
//               <i onClick={() => {setFavorCheck(!favorCheck)}}>
//                 {
//                   favorCheck ? 
//                   <i class="fa-solid fa-star star" style={{color:'yellow'}}>{alert("즐겨찾기 완료")}</i>
//                   : <i class="fa-regular fa-star star" style={{color:'yellow'}}></i>
//                 }
//               </i>

//           {/* </div>         */}
//         </Col>
//         <Col className="m">
//         {/* <div className="m"> */}
//                 <h3>제목</h3>
//                 <h4>{item.title}</h4>
//                 <h3>장르</h3>
//                 <h4>{item.genre}</h4>
//                 <h3>작가</h3>
//                 <h4>{item.author}</h4>
//                 <h3>줄거리</h3>
//                 <h4>{item.story}</h4>
//               {/* </div> */}
//         </Col>
//       </Row>
//     </Container>
//   )
// }

export default Detail;