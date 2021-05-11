import React, { useState, useEffect } from "react";
import api from "utils/api";
import Back from "components/reusable/Back";
import Spinner from "components/layout/Spinner";
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
    };
    fetchUserInfo();
    setLoading(false);
  }, [id, userId]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <Back history={history} />
          </div>
          <h1> HEY {profileInfo.firstName}</h1>
        </div>
      )}
    </>
  );
};

export default UserProfile;
