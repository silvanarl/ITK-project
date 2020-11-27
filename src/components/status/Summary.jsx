import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import NavSummary from './NavSummary';
import firebase from '../../firebase.config';
import {getComments} from '../../API/crud';
import SumComments from './SumComments';
import Commits from './Commits';


const Summary = ({init, initID}) => {
    const [view, setView] = useState('');
    const initialStateComment = {
        idInitiative: initID,
        content: '',
        user: localStorage.getItem('user'),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    const [commentSum, setCommentSum] =useState(initialStateComment);
    const [commentSumBox, setCommentSumBox] =useState([]);
    const [commits, setCommits] =useState(initialStateComment);
    const [commitsBox, setCommitsBox] =useState([]);

    useEffect(() => {
        getComments(setCommentSumBox, 'summaryComments');
        getComments(setCommitsBox, 'commits');
      }, []);
    return (
        <div>
            <span>{init.status}</span>
            <NavSummary setView={setView} />
            {view === 'summary-comments' ? (
                <SumComments 
                    commentSum={commentSum}
                    setCommentSum={setCommentSum}
                    initialStateComment={initialStateComment}
                    commentSumBox={commentSumBox}
                    setCommentSumBox={setCommentSumBox}
                    initID={initID}
                />
            ) : view === 'commits' ? (
                <Commits
                    commits={commits}
                    setCommits={setCommits}
                    initialStateComment={initialStateComment}
                    commitsBox={commitsBox}
                    setCommitsBox={setCommitsBox}
                    initID={initID}
                />
            )  : (null)}
        </div>
    )
};

Summary.propTypes = {
    init: PropTypes.object.isRequired,
    initID: PropTypes.string.isRequired
};

export default Summary;
