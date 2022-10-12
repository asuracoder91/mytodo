import styled, { createGlobalStyle } from "styled-components";
import CategoriesSelect from "./components/CategoriesSelect";
import CreateCategory from "./components/CreateCategory";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  body{
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const MainBoard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 15fr 1fr;
	grid-template-rows: 2fr 20fr 2fr;
	background-color: #f1f6f5;
`;

const InBoard = styled.div`
	display: flex;
`;

const Head = styled.h1`
	font-family: "Noto Sans CJK KR";
	font-weight: 500;
	font-size: 2.5em;
	letter-spacing: -0.05em;
	line-height: 44px;
	text-align: left;
	color: #1a2e35;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	select {
		width: 160px;
		background-color: white;
		color: #767676;
		font-size: 12px;
		font-weight: 400;
		border-radius: 4px;
		background: #fff;
		border: 1px solid #e5e5ec;
		height: 40px;
	}
	form {
		display: flex;
		flex-direction: row;

		input {
			font-family: "Noto Sans CJK KR";
			font-weight: 300;
			font-size: small;
			width: 200px;
			text-align: center;
			background-color: ${(props) => props.theme.bgColor};
			border-bottom: 1px solid #707070;
			height: 40px;
		}
		button {
			width: 83px;
			height: 32px;
			background-color: #6b9b7d;
			color: white;
			font-size: 12px;
			font-weight: 400;
			border-radius: 10px;
			justify-content: center;
			align-self: center;
			display: flex;
			line-height: 32px;
		}
	}
`;

const BackBoard = styled.div`
	background-color: #d9e5e4;
	border-radius: 10px;
	width: 100%;
	height: 100%;
	justify-content: center;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<MainBoard>
				<InBoard />
				<Head>
					<CategoriesSelect />
					THINGS TO DO
					<CreateCategory />
				</Head>
				<InBoard />
				<InBoard />
				<BackBoard>
					<ToDoList />
				</BackBoard>
				<InBoard />
				<InBoard />
				<InBoard />
				<InBoard />
			</MainBoard>
		</>
	);
}

export default App;
