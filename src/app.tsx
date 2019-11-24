import React from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './css/app.module'
import './global'

function App() {
  return <h2 className={styles.red}>This is our Reactivengst application!</h2>
}

export default hot(App)