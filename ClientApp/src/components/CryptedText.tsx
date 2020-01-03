// CryptedText and DecryptedText are the same and will be merged
// into the one component. I just learning react and don't have so much experience right now.
import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { mapStateToProps, actionCreators } from '../store/cryptedtext/cryptedtext';

type TextProps = {
  text: string,
  changeText: Function,
}
class CryptedText extends Component<TextProps> {
  state = {
    cryptText: '',
  }
  render() {
    const {
      text,
      changeText,
    } = this.props;
    const keyUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({
        cryptText: e.currentTarget.value,
      });
      changeText(e.currentTarget.value);
    }
    return (
      <div className="crypted-text">
        <Label for="cryptedText">Crypted text:</Label>
        <Input id="cryptedText" type="textarea" rows="3" defaultValue={text} onKeyUp={keyUpHandler}></Input>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(CryptedText as any);