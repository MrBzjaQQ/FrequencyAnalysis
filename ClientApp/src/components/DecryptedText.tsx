// CryptedText and DecryptedText are the same and will be merged
// into the one component. I just learning react and don't have so much experience right now.
import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { mapStateToProps, actionCreators } from '../store/decryptedtext/decryptedtext';

type TextProps = {
  text: string
  changeText: Function,
}
class DecryptedText extends Component<TextProps> {
  state = {
    decryptText: '',
  }
  render() {
    const {
      text,
      changeText,
    } = this.props;
    return (
      <div className="crypted-text">
        <Label for="decryptedText">Decrypted text:</Label>
        <Input id="decryptedText" type="textarea" rows="3" defaultValue={text} readOnly={true}></Input>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(DecryptedText as any);