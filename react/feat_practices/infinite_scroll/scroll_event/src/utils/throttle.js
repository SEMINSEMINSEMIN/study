const throttle = (callback, delay) => {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(this, args);
        timer = undefined;
      }, delay);
    }
  };
};

// clearTimeout을 아래와 같이 추가하지 않아도 되는 이유
/*
The reason you don't need to use clearTimeout is because the timer variable is properly scoped within the closure of the returned throttled function. When the throttled function is invoked, it checks if timer is falsy (undefined or null). If it is, it means there is no pending timeout, and a new timeout is scheduled using setTimeout.

Since timer is defined within the closure, it retains its value across multiple invocations of the throttled function. Therefore, even if the throttled function is called multiple times within the throttling interval, the if (!timer) condition will be false, preventing the creation of new timeouts. This effectively throttles the execution of the callback function.

When the throttling interval expires and the setTimeout callback is invoked, it executes the callback and then sets timer to undefined, allowing a new timeout to be scheduled on subsequent invocations of the throttled function.

The absence of clearTimeout in this case does not cause any issues because any previous timeout is effectively canceled and replaced by the new timeout when timer is truthy. Therefore, there is no need to explicitly cancel the previous timeout with clearTimeout before setting a new one.

In summary, the use of timer within the closure of the returned function ensures that only one timeout is active at a time, and any previous timeouts are automatically canceled without the need for explicit clearTimeout calls.
*/

export default throttle;
