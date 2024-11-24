import * as Yup from 'yup';

export const bookingSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  mobile: Yup.string().required('Mobile No. is required'),
  receiptName: Yup.string().required('Receipt menu is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.object().required('Time is required'),
  price: Yup.string().required('Price is required'),
  floor: Yup.object({
    label: Yup.string(),
    value: Yup.string(),
  }).required('Floor is required'),
  room: Yup.object({
    label: Yup.string(),
    value: Yup.string(),
  }).required('Room is required'),
  table_number: Yup.object({
    label: Yup.string(),
    value: Yup.string(),
  }).required('Table Number is required'),

});
