import { UserInterface } from 'interfaces/user';
import { AdviceInterface } from 'interfaces/advice';
import { GetQueryInterface } from 'interfaces';

export interface SavedAdviceInterface {
  id?: string;
  user_id?: string;
  advice_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  advice?: AdviceInterface;
  _count?: {};
}

export interface SavedAdviceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  advice_id?: string;
}
