/* eslint-disable max-lines-per-function */
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import Display from './Display';

const TabsContainer = (context) => {
	const { setState, state, state: { index }} = context;

	return <Box>
		<TabContext
			textColor="secondary"
			indicatorColor="secondary"
			value={ index }
		>
			<Tabs

				onChange={ (event, val) => setState({
					...state,
					index: val,
				}) }
			>
				<Tab label="All" value="1"/>
				<Tab label="Active" value="2"/>
				<Tab label="Completed" value="3"/>
			</Tabs>
			<TabPanel value={ index }>
				<Display { ...context }/>
			</TabPanel>

		</TabContext>
	</Box>;
};

export default TabsContainer;
