import React, { useState, useEffect } from "react";
import api from "utils/api";
import Back from "components/reusable/Back";
const UserProfile = ({
  match: {
    params: { id, userId }
  },
  history
}) => {
  const [profileInfo, setprofileInfo] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await api.get(`/companies/${id}/user/${userId}`);
      setprofileInfo(res.data);
    };
    fetchUserInfo();
  }, []);
  return (
    <>
      <div>
        <div>
          <Back history={history} />
        </div>
        <h1> HEY {profileInfo.firstName}</h1>
      </div>
    </>
  );
};

export default UserProfile;
