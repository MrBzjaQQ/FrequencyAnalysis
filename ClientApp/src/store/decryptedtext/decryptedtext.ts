import { ApplicationState, AppThunkAction } from "..";
import { Action, Reducer } from "redux";

interface IDecryptedTextAction {
  type: 'DECRYPTED_TEXT_CHANGED';
  text: string;
}

export interface IDecryptedTextState {
  text: string;
}

export const mapStateToProps = (state: ApplicationState) => state.decryptedText;
export const actionCreators = {
  changeText: (text: string): AppThunkAction<IDecryptedTextAction> => (dispatch) => {
    dispatch({ type: 'DECRYPTED_TEXT_CHANGED', text });
  }
}

export const reducer: Reducer<IDecryptedTextState> = (state: IDecryptedTextState | undefined, incomingAction: Action | undefined) => {
  if (state === undefined) {
    return {
      text: '',
    };
  }
  const action = incomingAction as IDecryptedTextAction;
  if (action && action.type === 'DECRYPTED_TEXT_CHANGED') {
    return {
      text: action.text,
    }
  }
  return {
    text: state.text,
  }
}