
import { Header } from "./components/Header"
import styles from "./App.module.css"
import './global.css'
import { Card } from "./components/Card"
import { Banner } from "./components/Banner"
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.ordened}>
        <main>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </main>
        <Banner/>
        <Banner/>
      </div>
    </div>
  )
}
