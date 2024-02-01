import { connect } from 'react-redux'
import { setFilter } from '../../services/actions/todos'
import { Link } from '../link/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filterReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)