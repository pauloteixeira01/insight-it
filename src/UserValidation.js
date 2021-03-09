import * as yup from 'yup';

export const userSchema = yup.object().shape({
	name: yup.string().required().min(3).trim(),
	address: yup.string().required(),
	phone: yup.number().integer().positive().required(),
	email: yup.string().email().required(),
	born: yup.date().required()
});