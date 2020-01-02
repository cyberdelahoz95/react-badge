import React from 'react';

import './styles/BadgeNew.css';

import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
    state={
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
        }
    };
    handleChange = e =>{        
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
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
            </div>
        )
    }
}

export default BadgeNew;