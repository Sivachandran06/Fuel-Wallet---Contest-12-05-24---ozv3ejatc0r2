import React, { useReducer, useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Wallet from "./components/Wallet";
import reducer from "./reducers";

const App = () => {
    const [balance, setBalance] = useState(0);
    const [users, dispatch] = useReducer(reducer, []);
    return (
        <div id="main">
            <AddUser
                dispatch={dispatch}
                setBalance={setBalance}
                balance={balance}
            />
            <Wallet balance={balance} />
            <Users
                users={users}
                dispatch={dispatch}
                setBalance={setBalance}
                balance={balance}
            />
        </div>
    );
};

export default App;
