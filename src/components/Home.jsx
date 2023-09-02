import React from "react";

function Home(props) {
  return (
    <div>
      <h2> {props.name}</h2>
      <img src={props.avatar} width={"50"} height={"50"} />
      <h3>Name : {props.userName}</h3>
      <h3>Company : {props.userCompany} </h3>
      <h3>Followers : {props.userFollowers} </h3>
    </div>
  );
}
export default Home;
