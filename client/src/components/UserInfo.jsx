import React from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../redux/actions/fetchUserInfo.js'

class UserInfo extends React.Component {
    componentDidMount() {
        this.props.fetchUserInfo()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.userInfo.username}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({userInfo:state.userInfo})
export default connect(mapStateToProps, { fetchUserInfo })(UserInfo)
