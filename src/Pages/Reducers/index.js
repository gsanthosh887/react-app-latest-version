import { configureStore } from '@reduxjs/toolkit';
import todos from './todos';
import Messages from './allMessages';

export default configureStore({
    reducer: {
        todos: todos,
        allMessges: Messages
    },
});
