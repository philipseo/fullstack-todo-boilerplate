import React, { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';

import apolloClient from '@src/utils/apolloClient';
import Loader from "@components/molecules/Loader";
import BaseContainer from '@components/templates/BaseContainer';

const TodoList = lazy(() => import('@src/pages/TodoList'));

const SuspenseFallback = () => (
  <Loader message="화면을 불러오는 중입니다."/>
);

const App: FunctionComponent = () => (
  <SnackbarProvider>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Suspense fallback={<SuspenseFallback/>}>
          <BaseContainer>
            <Switch>
              <Route exact path="/" component={TodoList} />
            </Switch>
          </BaseContainer>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  </SnackbarProvider>
)
export default App;
