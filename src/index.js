import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./redux/configStore";
import App from "./components/app/App";
import './index.css'

const MainApp = () => {
    return(
        <React.StrictMode>
            <Provider store={store}>
                    <App />
            </Provider>
        </React.StrictMode>
    )
}
ReactDOM.render(<MainApp/> ,document.getElementById('root'));