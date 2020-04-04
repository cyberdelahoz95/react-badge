import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filterBadges, setFilterBadges] = React.useState(badges);
    // useMemo is a hook that allows ot store the result of a function for a given parameters to optimize the performance
    React.useMemo(() => {
        const result = badges.filter((badge) => {
            return (
                badge.firstName.toLowerCase().includes(query.toLowerCase()) ||
                badge.lastName.toLowerCase().includes(query.toLowerCase())
            );
        });
        setFilterBadges(result);
    }, [badges, query]);

    return { query, setQuery, filterBadges };
}

const BadgeList = ({ badges }) => {
    const { query, setQuery, filterBadges } = useSearchBadges(badges);
    if (filterBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter</label>
                    <input
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create New Badge
                </Link>
            </div>
        );
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter</label>
                <input
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <ul className="list-unstyled">
                {filterBadges.map((badge) => {
                    return (
                        <li
                            className="BadgesListItem media mb-3"
                            key={badge.id}
                        >
                            <Link
                                className="text-reset text-decoration-none"
                                to={`/badges/${badge.id}`}
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
        </div>
    );
};

export default BadgeList;
