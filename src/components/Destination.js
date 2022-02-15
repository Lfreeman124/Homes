import React from "react";

export default function Destination(props) {
  return (
    <div>
      <img src={props.place.imageUrl} className="main--image" />
      <div className="info">
        <div className="location--nav">
          <img src="" className="map--icon" />
          <h4>{props.place.location}</h4>
          <a href={props.place.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.place.title}</h1>
        <div className="dates">
          <h2>
            {props.place.startDate} - {props.place.endDate}
          </h2>
        </div>
        <p>{props.place.description}</p>
      </div>
    </div>
  );
}
