import React from "react";
import logo from "./logo.svg";
import { Button, ConfigProvider } from "antd";
import "./App.less";
import styles from "./App.module.scss";

function App() {
  return (
    <ConfigProvider prefixCls="xxx">
      <div className="App">
        <header className="App-header">
          <Button>12312</Button>
          <img src={logo} className={styles.app} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
