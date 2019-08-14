import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function AstronomyPhoto() {
  const [photo, setPhoto] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        const photo = response.data;
        console.log(photo);
        setPhoto(photo.hdurl);
        setDate(photo.date);
        setTitle(photo.title);
        setExplanation(photo.explanation);
      });
  }, []);
  return (
    <div className="img-container">
      <h1>NASA Photo of the Day</h1>
      <h2>{date}</h2>
      <h2>{title}</h2>
      <img src={photo} />
      <p>{explanation}</p>
    </div>
  );
}

export default AstronomyPhoto;
