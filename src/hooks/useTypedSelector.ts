import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/";

// Обычный UseSelector переделанный для работы с TS
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector