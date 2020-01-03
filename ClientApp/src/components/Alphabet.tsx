import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import { IAlphabetState, mapStateToProps, actionCreators } from '../store/alphabet/alphabet';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { HtmlAttributes } from 'csstype';

type AlphabetInputProps = {
  text: string,
  changeText: Function,
}

class AlphabetInput extends Component<AlphabetInputProps> {
  state = {
    alphabetText: 'абвгдежзиклмнопрстуфхцчшщыьэюя',
  };
  render() {
    const {
      text,
      changeText,
    } = this.props;
    const keyUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({
        alphabetText: e.currentTarget.value,
      });
      changeText(e.currentTarget.value);
    }
    return (
      <div className="alphabet-wrap">
        <Label for="alphabetInput">Your alphabet:</Label>
        <Input id="alphabetInput" type="text" name="alphabet" defaultValue={this.state.alphabetText} onKeyUp={(e) => keyUpHandler(e)}></Input>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  actionCreators,
)(AlphabetInput as any);