import React from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../redux/actions/fetchUserInfo.js'
import Navbar from './Navbar.jsx';

class UserInfo extends React.Component {
    componentDidMount() {
        this.props.fetchUserInfo()
    }

    render() {
        return (
            <div>
                <div style={{ color: '#d7dee1' }}>
                    {this.props.userInfo.username}'s Dashboard
                </div>
                <Navbar img={this.props.userInfo.userImg}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ userInfo: state.userInfo })
export default connect(mapStateToProps, { fetchUserInfo })(UserInfo)
