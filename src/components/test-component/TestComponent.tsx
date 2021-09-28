import { useState } from 'react';
import { useEffect } from 'react';

import styles from './TestComponent.module.scss';

interface TestComponentProps {
  text: string;
}

function TestComponent({ text }: TestComponentProps): JSX.Element {
  const [name, setName] = useState();

  useEffect(() => {
    const getName = async () => {
      const result = await fetch('/api/hello');
      return result.json();
    };

    getName().then((result) => setName(result.name));
  }, [name]);

  return (
    <>
      <h1 className={'p-4 text-3xl m-10 ' + styles.blueBox}>Test component. Hello, {name}</h1>
      {text && <h2>{text}</h2>}
    </>
  );
}

export default TestComponent;
