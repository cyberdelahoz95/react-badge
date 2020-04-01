import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
class BadgeList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No encontramos badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create New Badge
                    </Link>
                </div>
            );
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                        <li
                            className="BadgesListItem media mb-3"
                            key={badge.id}
                        >
                            <Link
                                className="text-reset text-decoration-none"
                                to={`/badges/${badge.id}/edit`}
                            >
                                <img
                                    src={badge.avatarUrl}
                                    className="BadgesListItem__avatar mr-3"
                                    alt={badge.email}
                                />
                                <div className="media-body">
                                    <h5 className="mt-0">
                                        {badge.firstName} {badge.lastName}
                                    </h5>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgeList;
