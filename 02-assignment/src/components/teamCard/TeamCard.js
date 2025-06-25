import React from "react";
function TeamCard(props) {
  return (
    <div className=" cards ">
      <div className=" card border-0 text-center">
        <div className="card-image ">
          <img
            src={props.data.imageUrl}
            alt=""
            className="w-100 rounded-top-4"
          />
        </div>
        <div className="card-info p-3 bg-primary text-light card-body rounded-bottom-4">
          <h3>
            <span className="fs-4">Name : </span>
            {props.data.name}
          </h3>
          <h4>
            <span className="fs-5">Profession : </span>
            {props.data.title}
          </h4>
          <p>
            <span className="fs-5 fw-semibold">About : </span>
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
