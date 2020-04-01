import React from "react";

import "./styles/BadgeNew.css";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../images/platziconf-logo.svg";

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        }
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img
                        className="BadgeNew__hero-image img-fluid"
                        src={header}
                        alt="Logo"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={
                                    this.state.form.firstName || "First Name"
                                }
                                lastName={
                                    this.state.form.lastName || "last Name"
                                }
                                twitter={this.state.form.twitter || "Twitter"}
                                jobTitle={
                                    this.state.form.jobTitle || "Job Title"
                                }
                                email={this.state.form.email || "Email"}
                                avatarUrl="https://pbs.twimg.com/profile_images/1073709379646615552/TJBGcGV5_400x400.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
