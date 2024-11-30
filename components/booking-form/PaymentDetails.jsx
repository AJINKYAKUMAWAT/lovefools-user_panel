import {Box, Grid, Typography} from '@mui/material';
import React, { useState } from 'react';
import Button from '../common/Button';
import {API_ENDPOINT, NEXT_PUBLIC_API_URL} from '@/utils/constant';
import { convertTimeObjectToString, formatDate, formatDateForApi } from '@/utils/utils';
import axios from 'axios';
import { toast } from 'react-toastify';

const PaymentDetails = ({setActiveTab, defaultValues,setDefaultValues}) => {
	const [menuList, setMenuList] = useState([])
	const PrevBtn = () => {
		setActiveTab(3);
	};

	const getMenuList = async (params) => {
		try {
		  setLoading(true);
		  const { data } = await axios.post(
			`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.GET_MENU_LIST}`,
			{ ...params }
		  );
		  setLoading(false);
		  return setMenuList(data.data);
		} catch (error) {
		  setLoading(false);
		  console.log(error);
		}
	  };

	console.log("defaultValues",defaultValues);
	

	const BookingConfirm = async () => {
		const payload = {
			emailId: defaultValues.email,
			mobileNo: defaultValues.mobile,
			receiptName: defaultValues.menu_Name,
			price: Number(defaultValues.quantity) * 250,
			date: formatDateForApi(defaultValues.date),
			time: convertTimeObjectToString(defaultValues.time),
			type: defaultValues.menuType,
			sub_type: defaultValues.subMenuType,
			room: defaultValues.room.value,
			table_number: defaultValues.table_number.value,
		};

		try {
			const options = {
				key: 'rzp_test_BGKRq8Cw1V2ph4',
				amount: (defaultValues.quantity * 100 ) * 250, // Amount in paise
				currency: 'INR',
				name: 'Lovefools',
				description: 'Test Transaction',
				// order_id: "order_9A33XWu170gUtm", // Generate order_id on server
				handler: async (response) => {
					await axios.post(
						`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.ADD_RECEIPT}`,
						payload
					);
					toast.success('Booking Confirmation Succesfully')
					setDefaultValues({})
					setActiveTab(0)
				},
				prefill: {
					email: defaultValues.email,
					contact: defaultValues.mobile,
				},
				theme: {
					color: '#F37254',
				},
			};

			const razorpayInstance = new Razorpay(options);
			razorpayInstance.open();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Grid container>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Email</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							{defaultValues.email}
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Mobile No.</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							{defaultValues.mobile}
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Date</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							{formatDate(defaultValues.date)} {convertTimeObjectToString(defaultValues.time)}
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Table</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							{defaultValues.table_number.label}
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Menu</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>{defaultValues.menu_Name}</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Total</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							{defaultValues.quantity * 250}
						</Typography>
					</Box>
				</Grid>

				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>SGST</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							+91 7263994600
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>CGST</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							20 Dec 2024
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<div className="flex justify-center space-x-4">
				<Button type="button" variant="bordered" onClick={PrevBtn}>
					Prev
				</Button>
				<Button type="submit" onClick={BookingConfirm}>Confirm</Button>
			</div>
		</div>
	);
};

export default PaymentDetails;
