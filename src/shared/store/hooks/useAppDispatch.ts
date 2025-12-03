import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/shared/store/model/types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
