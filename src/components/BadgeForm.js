import React from "react";

class BadgeForm extends React.Component {
    // state = {};

    /* handleChange = e =>{
        this.setState({
            form: {
                [e.target.name]: e.target.value,
            }
        })
    }*/
    render() {
        return (
            <div className="">
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={this.props.formValuesfirstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name Name</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={this.props.formValueslastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.props.formValuesemail}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="jobTitle"
                            value={this.props.formValuesjobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            className="form-control"
                            name="twitter"
                            value={this.props.formValuestwitter}
                        />
                    </div>

                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
