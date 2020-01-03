import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as Alphabet from './alphabet/alphabet';
import * as CryptedText from './cryptedtext/cryptedtext';
import * as DecryptedText from './decryptedtext/decryptedtext';

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
    alphabet: Alphabet.IAlphabetState | undefined,
    cryptedText: CryptedText.ICryptedTextState | undefined
    decryptedText: DecryptedText.IDecryptedTextState | undefined
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    alphabet: Alphabet.reducer,
    cryptedText: CryptedText.reducer,
    decryptedText: DecryptedText.reducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}