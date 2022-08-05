import { useState, useEffect } from "react";
import Header from "./Header";
import "./postview.css";


const Post = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    fetch("https://instaclone-backend-shivam.herokuapp.com/post/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        // console.log(postData)       
        setAllPost(postData);
        // console.log(postData[0].postImage)
      });
  }, []);

  let monthNo = new Date().getMonth();
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date =
    new Date().getDate() +
    " " +
    month[monthNo] +
    " " +
    new Date().getFullYear();

  return (
    <>
      <Header/>
      <div>
        {allPost.map((ele) => {
          return (
            <div className="imagepost">
              <div >
                <div>
                  <label >
                    <b>{ele.name}</b>
                  </label>
                  <br />
                  <label style={{ color: "gray" }}>{ele.location}</label>
                </div>
                <img src="3DT.jpeg" style={{ height: "50px" }} alt="" className="dt" />
              </div>
              <div>
          
                <img
                  src={ele.postImage}
                  style={{ width: "100%",height:"50%"}}
                  alt=""
                />
              </div>
              <div >
                <img src="like.jpeg" style={{ width: "100px" }} alt="" />
                <div className="date">
                <label
                >
                  {date}
                </label></div>
              </div>
              <div className="likes">
                <label
                >
                  {ele.likes} likes
                </label>
              </div>
              <div >
                <p className="desc">{ele.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};


export default Post;