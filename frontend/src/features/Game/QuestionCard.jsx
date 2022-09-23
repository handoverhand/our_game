/* eslint-disable react/prop-types */
/* eslint-disable vars-on-top */
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
function QuestionCard({ item, changed }) {
  const [modal, setModal] = useState(false);
  const [timer, setTimer] = useState(20);
  const [visible, setVisible] = useState(true);
  const [incorect, setIncorect] = useState('');

  useEffect(() => {
    let interval;
    if (modal) {
      // eslint-disable-next-line no-var
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      if (timer === 0) {
        clearInterval(interval);
        setModal(false);
        setVisible(false);
      }
    }
    return () => clearInterval(interval);
  }, [timer, modal]);

  async function handleSubmit(event, itemm) {
    event.preventDefault();
    const { answer } = event.target;
    const { price } = event.target.dataset;
    if (answer.value.toLowerCase() === itemm.answer.toLowerCase()) {
      fetch('/data/user/increment', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          price,
        }),
      })
        .then((res) => res.json())
        .then(() => changed());
      setModal(false);
      setVisible(false);
      // changed();
    } else {
      fetch('/data/user/decrement', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          price,
        }),
      })
        .then((res) => res.json())
        .then(() => changed());
      setIncorect(true);
    }
  }
  return (
    <>
      <div>
        {visible ? (
          // eslint-disable-next-line react/button-has-type
          <button
            className="question-card"
            onClick={() => {
              setModal(true);
            }}
          >
            <h1 className="question-price">{item.price}</h1>
          </button>
        ) : (
          // eslint-disable-next-line react/button-has-type
          <button
            className={
              incorect ? 'question-card-disabled' : 'question-card-answer'
            }
            disabled
            // onClick={() => { setModal(true); }}
          >
            <h1 className="question-price">{item.price}</h1>
          </button>
        )}
      </div>
      {modal && (
        <div className="overlay">
          <div className="question-modal">
            <div className="waves">
              <div className="wave1">z</div>
              <div className="wave2">v</div>

              <div className="modal-cont">
                <h4 className="question">{item.content}</h4>
                {incorect ? (
                  <>
                    <h5 style={{ fontSize: '20px' }}>Ответ неверный!</h5>
                    <p style={{ fontSize: '40px' }}>
                      Правильный ответ:&nbsp;
                      {item.answer}
                    </p>
                  </>
                ) : (
                  <p> </p>
                )}
                <form
                  data-price={item.price}
                  method="PUT"
                  onSubmit={(event) => handleSubmit(event, item)}
                >
                  {!incorect && (
                    <>
                      <input
                        className="typing-demo"
                        type="text"
                        placeholder="Ваш ответ..."
                        name="answer"
                      />
                      &nbsp; &nbsp; &nbsp;
                      <button
                        className="delete-card custom-btn btn-3"
                        type="submit"
                        onClick={() => (incorect ? setTimer(1) : setTimer(5))}
                      >
                        Ответить
                      </button>
                    </>
                  )}
                </form>
                <div>
                  Время идет:
                  {timer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionCard;
