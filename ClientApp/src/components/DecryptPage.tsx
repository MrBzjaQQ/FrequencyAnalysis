import React, { Component } from 'react';
import Alphabet from './Alphabet';
import CryptedText from './CryptedText';
import DecryptedText from './DecryptedText';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';

type DecryptPageProps = {
  cryptedText: string,
  alphabet: string,
};

class DecryptPage extends Component<DecryptPageProps> {
  render() {
    const decryptText = () => {
      const {
        alphabet,
        cryptedText,
      } = this.props;
      fetch('/frequency-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          alphabet,
          cryptedText
        })
      }).then(async (response:Response) => {
        console.log(JSON.parse(await response.json()));
      });
    };
    return (
      <div className="decrypt-page">
        <Alphabet />
        <CryptedText />
        <DecryptedText />
        <Button onClick={decryptText}>Decrypt text</Button>
      </div>
    )
  }
}

export default connect(
  (state: ApplicationState) => ({
    alphabet: state.alphabet,
    cryptedText: state.cryptedText,
  }),
)(DecryptPage as any);
