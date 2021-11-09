import React from "react";
import ReactDOM from "react-dom";
import { register } from "register-service-worker";
import App from "./component/App";
import Login from "./component/Login";
import "./style/styles.css";

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./routes/Header";
import LoadingComponent from "./component/LoadingComponent";
import AuthenticatedComponent from "./component/AuthenticatedComponent";
import NoteDetail from "./component/NoteDetail";
import NoteEdit from "./component/NoteEdit";
//create redux store ->reducers -> 'actions -actionType' | applyMiddleware()
//create redux store ->reducers -> 'actions -actionType' | applyMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//provide this store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadingComponent>
        <div>
          <Header />
          <Switch>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/" component={App} exact={true} />
            <Route path="/:id/edit" component={NoteEdit} exact={true} />
            <Route path="/:id" component={NoteDetail} exact={true} />
            <AuthenticatedComponent>
              <Route path="/" component={App} exact={true} />
            </AuthenticatedComponent>
          </Switch>
        </div>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
register();
