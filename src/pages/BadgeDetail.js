import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteModal from "../components/DeleteBadgeModal";

import "./styles/BadgeDetail.css";
import confLogo from "../images/platziconf-logo.svg";

const useIncreaseCount = max => {
    const [count, setCount] = React.useState(0);
    if (count > max) {
        setCount(0);
    }
    return [count, setCount];
};

const BadgeDetail = ({
    badge,
    onCloseModal,
    onOpenModal,
    onDeleteBadge,
    modalIsOpen
}) => {
    // const [count, setCount] = React.useState(0); // this function returns an array with 2 elements, the state and the function to modify the state, also the function receives the initial state
    const [count, setCount] = useIncreaseCount(4); // same as above but with custom hook
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge {...badge} />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                    className="btn btn-primary mr-4"
                                >
                                    Likes {count}
                                </button>
                                <Link
                                    className="btn btn-primary mb-4"
                                    to={`/badges/${badge.id}/edit`}
                                >
                                    Edit
                                </Link>
                            </div>

                            <div>
                                <button
                                    onClick={onOpenModal}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                                <DeleteModal
                                    onClose={onCloseModal}
                                    onDeleteBadge={onDeleteBadge}
                                    isOpen={modalIsOpen}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BadgeDetail;
