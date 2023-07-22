import * as yup from 'yup';

export const savedAdviceValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  advice_id: yup.string().nullable(),
});
