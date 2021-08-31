import React from "react";
import Home from "./pages/form/Home";
import ListRecord from "./pages/detail/ListRecord";
import AppInquiry from "./pages/detail/AppInquiry";
import NotFoundPage from "./pages/detail/NotFoundPage";
import AppAnalysis from "./pages/detail/AppAnalysis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Admin from "./pages/admin/Admin";
import View from "./pages/detail/View";
import AnswerForm from "./pages/detail/AnswerForm";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create-incident">
            <Home />
          </Route>
          <Route path="/update/:id">
            <AnswerForm />
          </Route>
    
          <Route path="/view/:id">
            <View />
          </Route>
          <Route path="/basvuru-analiz">
            <AppAnalysis />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/basvuru-list">
            <ListRecord />
          </Route>
          <Route path="/basvuru-sorgula">
            <AppInquiry />
          </Route>
          <Route path="/basvuru-notFound">
            <NotFoundPage />
          </Route>
          <Route>
            <Redirect to="/create-incident" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
