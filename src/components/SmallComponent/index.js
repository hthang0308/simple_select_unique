import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.css';
export default function MySelect(props) {
	const { options, selectedList, setSelectedList } = props;
	let optionsWithoutSelected = options.filter((option) => !selectedList.includes(option));
	const [oldSelectedValue, setOldSelectedValue] = useState(null);
	if (oldSelectedValue && !optionsWithoutSelected.includes(oldSelectedValue)) optionsWithoutSelected = [oldSelectedValue, ...optionsWithoutSelected];
	const defaultValue = optionsWithoutSelected[0];
	useEffect(() => {
		setSelectedList([...selectedList, defaultValue].filter((item) => item !== oldSelectedValue));
		setOldSelectedValue(defaultValue);
	}, []);
	return (
		<>
			<Select
				style={{ width: 120 }}
				defaultValue={defaultValue}
				onSelect={(value) => {
					if (oldSelectedValue === value)
						return;
					setSelectedList([...selectedList, value].filter((item) => item !== oldSelectedValue));
					setOldSelectedValue(value);
				}}
				options={optionsWithoutSelected.map((option) => ({
					label: option,
					value: option,
				}))}
			/>
			<br />
		</>
	);
}