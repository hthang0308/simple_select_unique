import { Button, Select } from 'antd';
import { useState, useEffect } from 'react';
import './App.css';
import SmallComponent from './components/SmallComponent';
import 'antd/dist/antd.min.css';
export default function App() {
	const [numberOfSelect, setNumberOfSelect] = useState(1);
	const options = ['1', '2', '3', '4', '5', '6', 'Zeus ngu hoc'];
	const [selectedList, setSelectedList] = useState([]);
	return (
		<div className="App">
			<Button onClick={() => setNumberOfSelect(numberOfSelect + 1)}>Add Select</Button>
			<br />
			{[...Array(numberOfSelect)].map((_, index) => (
				<SmallComponent options={options} key={index} selectedList={selectedList} setSelectedList={setSelectedList} />
			))}
		</div>
	);
}