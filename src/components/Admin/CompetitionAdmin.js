import React, { useState } from 'react'
import SelectEvent from './SelectEvent'
import AdminResults from './AdminResults'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import TabPanel from '../TabPanel'
import AdminStream from './AdminStream'

export default function CompetitionAdmin({ match }) {
	const [value, setValue] = useState('events')
	const onChange = (_, newVal) => {
		setValue(newVal)
	}
	return (
		<>
			<AppBar position='static' color='primary'>
				<Tabs value={value} onChange={onChange} aria-label=''>
					<Tab label='Events' value={'events'} />
					<Tab label='Results' value={'results'} />
					<Tab label='Stream' value={'stream'} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={'events'}>
				<SelectEvent competitionId={match.params.competitionId} />
			</TabPanel>
			<TabPanel value={value} index={'results'}>
				<AdminResults competitionId={match.params.competitionId} />
			</TabPanel>
			<TabPanel value={value} index='stream'>
				<AdminStream competitionId={match.params.competitionId} />
			</TabPanel>
		</>
	)
}
