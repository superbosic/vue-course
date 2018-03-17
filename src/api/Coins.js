const coins = () => {
  const listeners = {};
  let isInit = false;
  let socket;
  const init = () => {
    socket = new WebSocket('ws://coins-stream.demo.javascript.ninja');
    socket.onopen = () => {
      console.log('socket open');
      Object.keys(listeners).forEach(currency => socket.send(JSON.stringify({type: 'subscribe', currency})));
    };
    socket.onclose = () => {
      console.log('socket close');
      setTimeout(init, 1000);
    };
    socket.onmessage = message => {
      const {currency, price} = JSON.parse(message.data);

      if (listeners[currency]) {
        listeners[currency].forEach(cb => cb(Number(price), currency));
      }
    };
    socket.onerror = e => console.log('error', e);
  };

  return {
    subscribe (currency, cb) {
      if (!isInit) {
        init();
        isInit = true;
      }
      if (!listeners[currency]) {
        if (socket.readyState === 1) {
          socket.send(JSON.stringify({type: 'subscribe', currency}));
        }

        listeners[currency] = [];
      }
      listeners[currency].push(cb);
    },

    unsubscribe (currency, cb) {
      if (!listeners[currency]) return;

      listeners[currency] = listeners[currency].filter(fn => fn !== cb);

      if (listeners[currency].length === 0) {
        listeners[currency] = null;
        socket.send(JSON.stringify({type: 'unsubscribe', currency}));
      }
    }
  };
};

export default coins();
