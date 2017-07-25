import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store, { history } from './store';

import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';

injectTapEventPlugin();

const redrerApp = (component) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                {component}
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>
)

ReactDOM.render(redrerApp(<App />), document.getElementById('root'));

registerServiceWorker();
