import React, { Suspense } from 'react';
import { Route, Router } from 'react-router-dom';
import Header from 'common/component/Header';
import './App.css';
import axios from 'axios';

const Component = React.LazyExoticComponent;

const Main = React.lazy(() => import('./main/container/MainContainer'));
const Menu1 = React.lazy(() => import('./main/container/Menu1'));
const Menu2 = React.lazy(() => import('./main/container/Menu2'));

function check(props) {
    return <Component />;
  }

function App({ customHistory }) {
    
    axios.defaults.baseURL = '/project';
    axios.defaults.headers.common["Request-Type"] = "AJAX";
  return (
    <>
      <Router history={customHistory}>
        <Header />
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
