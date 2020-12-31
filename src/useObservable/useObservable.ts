import { Observable } from "rxjs";
import { useEffect, useState } from "react";

export const useObservable = <T>(
  observable: Observable<T>,
  initialValue: T
): T => {
  const [s, setS] = useState<T>(initialValue);
  useEffect(() => {
    const sub = observable.subscribe(setS);
    return () => sub.unsubscribe();
  }, [observable]);
  return s;
};
