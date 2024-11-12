import * as Yup from 'yup';

export const bookingSchema = Yup.object().shape({
  seatBook: Yup.object({
    label: Yup.string(),
    value: Yup.string(),
  }).required('Seat book is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  type: Yup.object({
    label: Yup.string(),
    value: Yup.string(),
  }).required('Type is required'),
  subType: Yup.object({
    label: Yup.string(),
    value: Yup.string(),
  }).required('Sub type is required'),
  payment: Yup.string().required('Payment is required'),

});
