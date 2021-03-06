import React, { useState } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		overflow: 'auto',
	},
	list: {
		height: '400',
		textAlign: 'center',
	},
}))

export default function CompetitorList({
	onClick,
	competitors,
	page,
	total,
	registered,
}) {
	const classes = useStyles()
	const [queryCompetitors, setQueryCompetitors] = useState(
		competitors.slice(100 * (page - 1), page * 100)
	)
	React.useEffect(() => {
		setQueryCompetitors(competitors.slice(100 * (page - 1), 100 * page))
	}, [page, competitors])
	return (
		<Paper className={classes.paper}>
			<List
				className={classes.list}
				subheader={
					<ListSubheader>{`${total} Competitors`}</ListSubheader>
				}
			>
				{/* <ListItem className={classes.list}>
					<TextField
						value={query}
						onChange={handleSearchChange}
						fullWidth={true}
						label='Search'
						id='outlined-basic'
					></TextField>
				</ListItem> */}
				{queryCompetitors.map((competitor) => (
					<ListItem
						button
						onClick={(e) => onClick(e, competitor)}
						key={competitor.id}
						style={{
							textAlign: 'center',
							backgroundColor:
								competitors[0].id === competitor.id &&
								registered
									? blue[200]
									: '',
						}}
					>
						<ListItemAvatar>
							<Avatar
								style={{
									width: 60,
									height: 60,
								}}
								alt={competitor.name}
								src={competitor.avatar}
							/>
						</ListItemAvatar>
						<ListItemText
							primary={competitor.name}
							secondary={
								competitor.wcaId
									? competitor.wcaId
									: competitor.id
							}
						/>
					</ListItem>
				))}
			</List>
		</Paper>
	)
}
