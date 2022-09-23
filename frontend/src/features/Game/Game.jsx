/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';

function Game() {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [actualscore, setActualscore] = useState(null);

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
      .then((res) => setActualscore(res));
  });

  return (
    <>
      <div>
        Общее количество очков в раунде: {actualscore > 0 ? actualscore : 0}
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
            <QuestionCard key={item.id} item={item} actualscore={actualscore} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
