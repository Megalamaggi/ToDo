import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';
import Display from './Display';

const TabsContainer = (context) => {
	const { setState, state, state: { tabsValue, toDos }} = context;

	return <Box>
		<TabContext value={ tabsValue }>
			<TabList
				onChange={ (event, value) => setState({
					...state,
					tabsValue: value,
				}) }
			>
				<Tab label={ `All ${ toDos.length } ` } value="1"/>
				<Tab label="Active" value="2"/>
				<Tab label="Completed" value="3"/>
			</TabList>
			<TabPanel value={ tabsValue }> <Display { ...context }/> </TabPanel>
		</TabContext>
	</Box>;
};

export default TabsContainer;
