import React from 'react';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import MainForm from './components/form/MainForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const { PRODUCT_LABELS } = require('./common/constant');

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap pb-3">
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <h1>{PRODUCT_LABELS["MainPageTitle"]}</h1>
              <p className="lead">
                {PRODUCT_LABELS["MainPageDesc"]}
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="card card-body mx-auto"
                    style={{
                      width: '100%',
                      minHieght: '370px',
                      background: '#EFC96C'
                    }}>
                    <MainForm />
                  </div>
                </div>
                <div className="col-lg-4 mx-auto">
                  <div
                    className=" card  card-body"
                    style={{
                      // minWidth: '120px',
                      // Width: '120px',
                      minHeight: '370px',
                      Height: '370px',
                      background: '#D8D8D8'
                    }}>
                    <p className="lead p-2">120 x 370 (Vertical banner)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
