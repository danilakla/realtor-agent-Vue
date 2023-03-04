import {createStore} from "vuex";
import {testModule} from "@/store/TestStore";

export default createStore({

    modules: {
        test:testModule
    }
})
