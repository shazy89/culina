import React, { useState, useEffect } from "react";
import api from "utils/api";
import Back from "components/reusable/Back";
import Spinner from "components/layout/Spinner";
import UserPersonalInfo from "./userProfile/UserInfo";
const UserProfile = ({
  match: {
    params: { id, userId }
  },
  history
}) => {
  const [profileInfo, setprofileInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await api.get(`/companies/${id}/user/${userId}`);
      setprofileInfo(res.data);
      setLoading(false);
    };
    fetchUserInfo();
  }, [id, userId]);
  console.log(profileInfo);
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1> HEY {profileInfo.firstName}</h1>
          <UserPersonalInfo profileInfo={profileInfo} />
        </div>
      )}
    </>
  );
};

export default UserProfile;
