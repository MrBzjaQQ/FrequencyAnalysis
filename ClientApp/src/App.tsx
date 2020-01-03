import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import AlphabetInput from './components/Alphabet'
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import { render } from 'react-dom';
import DecryptPage from './components/DecryptPage';

// export default () => (
//     <Layout>
//         <Route exact path='/' component={Home} />
//         <Route path='/counter' component={Counter} />
//         <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
//     </Layout>
// );

export default () => (
  <Layout>
    <Route exact path="/" component={DecryptPage} />
  </Layout>
);