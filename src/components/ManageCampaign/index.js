import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import LoaderHOC from '../../HOC/LoaderHOC/LoaderHOC';
import AddCard from './AddCard/AddCard';
import ExistingCard from './ExistingCards/ExistingCards';

import * as campaignActions from '../../actions/ManageCampaignActions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 'auto 0'
  },
  centerCard: {
    margin: '0 auto'
  }
});

class ManageCampaign extends React.Component {

  componentDidMount() {
    // this.props.loadCampaignList();
  }

  renderCampaignCards = () => {
    return this.props.Data.map((x,index) => {
      if(!x) {
        return <div>Loading...</div>
      } else if(!this.props.navOpen && x) {
        console.log('here');
        return (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3}
            key={index}
          >
            <ExistingCard 
              key={index}
              index={index}
              title={x.NAME}
              keyword={x.KEYWORD}
              list={x.GROUPNAME}
              type={x.TEMPNAME}
              completed={x.ISFINISHED}
            />
          </Grid>
        )
      } else if(this.props.navOpen && x) {
        console.log('there>')
        return (
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={6}
            key={index}
          >
            <ExistingCard 
              key={index}
              index={index}
              title={x.NAME}
              keyword={x.KEYWORD}
              list={x.GROUPNAME}
              type={x.TEMPNAME}
              completed={x.ISFINISHED}
            />
          </Grid>
        )
      }
    })
  }

  renderGrid = () => {
    const { classes } = this.props;
    if(!this.props.navOpen) {
      return (
        <Grid container spacing={24} className={classes.root}>
          <Grid className={classes.centerCard} item xs={12} sm={6} md={3}>
            <AddCard />
          </Grid>
          { this.renderCampaignCards() }
        </Grid>
      )
    } else {
      return(
        <Grid container spacing={24} className={classes.root}>
          <Grid className={classes.centerCard} item xs={12} sm={12} md={6}>
           <AddCard />
          </Grid>
          { this.renderCampaignCards() }
        </Grid>
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      // <Grid container spacing={24} className={classes.root}>
      //   <Grid className={classes.centerCard} item xs={12} sm={6} md={3}>
      //     <AddCard />
      //   </Grid>
      //   { this.renderCampaignCards() }
      // </Grid>
      <React.Fragment>
        { this.renderGrid() }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { 
    // Data: state.campaignList.campaignListItems, 
    // navOpen: state.common.navOpen,

    // Uncomment below for mock data
    Data: state.campaignList.Data
  }
}

export default withStyles(styles)(connect(mapStateToProps,campaignActions)(ManageCampaign));