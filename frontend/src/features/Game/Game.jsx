/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useContext } from 'react';
import QuestionCard from './QuestionCard';
import UserContext from '../Context/Context';

function Game() {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  // const [actualscore, setActualscore] = useState(null);
  const [context, setContext] = useContext(UserContext);
  const [initscore, setInitscore] = useState(null);
  // const [gamescore, setGamescore] = useState(null);

  const changed = () => {
    fetch('/data/actualscore')
      .then((data) => data.json())
      .then((res) =>
        setContext({
          ...context,
          score: res.score,
          gameScore: res.score - initscore,
        })
      );
  };

  useEffect(() => {
    fetch('/data/questions')
      .then((data) => data.json())
      .then((res) => setQuestions(res));
  }, []);

  useEffect(() => {
    fetch('/data/topics')
      .then((data) => data.json())
      .then((res) => setTopics(res));
  }, []);

  useEffect(() => {
    fetch('/data/setinitscore')
      .then((data) => data.json())
      .then((data) => setInitscore(data.score));
  }, []);

  return (
    <>
      <div className="info">
        {' '}
        <div>
          {' '}
          <h2> Сейчас играет: {context.login}</h2>{' '}
          <h2> Общее количество очков пользователя: {context.score}</h2>
          <h2> Your game score: {context.gameScore}</h2>
        </div>
      </div>

      <div className="game-container">
        <div className="topic-container">
          {topics.map((item) => (
            <div className="topic-card" key={item.id}>
              <h2 className="topic-title">{item.title}</h2>
            </div>
          ))}
        </div>
        <div className="question-container">
          {questions.map((item) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <QuestionCard key={item.id} item={item} changed={changed} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
