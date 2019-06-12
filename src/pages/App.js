import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

import ManageCampaign from '../components/ManageCampaign';

const styles = theme => createStyles({
	root: {
		paddingTop: theme.spacing.unit * 20,
		margin: '0 auto',
		padding: '0 16px',
		[theme.breakpoints.up('md')]: {
			width: '940px',
		},
		[theme.breakpoints.up('lg')]: {
			width: '1170px',
		},
		[theme.breakpoints.up('xl')]: {
			width: '1440px',
		}
	},
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
				<Grid container>
					<ManageCampaign />
				</Grid>
			</div>
    )
  }
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);