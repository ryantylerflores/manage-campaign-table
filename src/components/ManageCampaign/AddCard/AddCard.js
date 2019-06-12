import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  Card,
  IconButton,
  Typography
 } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import styles from './AddCard.style';

class AddCard extends React.Component {
  state = {
    isHovered: false
  }

  handleAddClick = evt => {
    alert('Add');
  }
  render() {
    const { classes } = this.props;
    const { isHovered } = this.state;

    return (
      <Card 
        className={isHovered ? classes.cardHover : classes.card}
        onMouseEnter={ () => this.setState({ isHovered: true }) }
        onMouseLeave={ () => this.setState({ isHovered: false}) }
      >
        <div 
          className={classes.iconDiv}
          onClick={() => { this.handleAddClick() }}
        >
          <IconButton 
            className={`${classes.white} ${classes.icon}`}
            style={{background: 'transparent'}}
          >
            <AddIcon className={classes.iconSize} />
            <Typography className={classes.white} variant="title">Add Campaign</Typography>
          </IconButton>
        </div>
      </Card>
    );
  }
}

AddCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCard);