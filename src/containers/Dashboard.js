import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

//* The mapStateToProps() function takes in state, and we return an object that
//* maps the values to the states defined in state.js.
const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars,
    };
};

export default connect(mapStateToProps)(Dashboard);