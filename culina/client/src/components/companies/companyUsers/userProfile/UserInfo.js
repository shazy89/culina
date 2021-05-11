import React from "react";
import { Card } from "react-bootstrap";

import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
const UserInfo = ({ profileInfo: { avatar } }) => {
  console.log(avatar);
  return (
    <Card className="user__personal user__shadow">
      <Card.Body className="font__size-3">
        <Card.Title className="font__size-3">
          {" "}
          <CloudinaryImage
            className="user__image"
            cloudName="dytheecsk"
            publicId={avatar}
          >
            <Transformation width="140" crop="scale" />
          </CloudinaryImage>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
