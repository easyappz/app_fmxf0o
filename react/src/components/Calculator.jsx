import React, { useEffect, useState } from 'react';

const toDisplay = (num) => {
  const str = String(num);
  return str.length > 14 ? str.slice(0, 14) : str;
};

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [error, setError] = useState('');

  const clearAll = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForSecond(false);
    setError('');
  };

  const inputDigit = (digit) => {
    if (error) return;
    if (waitingForSecond) {
      setDisplay(String(digit));
      setWaitingForSecond(false);
      return;
    }
    setDisplay((prev) => (prev === '0' ? String(digit) : prev + String(digit)));
  };

  const inputDot = () => {
    if (error) return;
    if (waitingForSecond) {
      setDisplay('0.');
      setWaitingForSecond(false);
      return;
    }
    setDisplay((prev) => (prev.includes('.') ? prev : prev + '.'));
  };

  const calculate = (a, b, op) => {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '×' || op === '*') return a * b;
    if (op === '÷' || op === '/') {
      if (b === 0) return null;
      return a / b;
    }
    return b;
  };

  const applyOperator = (op) => {
    if (error) return;
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operator) {
      const result = calculate(prevValue, inputValue, operator);
      if (result === null) {
        setError('Деление на ноль');
        setDisplay('Ошибка');
        setPrevValue(null);
        setOperator(null);
        setWaitingForSecond(false);
        return;
      }
      setPrevValue(result);
      setDisplay(toDisplay(result));
    }

    setWaitingForSecond(true);
    setOperator(op);
  };

  const equals = () => {
    if (error) return;
    if (operator === null || prevValue === null) return;
    const current = parseFloat(display);
    const result = calculate(prevValue, current, operator);
    if (result === null) {
      setError('Деление на ноль');
      setDisplay('Ошибка');
      setPrevValue(null);
      setOperator(null);
      setWaitingForSecond(false);
      return;
    }
    setDisplay(toDisplay(result));
    setPrevValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  const backspace = () => {
    if (error) {
      clearAll();
      return;
    }
    if (waitingForSecond) return;
    setDisplay((prev) => {
      if (prev.length <= 1) return '0';
      return prev.slice(0, prev.length - 1);
    });
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      const k = e.key;
      if (k >= '0' && k <= '9') {
        inputDigit(k);
        return;
      }
      if (k === '.' || k === ',') {
        inputDot();
        return;
      }
      if (k === '+') applyOperator('+');
      else if (k === '-') applyOperator('-');
      else if (k === '*') applyOperator('×');
      else if (k === '/') applyOperator('÷');
      else if (k === 'Enter' || k === '=') equals();
      else if (k === 'Backspace') backspace();
      else if (k === 'Escape') clearAll();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [operator, prevValue, waitingForSecond, error]);

  return (
    <div className="calculator" data-easytag="id001-react/src/components/Calculator.jsx">
      <div
        className="calculator__display"
        role="status"
        aria-live="polite"
        aria-label="Текущее значение"
        data-easytag="id002-react/src/components/Calculator.jsx"
      >
        {display}
      </div>
      <div className="calculator__grid" data-easytag="id003-react/src/components/Calculator.jsx">
        <button type="button" className="btn btn--ctrl" onClick={clearAll} aria-label="Сброс" aria-keyshortcuts="Esc" data-easytag="id004-react/src/components/Calculator.jsx">AC</button>
        <button type="button" className="btn btn--ctrl" onClick={backspace} aria-label="Удалить последний символ" aria-keyshortcuts="Backspace" data-easytag="id005-react/src/components/Calculator.jsx">⌫</button>
        <button type="button" className="btn btn--op" onClick={() => applyOperator('÷')} aria-label="Деление" aria-pressed={operator === '÷'} aria-keyshortcuts="/" data-easytag="id006-react/src/components/Calculator.jsx">÷</button>
        <button type="button" className="btn btn--op" onClick={() => applyOperator('×')} aria-label="Умножение" aria-pressed={operator === '×'} aria-keyshortcuts="*" data-easytag="id007-react/src/components/Calculator.jsx">×</button>

        <button type="button" className="btn" onClick={() => inputDigit(7)} aria-label="Цифра 7" aria-keyshortcuts="7" data-easytag="id008-react/src/components/Calculator.jsx">7</button>
        <div aria-hidden="true" className="btn btn--placeholder" style={{ visibility: 'hidden' }} data-easytag="1760914455134-react/src/components/Calculator.jsx"></div>
        <button type="button" className="btn" onClick={() => inputDigit(9)} aria-label="Цифра 9" aria-keyshortcuts="9" data-easytag="id010-react/src/components/Calculator.jsx">9</button>
        <button type="button" className="btn btn--op" onClick={() => applyOperator('-')} aria-label="Вычитание" aria-pressed={operator === '-'} aria-keyshortcuts="-" data-easytag="id011-react/src/components/Calculator.jsx">−</button>

        <button type="button" className="btn" onClick={() => inputDigit(4)} aria-label="Цифра 4" aria-keyshortcuts="4" data-easytag="id012-react/src/components/Calculator.jsx">4</button>
        <button type="button" className="btn" onClick={() => inputDigit(5)} aria-label="Цифра 5" aria-keyshortcuts="5" data-easytag="id013-react/src/components/Calculator.jsx">5</button>
        <button type="button" className="btn" onClick={() => inputDigit(6)} aria-label="Цифра 6" aria-keyshortcuts="6" data-easytag="id014-react/src/components/Calculator.jsx">6</button>
        <button type="button" className="btn btn--op" onClick={() => applyOperator('+')} aria-label="Сложение" aria-pressed={operator === '+'} aria-keyshortcuts="+" data-easytag="id015-react/src/components/Calculator.jsx">+</button>

        <button type="button" className="btn" onClick={() => inputDigit(1)} aria-label="Цифра 1" aria-keyshortcuts="1" data-easytag="id016-react/src/components/Calculator.jsx">1</button>
        <button type="button" className="btn" onClick={() => inputDigit(2)} aria-label="Цифра 2" aria-keyshortcuts="2" data-easytag="id017-react/src/components/Calculator.jsx">2</button>
        <button type="button" className="btn" onClick={() => inputDigit(3)} aria-label="Цифра 3" aria-keyshortcuts="3" data-easytag="id018-react/src/components/Calculator.jsx">3</button>
        <button type="button" className="btn btn--eq" onClick={equals} aria-label="Равно" aria-keyshortcuts="Enter,=" data-easytag="id019-react/src/components/Calculator.jsx">=</button>

        <button type="button" className="btn btn--zero" onClick={() => inputDigit(0)} aria-label="Цифра 0" aria-keyshortcuts="0" data-easytag="id020-react/src/components/Calculator.jsx">0</button>
        <button type="button" className="btn" onClick={inputDot} aria-label="Десятичная точка" aria-keyshortcuts="." data-easytag="id021-react/src/components/Calculator.jsx">.</button>
      </div>
      {error ? (
        <div className="calculator__error" role="alert" data-easytag="id022-react/src/components/Calculator.jsx">{error}</div>
      ) : (
        <div className="calculator__hint" data-easytag="id023-react/src/components/Calculator.jsx">Подсказка: используйте клавиши 0-9, +, -, *, /, Enter, Backspace, Esc</div>
      )}
    </div>
  );
};

export default Calculator;
