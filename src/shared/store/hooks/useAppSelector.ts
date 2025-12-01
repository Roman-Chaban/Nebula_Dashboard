import type { RootState } from '@/shared/store/model/types';

import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
