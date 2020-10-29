import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import Navbar from '../../components/Navbar';

import 'firebase/auth';
import { Typography } from '@material-ui/core';

function getDocumentPPI() {
  var elem = document.createElement('div');
  elem.style.width = '1in';
  document.body.appendChild(elem);
  var ppi = elem.offsetWidth;
  document.body.removeChild(elem);
  return ppi;
}

console.log('PPI:::', getDocumentPPI());

const ppi = getDocumentPPI();

const getWidthInPixels = (paperWidth: number) => {
  const pixelWidth = paperWidth * ppi;
  return pixelWidth;
};
const getHeightInPixels = (paperHeight: number) => {
  const pixelHeight = paperHeight * ppi;
  return pixelHeight;
};

const height = getHeightInPixels(11);
const width = getWidthInPixels(8.5);

const History = (props: RouteComponentProps) => {
  const localStorageUID = localStorage.getItem('bulletinUID');

  if (!localStorageUID) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <div>
        <Navbar {...props} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10vh',
          backgroundColor: '#e0e0e0',
          zoom: '100%',
        }}
      >
        <Typography variant="h2">HISTORY PAGE</Typography>
      </div>
    </div>
  );
};

export default History;