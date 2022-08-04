import { useDispatch } from 'react-redux';
import ActionCreators from '../store/ActionCreators/AC'
import {bindActionCreators} from "redux";

// Создаю хук для получения любых AC
const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}

export default useActions
