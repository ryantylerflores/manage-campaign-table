import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  Card,
  Typography,
  Menu,
  MenuItem,
  Fade,
  CardHeader,
  IconButton,
  CardContent,
  Chip,
  withStyles,
  Grid,
  Avatar
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions/ManageCampaignActions';

import styles from './ExistingCards.style';

class ExistingCards extends React.Component {
  state = {
    anchorEl: null,
    isHovered: false
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = option => {
    alert(option);
    this.setState({
      anchorEl: null,
    });
  };

  renderBanner = () => {
    if (this.props.completed === 0) {
      return (
        <Chip 
          label="You're almost there!"
          color="secondary"
        />
      )
    } else {
      return (
        <br />
      )
    }
  }

  renderIcon = () => {
    const { type } = this.props;
    switch(type) {
      case 'Survey':
        return <img src='/assets/outline_poll_white_48dp.png' />
      case 'Opt-In':
        return <img src='/assets/outline_check_circle_48dp.png' />
      case 'Advanced':
        return <img src='/assets/outline_blur_on_white_48dp.png' />
      case 'Blast':
        return <img src='/assets/outline_email_white_48dp.png' />
      case 'Chat':
        return <img src='/assets/outline_chat_white_48dp.png' />
      case 'Drip':
        return <img src='/assets/outline_bubble_chart_white_48dp.png' />
    }
  }

  renderCardBackgrounds = () => {
    const { classes, completed, type} = this.props;
    switch(type) {
      case 'Survey':
        if (completed === 1) {
          return classes.surveyCardBackground 
        }
      case 'Opt-In':
        if (completed === 1) {
          return classes.optInCardBackground 
        }
      case 'Advanced':
        if (completed === 1) {
          return classes.advancedCardBackground 
        }
      case 'Blast':
        if (completed === 1) {
          return classes.blastCardBackground 
        }
      case 'Chat':
        if (completed === 1) {
          return classes.chatCardBackground 
        }
      case 'Drip':
        if (completed === 1) {
          return classes.dripCardBackground 
        }
      default:
        return classes.cardNotCompleted
    }
  }

  renderCardBody = () => {
    const { classes } = this.props;
    let list;
    let keyword;
    if(this.props.list !== '') {
      list = <Avatar className={classes.avatarPurple}>L</Avatar>
    }
    if(this.props.keyword !== '') {
      keyword = <Avatar className={classes.avatarBlue}>K</Avatar>
    } 
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.white}>{this.props.title}</Typography>
        <Typography variant="subheading" className={classes.white}>Type: {this.props.type}</Typography>
      
        <Grid container justify="center" alignItems="center">
          { keyword }
          { list }
        </Grid>
      </React.Fragment>
    )
  }
  
  render() {
    const { classes, type } = this.props;
    const { anchorEl, isHovered } = this.state;
    const open = Boolean(anchorEl);
    let moreIcon;

    if(isHovered) {
      moreIcon = <IconButton
                  onClick={this.handleClick}
                  aria-owns={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  style={{ backgroundColor: 'white' }}
                  className={classes.moreIconButton}
                >
                  <MoreHorizIcon 
                    variant="contained"
                    // className={classes.white}
                  />
                </IconButton>
    }
    
    return (
      <Card 
        className={`${isHovered ? classes.cardHover : classes.card} ${this.renderCardBackgrounds()}`}
        onMouseEnter={ () => this.setState({ isHovered: true }) }
        onMouseLeave={ () => this.setState({ isHovered: false}) }
      >
        <CardHeader 
          className={classes.cardHeader}
          avatar={
            <div className={classes.white}>
              { this.renderBanner() }
            </div>
          }
          action={
            <React.Fragment>
              <IconButton
                onClick={this.handleClick}
                aria-owns={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                style={{ backgroundColor: 'white' }}
                className={isHovered ? classes.moreIconButtonHover : classes.moreIconButton}
              >
                <MoreHorizIcon 
                  variant="contained"
                  // className={classes.white}
                />
              </IconButton>
              {/* { moreIcon } */}
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={() => this.handleClose('Report')}>Report</MenuItem>
                <MenuItem onClick={() => this.props.cloneCampaign(this.props.key)}>Clone</MenuItem>
                <MenuItem onClick={() => this.props.deleteCampaign(this.props.index)}>Delete</MenuItem>
              </Menu>
            </React.Fragment>
          }
        >
        </CardHeader>
        {/* <Link to={`/${type}`} className={classes.underline}> */}
          <CardContent className={classes.cardContent}>
            <div className={`${classes.pos}`}>
              { this.renderIcon() }
            </div>
            { this.renderCardBody() }
          </CardContent>
        {/* </Link> */}
      </Card>
    );
  } 
}

ExistingCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(null,actions)(ExistingCards));