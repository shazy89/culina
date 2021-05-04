import React from "react";
import { Table } from "react-bootstrap";
import {
  Image as CloudinaryImage,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";
import PropTypes from "prop-types";

const AllUsersTable = ({ info }) => {
  const table = info.map((user, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <th>
          {" "}
          <CloudinaryImage
            className="table--circle__image"
            cloudName="dytheecsk"
            publicId="portfolio/me_ocryct.jpg"
          >
            <Transformation width="80" crop="scale" />
          </CloudinaryImage>
        </th>
        <th>{user.firstName + " " + user.firstName}</th>
      </tr>
    );
  });
  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Employee Name</th>
        </tr>
      </thead>
      <tbody className="font-size-normal">{table}</tbody>
    </Table>
  );
};

AllUsersTable.propTypes = {};

export default AllUsersTable;
