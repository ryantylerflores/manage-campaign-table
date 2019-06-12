import { CLONE_CAMPAIGN, DELETE_CAMPAIGN } from '../actions/types';

export default (state={},action) => {
  switch(action.type) {
    case CLONE_CAMPAIGN:
        return {
            ...state,
            Data: [...state.Data, action.payload.Data]
        }

    case DELETE_CAMPAIGN:
        return {
            Data: [
                ...state,
                action.payload.Data
            ]
        }

    default:
      return {
        ...state,
        cardHover: false,
        Data:
          [
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "WINBIGTODAY",
                  NAME: "Sweepstakes Entry",
                  ID: 175410,
                  GROUPNAME: "",
                  TEMPLATETYPE: 0,
                  TEMPNAME: "Opt-In",
                  ISFINISHED: 1
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "Fire Sale",
                  ID: 175411,
                  GROUPNAME: "Best Customers",
                  TEMPLATETYPE: 1,
                  TEMPNAME: "Blast",
                  ISFINISHED: 1
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "Favorite Color",
                  ID: 175412,
                  GROUPNAME: "User Acceptance Group",
                  TEMPLATETYPE: 2,
                  TEMPNAME: "Survey",
                  ISFINISHED: 1
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "XENOMORPH",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "Bishop The Android",
                  ID: 175413,
                  GROUPNAME: "USCSS Nostromo",
                  TEMPLATETYPE: 3,
                  TEMPNAME: "Advanced",
                  ISFINISHED: 1
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "Got Lazy",
                  ID: 175414,
                  GROUPNAME: "",
                  TEMPLATETYPE: 0,
                  TEMPNAME: "Opt-In",
                  ISFINISHED: 0
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "Support Hotline",
                  ID: 175414,
                  GROUPNAME: "",
                  TEMPLATETYPE: 0,
                  TEMPNAME: "Chat",
                  ISFINISHED: 1
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "New Customer Drip",
                  ID: 175414,
                  GROUPNAME: "",
                  TEMPLATETYPE: 0,
                  TEMPNAME: "Drip",
                  ISFINISHED: 1
              },
              {
                  TOTALINQUEUE: 0,
                  MLPID: "",
                  TOTALSEND: 0,
                  TEMPLATEID: 0,
                  KEYWORD: "HELPMESENPAI",
                  TOTALCHAT: 0,
                  TOTALSMS: "0",
                  INCONTACTQUE: "0",
                  MLPURL: "",
                  INPROCESS: 0,
                  SCHEDULE: "",
                  NAME: "Best Bot of All Time",
                  ID: 175414,
                  GROUPNAME: "",
                  TEMPLATETYPE: 0,
                  TEMPNAME: "Advanced",
                  ISFINISHED: 0
              }
          ]

      }
  }
}