import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
    switch (action.type){
        case "add":
        return{
            ...state,
            user:[
                ...state.user,
                {id:uuidv4(),name: action.name}
            ],
            balance: state.balance + 10
        };
        case "fuel":
        if (state.balance >=50){
            return{
                ...state,
                balance: state.balance - 50
          };
        }
        return state;
        default:
            return state;
    }
};

export default reducer;
