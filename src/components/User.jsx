import React from 'react';
import styled from 'styled-components';
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const User = ({user}) => {
    return (
        <ContainerDiv key={user.id}>
            <div>
                <Image src={user.avatar_url} alt={user.id}/>
            </div>
            <TextContainerDiv>
                <div>
                    <p><a href={user.html_url}>{user.login}</a></p>
                    <p>{user.name}</p>
                </div>
                <div>
                    <p>{user.bio}</p>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <p>{user.location}</p>
                    </div>
                </div>
            </TextContainerDiv>
        </ContainerDiv>
    )
};

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 700px;
    :not(:last-child){
    border-bottom: 0.2px solid #eeeeee;
    }
`;

const Image = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 5px;
`;

const TextContainerDiv = styled.div`
font-size: 18px;
font-family: BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    margin-left: 10px;
    div:nth-child(1) {
    display: flex;
    & > * {
      margin: 0 10px 0 0;
      display: flex;
    }
    a {
      text-decoration: none;
      color: #0367d6;
    }
    }
`;

export default User;