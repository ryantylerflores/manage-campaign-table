import axios from 'axios';
import { CLONE_CAMPAIGN, DELETE_CAMPAIGN, CAMPAIGN_ERROR } from './types';

export const cloneCampaign = payload => async dispatch => {
  try {
    // let res  = await axios.post(url, payload);
    dispatch({
      type: CLONE_CAMPAIGN,
      // payload: res.data
    })
  } catch (e) {
    dispatch({ type: CAMPAIGN_ERROR, payload: 'Campaign Action Did Not Work'})
  }
}

export const deleteCampaign = payload => async dispatch => {
  try {
    // let res = await axios.patch(url, payload);
    dispatch({
      type: DELETE_CAMPAIGN,
      // payload: res.data
    })
  } catch(e) {
    dispatch({ type: CAMPAIGN_ERROR, payload: 'Campaign Action Did Not Work'})
  }
}