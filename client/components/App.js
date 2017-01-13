import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStatetoProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchtoProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStatetoProps, mapDispatchtoProps)(Main);

export default App;

