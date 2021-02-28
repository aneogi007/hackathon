export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotToken: null,
    //spotToken: 'BQBbsn7cbwyVQ3QYPLCy6Ye8QFMgZ1GRyGKLDqX2hEk91vTCD8l8Yx2s7vvVW30m5wDgbZht_uqbIwbTKtO9FTyyUGlwR--_Wum8UJjhfgz3qtuGfBDYvbpNOw-Koj1G2HmjwDqYjBuXcrPKjCIMdhp9gNwyILHI06gjl2CrdIJ4B8fwmDvtMlCIsEQh42kDp96xvHYU7RhlAsIJ_vSfuP8kOQtwRbwuDR4HbC-OWqVrDTBQNCY3fZc2p9rdmSzgzRQMOBgTZDjJvKZ4yCWbctoU_aim'
};

const reducer = (state, action) => {
    //log every action in console
    console.log(action);
    // Action -> type, [payload]
    // if theres an actiion, set the user state, default: 
    switch(action.type) {
        case 'SET_TOKEN' :
            return {
                ...state,
                spotToken: action.spotToken
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        
        case "SET_ITEM":
        return {
            ...state,
            item: action.item,
        };

        case "SET_TIME":
            return {
                ...state,
                timestamp: action.timestamp,
            };
    

        default:
            return state;
    }
};

export default reducer;