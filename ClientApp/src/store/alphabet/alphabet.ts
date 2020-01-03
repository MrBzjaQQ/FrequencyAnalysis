import { Action, Reducer } from 'redux';
import { AppThunkAction, ApplicationState } from '..';


interface IAlphabetAction {
  type: 'ALPHABET_CHANGED';
  text: string;
}

export interface IAlphabetState {
  text: string;
}

export const mapStateToProps = (state: ApplicationState) => state.alphabet;

export const actionCreators = {
  changeText: (text: string) : AppThunkAction<IAlphabetAction> => (dispatch) => {
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
  if (action && action.type === 'ALPHABET_CHANGED') {
    return {
      text: action.text,
    }
  }
  return {
    text: state.text,
  }
}