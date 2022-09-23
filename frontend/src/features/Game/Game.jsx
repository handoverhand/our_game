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
    fetch('/data/actualscore')
      .then((data) => data.json())
      .then((res) => setContext({ ...context, score: res }));
  });

  return (
    <>
      <div>Общее количество очков в раунде: {context.score}</div>
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
            <QuestionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
