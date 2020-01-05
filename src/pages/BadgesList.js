import React from "react";

class BadgeList extends React.Component {

    render () {
        return (
            <ul className="list-unstyled">
            {this.props.badges.map(badge => {
                return (
                    <li className="media mb-3" key={badge.id}>                        
                            <img 
                                src={badge.avatarUrl} 
                                className="mr-3" 
                                alt={badge.email} 
                            />
                            <div className="media-body">
                                <h5 className="mt-0">{badge.firstName} {badge.lastName}</h5>                                
                            </div>
                    </li>
                )
            })}
        </ul>
        )
    }
}

export default BadgeList;