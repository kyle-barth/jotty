import { useState, useEffect } from 'react';
import { BehaviorSubject, Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';

type stateUtils<T> = [T, (value: T) => void];

function useSharedState<T>(subject: BehaviorSubject<T>): stateUtils<T> {
  const [value, setState] = useState(subject.getValue());

  useEffect(() => {
    const sub: Subscription = subject
      .pipe(skip(1))
      .subscribe((value: T) => setState(value));

    return () => sub.unsubscribe();
  }, [subject]);

  const newSetState = (state: T) => subject.next(state);
  return [value, newSetState];
}

export default useSharedState;
