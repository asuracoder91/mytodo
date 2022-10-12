import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme } from "./theme";
import "./assets/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={darkTheme}>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
