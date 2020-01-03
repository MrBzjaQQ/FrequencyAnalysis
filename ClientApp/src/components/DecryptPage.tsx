import React, { Component } from 'react';
import Alphabet from './Alphabet';
import CryptedText from './CryptedText';
import DecryptedText from './DecryptedText';

const DecryptPage = () => {
  return (
    <div className="decrypt-page">
      <Alphabet />
      <CryptedText />
      <DecryptedText />
    </div>
  )
}

export default DecryptPage;
