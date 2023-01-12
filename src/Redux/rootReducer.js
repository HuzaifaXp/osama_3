import LoggedUserReducer from "./features/LoggedUser";

import categories from "./features/Categories";

const rootReducer = {
    LoggedUser: LoggedUserReducer,
    categoryReducer: categories
    
}

export default rootReducer;