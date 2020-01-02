import { VisibilityFilters } from './../actions/index';
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { LinkComponent } from '../components/link/link'

interface newProps {
    filter: string
}

const mapStateToProps = (state: any, newProps: newProps) => ({
    active: state.visibilityFilterReducer === newProps.filter
})

const mapDispatchToProps = (dispatch: any, newProps: newProps) => ({
    onClick: () => dispatch(setVisibilityFilter(newProps.filter))
})

export const FilterLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkComponent)
