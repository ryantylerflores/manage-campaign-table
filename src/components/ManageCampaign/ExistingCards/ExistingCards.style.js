const styles = {
  avatarBlue: {
    margin: '5px 5px',
    color: '#FFF',
    backgroundColor: '#18FFFF',
    fontSize: 40,
    width: '1.5em',
    height: '1.5em',
    border: '3px solid white'
  },
  avatarPurple: {
    margin: '5px 5px',
    color: '#FFF',
    backgroundColor: '#EA80FC',
    fontSize: 40,
    width: '1.5em',
    height: '1.5em',
    border: '3px solid white'
  },
  card: {
    width: 225,
    height: 250,
    borderRadius: '25px',
    margin: '0 auto',
    cursor: 'pointer',
    overflow: 'visible',
    margin: '10px auto'
  },
  cardHover: {
    width: 225,
    height: 250,
    borderRadius: '25px',
    margin: '0 auto',
    cursor: 'pointer',
    overflow: 'visible',
    margin: '10px auto',
    boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.15)'
  },
  cardContent: {
    padding: '0 16px 16px 16px'
  },
  cardHeader: {
    padding: '16px 16px 0 16px',
    height: 40,
    position: 'relative'
  },
  underline: {
    textDecoration: 'none'
  },
  surveyCardBackground: {
    background: 'linear-gradient(45deg, #8BC34A 30%, #CDDC39 90%)'
  },
  cardNotCompleted: {
    background: 'linear-gradient(45deg, #9E9E9E 30%, #bdbdbd 90%)',
  },
  blastCardBackground : {
    background: 'linear-gradient(45deg, #FF5252 30%, #E57373 90%)'
  },
  advancedCardBackground:  {
    background: 'linear-gradient(45deg, #6A1B9A 30%, #BA68C8 90%)'
  },
  optInCardBackground: {
    background: 'linear-gradient(45deg, #EF6C00 30%, #FFA726 90%)'
  },
  chatCardBackground: {
    background: 'linear-gradient(45deg, #6078EA 30%, #17EAD9 90%)'
  },
  dripCardBackground: {
    background: 'linear-gradient(45deg, #5E2563 30%, #65799B 90%)'
  },
  pos: {
    position: 'relative',
  },
  white: {
    color: 'white'
  },
  grey: {
    color: '#616161'
  },
  surveyIcon: {
    background: `url('/assets/outline_poll_white_48dp.png')`,
    height: 10
  },
  chip: {
    color: '!important linear-gradient(45deg, #ff1744 30%, #ff8a65 90%)',
    border: '!important 1px solid linear-gradient(45deg, #ff1744 30%, #ff8a65 90%)'
  },
  moreIconButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid darkGray',
    transform: 'scale(0)',
    transition: '0.25s'
  },
  moreIconButtonHover: {
    position: 'absolute',
    top: -10,
    right: -10,
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid darkGray',
    transform: 'scale(1.0)',
    transition: '0.5s',
    transitionDelay: '0.5s'
  },
};

export default styles;