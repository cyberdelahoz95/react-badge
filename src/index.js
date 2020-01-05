import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
//import Badge from './components/Badge';
import Badges from './pages/Badges';

const container = document.getElementById('app');

ReactDOM.render(<Badges />
,
  container
);
 /* <Badge
    firstName="Richard"
    lastName="Kaufman"
    avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
    jobTitle="Frontend Engineer"
    twitter="sparragus"
  />*/