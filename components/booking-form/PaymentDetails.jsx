import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
import Button from '../common/Button';
import {API_ENDPOINT, NEXT_PUBLIC_API_URL} from '@/utils/constant';

const PaymentDetails = ({setActiveTab, defaultValues}) => {
	const PrevBtn = () => {
		setActiveTab(3);
	};

	const BookingConfirm = async () => {
		const payload = {
			emailId: defaultValues.email,
			mobileNo: defaultValues.mobile,
			receiptName: defaultValues.menu_Name,
			price: defaultValues.price,
			date: defaultValues.date,
			time: defaultValues.time,
			type: defaultValues.menuType,
			sub_type: defaultValues.subMenuType,
			room: defaultValues.room,
			table_number: defaultValues.table_number,
		};

		try {
			const options = {
				key: 'rzp_test_BGKRq8Cw1V2ph4',
				amount: 50000, // Amount in paise
				currency: 'INR',
				name: 'Lovefools',
				description: 'Test Transaction',
				// order_id: "order_9A33XWu170gUtm", // Generate order_id on server
				handler: async (response) => {
					await dispatch(
						`${NEXT_PUBLIC_API_URL}${API_ENDPOINT.ADD_RECEIPT}`,
						payload
					);
					alert('Payment Successful!');
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
						<Typography sx={{color: '#fff !important'}}>Email ID</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							ajink3994@gmail.com
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Mobile No.</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							+91 7263994600
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Date</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							20 Dec 2024
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Table</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							+91 7263994600
						</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Menu</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>Ala Cart</Typography>
					</Box>
				</Grid>
				<Grid item md={4} className="paymentDetails">
					<Box>
						<Typography sx={{color: '#fff !important'}}>Total</Typography>
						<Typography sx={{color: '#a39f9f !important'}}>
							ajink3994@gmail.com
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
