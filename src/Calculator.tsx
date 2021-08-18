import React from 'react';

import calculate from './utils';

import './Calculator.scss';

const DIGIT_REGEXP = /^(\s*|\d+)$/;

function Counter(): JSX.Element {
  const [counter, setCounter] = React.useState(0);
  const [firstParam, setFirstParam] = React.useState('');
  const [secondParam, setSecondParam] = React.useState('');

  const handleCalculate = async (e: React.SyntheticEvent): Promise<any> => {
    e.preventDefault();

    const result = calculate(+firstParam, +secondParam);
    setCounter(result);
  };

  const handleClear = (): void => {
    setFirstParam('');
    setSecondParam('');
    setCounter(0);
  };

  const handleChangeFirstParam = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;

    if (DIGIT_REGEXP.test(target.value)) {
      setFirstParam(target.value);
    }
  };

  const handleChangeSecondParam = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;

    if (DIGIT_REGEXP.test(target.value)) {
      setSecondParam(target.value);
    }
  };

  return (
    <form className="calculator">
      <div className="calculator__actions-area">
        <input
          value={firstParam}
          onChange={handleChangeFirstParam}
          type="text"
          autoComplete="off"
          className="calculator__input"
          placeholder="Enter first number"
        />
        <input
          value={secondParam}
          onChange={handleChangeSecondParam}
          type="text"
          autoComplete="off"
          className="calculator__input"
          placeholder="Enter second number"
        />
        <span className="calculator__result">{counter}</span>
        <div>
          <button
            type="submit"
            className="calculator__button"
            onClick={handleCalculate}
          >
            Sum
          </button>
          <button
            type="button"
            className="calculator__button calculator__button--orange"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}

export default Counter;
