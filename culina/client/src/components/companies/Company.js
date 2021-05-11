import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { Button } from "react-bootstrap";
import Back from "../reusable/Back";
import CompanyInfo from "./CompanyInfo";
import CompanyLeft from "./CompanyLeft";
import { Edit, X } from "react-feather";
import Alert from "components/layout/Alerts";
import CompanyRight from "./CompanyRight";
import ProjectsTable from "./project/ProjectsTable";
import AllUsersModal from "./companyUsers/AllUsersModal";

const Company = ({
  match: {
    params: { id }
  },
  loading,
  history,
  alerts,
  companies
}) => {
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [showSelectedUserInfo, setShowSelectedUserInfo] = useState(false);
  const findCompany = companies.find((company) => id === company._id);
  const className = edit ? "display_form" : "";

  if (!findCompany) {
    return <Redirect to="/companies" />;
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="company">
          <div>
            <Back history={history} />
          </div>
          {alerts && <Alert />}
          <div className="features__">
            <Link
              to={{
                pathname: `/companies/${id}/user/new`,
                state: { companyName: findCompany.name }
              }}
            >
              <Button className="culina__link">New User</Button>
            </Link>
          </div>

          <div className="company__display">
            <div className="company__display--box-1">
              <CompanyLeft
                edit={edit}
                setEdit={setEdit}
                company={findCompany}
                className={className}
              />
            </div>
            <div className="company__display--box-2">
              <CompanyRight
                id={id}
                company={findCompany}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />

              <div className="projects__table u-margin-top-3 slider_company__header">
                <h2>{findCompany.name} Projects</h2>
                <ProjectsTable projects={findCompany.projects} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateProps = (state) => ({
  loading: state.company.loading,
  companies: state.company.companies,
  alerts: state.alert
});

export default connect(mapStateProps)(Company);

//   <Button className="u-margin-top btn-view_all" variant="link">
//   View All
//   </Button>
