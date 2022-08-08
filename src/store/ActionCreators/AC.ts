import * as UserActionCreators from './User.AC'
import * as ContactsActionCreators from './Contacts.AC'

export default {
    ...UserActionCreators,
    ...ContactsActionCreators
}
