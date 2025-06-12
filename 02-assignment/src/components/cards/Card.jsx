import React from "react";

function Card(props) {
  return (
    <>
      <div class="card p-2  d-flex align-items-center justify-content-center ">
        <img src={props.image} alt={props.title} className="w-100" />
        <div class="card-body ">
          <h3 class="card-title">{props.heading}</h3>
          <p class="card-text ">{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
