import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
      whitelist: ['location'],
    },
    reducers,
  );

  return persistedReducer;
};
