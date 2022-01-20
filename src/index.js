import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!!</h4>
                Are you sure to continue?
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentPost="Great job" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 2:00AM" commentPost="Nice post" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Yesterday at 5:00PM" commentPost="fascinated post" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>

    );
};


ReactDOM.render(<App />, document.querySelector('#root'));