import React from 'react';
import {connect} from 'react-redux';
import {fetchUsersAndInfo} from '../actions';
import User from './User';
import useMountEffect from '../hooks/useMountEffect';

const Table = ({fetchUsersAndInfo, usersList, usersInfo}) => {
    useMountEffect(fetchUsersAndInfo);

    const renderUsers = () => {
        return usersInfo
            .map((user) => {
                return (
                    <User key={user.id} user={user}/>
                )
            });
    };

    if (!Array.isArray(usersList)) {
        return <p>{usersList.message}</p>
    }

    return (
        <div>
            {Array.isArray(usersList) ?
                renderUsers() : null}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList,
        usersInfo: state.usersInfo.sort((a, b) =>
            (a.followers < b.followers) ? 1 :
                ((b.followers < a.followers) ? -1 : 0))
    };
};

export default connect(mapStateToProps, {fetchUsersAndInfo})(Table);