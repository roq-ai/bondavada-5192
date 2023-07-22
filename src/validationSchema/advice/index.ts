import * as yup from 'yup';

export const adviceValidationSchema = yup.object().shape({
  content: yup.string().required(),
  firm_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
