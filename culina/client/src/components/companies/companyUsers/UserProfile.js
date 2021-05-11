import React, { useState, useEffect } from "react";
import api from "utils/api";
import PropTypes from "prop-types";

const UserProfile = ({
  match: {
    params: { id, userId }
  }
}) => {
  const [profileInfo, setprofileInfo] = useState("");
  console.log(profileInfo);
  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await api.get(`/companies/${id}/user/${userId}`);
      setprofileInfo(res.data);
    };
    fetchUserInfo();
  }, []);
  return <div>HEY USER</div>;
};

UserProfile.propTypes = {};

export default UserProfile;
