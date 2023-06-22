import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

export const socket = io(URL, {
    autoConnect: false,
    cors: {
        origin: "http://localhost:8080"
      }
  },
  );
//   io.listen(4000);