import { SavedAdviceInterface } from 'interfaces/saved-advice';
import { FirmInterface } from 'interfaces/firm';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdviceInterface {
  id?: string;
  content: string;
  firm_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  saved_advice?: SavedAdviceInterface[];
  firm?: FirmInterface;
  user?: UserInterface;
  _count?: {
    saved_advice?: number;
  };
}

export interface AdviceGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  firm_id?: string;
  user_id?: string;
}
