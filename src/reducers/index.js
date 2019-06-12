import { combineReducers } from 'redux';

import ManageCampaignReducer from './ManageCampaignReducer';

const rootReducer = combineReducers({
  campaignList: ManageCampaignReducer
});

export default rootReducer;
