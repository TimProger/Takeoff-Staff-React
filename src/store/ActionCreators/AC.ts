import * as UserActionCreators from './User.AC'

// Объединяем все AC в объект и экспортируем их
export default {
    ...UserActionCreators,
}
