import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";

import { Card, Image, Icon } from "semantic-ui-react";
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
    <Card>
      <Image src={photo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{date}</span>
        </Card.Meta>
        <Card.Description className="explanation">
          {explanation}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default AstronomyPhoto;
