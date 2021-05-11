import React, { useState, useEffect } from "react";
import api from "utils/api";
import Back from "components/reusable/Back";
import Spinner from "components/layout/Spinner";
import UserPersonalInfo from "./userProfile/UserInfo";
import UserAdress from "./userProfile/UserAdress";
import UserSalary from "./userProfile/UserSalary";
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
        <div className="u-margin-top user__profile-box">
          <div className="w-50">
            <UserPersonalInfo profileInfo={profileInfo} />
            <UserAdress profileInfo={profileInfo} />
          </div>
          <div className="w-50 padding--1">
            <UserSalary profileInfo={profileInfo} />
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
