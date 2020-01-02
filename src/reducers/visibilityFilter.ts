import { VisibilityFilters } from '../actions'

const visibilityFilterReducer = (state = VisibilityFilters.SHOW_ALL, action: any) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterReducer
