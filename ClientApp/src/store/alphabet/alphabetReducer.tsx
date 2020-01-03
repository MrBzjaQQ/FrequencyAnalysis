import { Action, Reducer } from 'redux';
import { AppThunkAction } from '..';


interface IAlphabetAction {
  type: 'ALPHABET_CHANGED';
  text: String;
}

export interface IAlphabetState {
  text: String;
}

export const mapStateToProps = (state: IAlphabetState) => ({
	alphabet: state.text,
});

export const actionCreators = {
  onTextChanged: (text: String) : AppThunkAction<IAlphabetAction> => (dispatch) => {
    dispatch({type: 'ALPHABET_CHANGED', text});
  }
}

export const reducer: Reducer < IAlphabetState > = (state: IAlphabetState | undefined, incomingAction: Action | undefined): IAlphabetState => {
  if (state === undefined) {
    return {
      text: '',
    };
  }
  const action = incomingAction as IAlphabetAction;
  if (action) {
    return {
      text: action.text,
    }
  }
  return {
    text: state.text,
  }
}