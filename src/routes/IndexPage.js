import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'

function IndexPage() {
  return (
      <div>
        <Header />
        <Nav />
      </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
