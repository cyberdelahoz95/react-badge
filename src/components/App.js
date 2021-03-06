import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";

import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetail from "../pages/BadgeDetailContainer";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Badges} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route
                        exact
                        path="/badges/:badgeId/edit"
                        component={BadgeEdit}
                    />
                    <Route
                        exact
                        path="/badges/:badgeId"
                        component={BadgeDetail}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
