import React from "react";
import TeamCard from "../../components/teamCard/TeamCard";

function TeamPage() {
  const CardData = [
    {
      id: 0,
      name: "Afzal",
      imageUrl:
        "https://media.istockphoto.com/id/1433582180/photo/corporate-man-with-futuristic-hologram-analytics-for-work-planning-and-strategy-for-success.jpg?s=612x612&w=0&k=20&c=x04UKlZIcERLHWrCJhEbqp_InkfHfHjFcCo3d7y1tBY=",
      title: "Trainer",
      description:
        " A frontend trainer at Hi-Tech Mento, focused on teaching modern web development skills like HTML, CSS, JavaScript, and popular frameworks to help students build responsive and interactive user interfaces.",
    },
    {
      id: 1,
      name: "Mujeeb",
      imageUrl:
        "https://media.istockphoto.com/id/1433582180/photo/corporate-man-with-futuristic-hologram-analytics-for-work-planning-and-strategy-for-success.jpg?s=612x612&w=0&k=20&c=x04UKlZIcERLHWrCJhEbqp_InkfHfHjFcCo3d7y1tBY=",
      title: "Trainer",
      description:
        " A frontend trainer at Hi-Tech Mento, focused on teaching modern web development skills like HTML, CSS, JavaScript, and popular frameworks to help students build responsive and interactive user interfaces.",
    },
    {
      id: 2,
      name: "Shuaib",
      imageUrl:
        "https://media.istockphoto.com/id/1433582180/photo/corporate-man-with-futuristic-hologram-analytics-for-work-planning-and-strategy-for-success.jpg?s=612x612&w=0&k=20&c=x04UKlZIcERLHWrCJhEbqp_InkfHfHjFcCo3d7y1tBY=",
      title: "Trainer",
      description:
        " A frontend trainer at Hi-Tech Mento, focused on teaching modern web development skills like HTML, CSS, JavaScript, and popular frameworks to help students build responsive and interactive user interfaces.",
    },
    {
      id: 3,
      name: "Sahibe",
      imageUrl:
        "https://media.istockphoto.com/id/1433582180/photo/corporate-man-with-futuristic-hologram-analytics-for-work-planning-and-strategy-for-success.jpg?s=612x612&w=0&k=20&c=x04UKlZIcERLHWrCJhEbqp_InkfHfHjFcCo3d7y1tBY=",
      title: "Trainer",
      description:
        "A frontend trainer at Hi-Tech Mento, focused on teaching modern web development skills like HTML, CSS, JavaScript, and popular frameworks to help students build responsive and interactive user interfaces.",
    },
    {
      id: 4,
      name: "Anil",
      imageUrl:
        "https://media.istockphoto.com/id/1433582180/photo/corporate-man-with-futuristic-hologram-analytics-for-work-planning-and-strategy-for-success.jpg?s=612x612&w=0&k=20&c=x04UKlZIcERLHWrCJhEbqp_InkfHfHjFcCo3d7y1tBY=",
      title: "Trainer",
      description:
        " A frontend trainer at Hi-Tech Mento, focused on teaching modern web development skills like HTML, CSS, JavaScript, and popular frameworks to help students build responsive and interactive user interfaces.",
    },
    {
      id: 5,
      name: "Afzal",
      imageUrl:
        "https://media.istockphoto.com/id/1433582180/photo/corporate-man-with-futuristic-hologram-analytics-for-work-planning-and-strategy-for-success.jpg?s=612x612&w=0&k=20&c=x04UKlZIcERLHWrCJhEbqp_InkfHfHjFcCo3d7y1tBY=",
      title: "Trainer",
      description:
        " A frontend trainer at Hi-Tech Mento, focused on teaching modern web development skills like HTML, CSS, JavaScript, and popular frameworks to help students build responsive and interactive user interfaces.",
    },
  ];
  return (
    <>
      <div className="py-5">
        <h1 className="text-center my-5 bg-primary text-light py-2">
          Our Team
        </h1>
        <div className="container">
          <div className="row g-4">
            {CardData.map((myData, index) => (
              <div className="col-md-4">
                <TeamCard data={myData} key={myData.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPage;
