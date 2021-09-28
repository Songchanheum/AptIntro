import React, { Suspense } from 'react';
import { Route, Router } from 'react-router-dom';
import Header from 'common/component/Header';
import './App.css';
import axios from 'axios';

const Component = React.LazyExoticComponent;

const Main = React.lazy(() => import('./main/container/MainContainer'));
const Menu1 = React.lazy(() => import('./main/container/Menu1'));
const Menu2 = React.lazy(() => import('./main/container/Menu2'));
const Introduce = React.lazy(() => import('./main/component/Introduce'));

function check(props) {
    return <Component />;
  }

function App({ customHistory }) {
    
    axios.defaults.baseURL = '/project';
    axios.defaults.headers.common["Request-Type"] = "AJAX";
  return (
    <>
      <Router history={customHistory}>
        <Suspense fallback={<></>}>
            <Route
                path={`${process.env.PUBLIC_URL}/main`}
                render={(renderProp) => (
                    <Main {...{
                        ...renderProp
                    }}></Main>
                )}
            />
            <Route
                path={`${process.env.PUBLIC_URL}/menu1`}
                render={(renderProp) => (
                    <Menu1 {...{
                        ...renderProp
                    }}></Menu1>
                )}
            />
            <Route
                path={`${process.env.PUBLIC_URL}/menu2`}
                render={(renderProp) => (
                    <Menu2 {...{
                        ...renderProp
                    }}></Menu2>
                )}
            />
            <Route
                path={`${process.env.PUBLIC_URL}/intro`}
                render={(renderProp) => (
                    <Introduce {...{
                        ...renderProp
                    }}></Introduce>
                )}
            />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
