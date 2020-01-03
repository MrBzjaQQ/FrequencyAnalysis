import { ApplicationState, AppThunkAction } from "..";
import { Action, Reducer } from "redux";

interface ICryptedTextAction {
  type: 'CRYPTED_TEXT_CHANGED';
  text: string;
}

export interface ICryptedTextState {
  text: string;
}

export const mapStateToProps = (state: ApplicationState) => state.cryptedText;
export const actionCreators = {
  changeText: (text: string): AppThunkAction<ICryptedTextAction> => (dispatch) => {
    dispatch({ type: 'CRYPTED_TEXT_CHANGED', text });
  }
}

export const reducer: Reducer<ICryptedTextState> = (state: ICryptedTextState | undefined, incomingAction: Action | undefined) => {
  if (state === undefined) {
    return {
      text: '',
    };
  }
  const action = incomingAction as ICryptedTextAction;
  if (action && action.type === 'CRYPTED_TEXT_CHANGED') {
    return {
      text: action.text,
    }
  }
  return {
    text: state.text,
  }
}