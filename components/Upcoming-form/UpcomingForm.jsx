'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ControllerTextField from '@/components/common/ControllerTextField';
import Button from '@/components/common/Button';
import FormProvider from '@/components/common/FormProvider';
import ControllerTextArea from '../common/ControllerTextArea';
import ControllerDatePicker from '../common/ControllerDatePicker';
import ControllerDateTimePicker from '../common/ControllerDateTimePicker';
import { upcomingEventSchema } from '@/schema/UpcomingEventSchema';

const UpcomingEventForm = ({
  handleUpcomingEventSubmit,
    handleClose,
  defaultValues,
}) => {
  const methods = useForm({
    resolver: yupResolver(upcomingEventSchema),
    defaultValues,
    mode: 'onBlur',
  });
  
  const {
    handleSubmit,
  } = methods;

  const onSubmit = async (data) => {
    handleUpcomingEventSubmit(data);
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}>
      <div >
        <div className='grid gap-4'>
          <div className='grid gap-4'>
            <ControllerDatePicker
              type='text'
              name='date'
              label='Date'
            />
          </div>
          <div className='grid gap-4'>
            <ControllerDateTimePicker
              name='time'
              label='Time'
            />
          </div>
          <div className='grid gap-4'>
            <ControllerTextField
              type='text'
              placeholder='Enter Mobile No.'
              name='mobile'
              label='Mobile No.'
            />
          </div>
          <div className='grid gap-4'>
            <ControllerTextField
              type='text'
              placeholder='Enter Email'
              name='email'
              label='Email'
            />
          </div>
          <div className='grid gap-4'>
            <ControllerTextArea
              type='text'
              placeholder='Message'
              name='message'
              label='Message'
            />
          </div>
          <div className='flex justify-end space-x-4'>
            <Button
              type='button'
              onClick={handleClose}>
              Cancel
            </Button>
            <Button type='submit'>{defaultValues.id ? 'Update' : 'Add'}</Button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default UpcomingEventForm;
