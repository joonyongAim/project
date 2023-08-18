import "./Favorite.css";

const Favorite = () => {
  
  let favorite = localStorage.getItem('favor');
            
  if(!favorite) {
    return (
      <div className="fa">
        <h1>즐겨찾기에 등록된 목록이 없습니다</h1>
      </div>
    );
  } else {
    favorite = JSON.parse(favorite);
    return (
      <div className="fa">
        <h1>즐겨찾기 목록</h1>
        <div className="l">
        {
          favorite.map((item)=> {
            return (
              <div className="list">
                <div className="li">
                  <img src={process.env.PUBLIC_URL+`/img/${item.img}`} style={{width:'200px', height:'200px'}}/>
                  <p>{item.title}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }


}

export default Favorite;