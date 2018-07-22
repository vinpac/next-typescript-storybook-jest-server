import NextApp, { Container, AppComponentProps } from 'next/app'
import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import withRedux from '~/redux/with-redux'
import { RootState } from '~/redux/root-reducer'

interface AppProps extends AppComponentProps {
  readonly store: Store
}

class App extends NextApp<AppProps> {
  render() {
    const { Component, store, pageProps } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

const mapStateToProps = ({ user }: RootState) => ({
  authToken: user ? user.name : null,
})
export default withRedux(mapStateToProps)(App as any)
