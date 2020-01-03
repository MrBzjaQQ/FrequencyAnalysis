import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { IAlphabetState, mapStateToProps, actionCreators } from '../store/alphabet/alphabetReducer';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { HtmlAttributes } from 'csstype';

type AlphabetInputProps = {
  alphabet: string,
  onTextChanged: Function,
}

class AlphabetInput extends Component<AlphabetInputProps> {
	render() {
		const {
      alphabet,
      onTextChanged,
    } = this.props;
    debugger;
    const keyUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
      debugger;
      const text = e.currentTarget.value;
      onTextChanged(text);
    }
		return (
			<div className="alphabet-wrap">
				<Input type="text" name="alphabet" value={alphabet} onKeyUp={(e) => keyUpHandler(e)}></Input>
			</div>
		)
	}
}




export default connect(
	mapStateToProps,
	actionCreators,
)(AlphabetInput as any);