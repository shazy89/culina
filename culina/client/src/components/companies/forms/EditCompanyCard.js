import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const initialState = {
  name: "",
  email: "",
  adress: "",
  phone: "",
  timeZone: "",
  logo: ""
  //  twitter: "",
  //  facebook: "",
  //  linkedin: "",
  //  youtube: "",
  //  instagram: ""
};

const EditCompanyCard = (props) => {
  const [formData, setFormData] = useState(initialState);
  return <div>EDIT ME</div>;
};

EditCompanyCard.propTypes = {};

const mapStateToProps = (state) => ({
  company: state.company
});

export default connect(mapStateToProps)(EditCompanyCard);
