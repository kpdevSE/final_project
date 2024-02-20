'use client'
import {Drawer} from 'antd';
import {useSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {MdOutlinePayment} from "react-icons/md";
import Loader from './loader';

const RecentPayment = () =>
{
    const {data: session} = useSession();
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const fetchData = async () =>
    {
        try
        {
            setLoading(true)
            const response = await fetch("/api/getall-payments");
            if (response.ok)
            {
                const result = await response.json();
                setData(result.payments);
                console.log("Payment history data", data);
                setLoading(false)
            } else
            {
                console.error("Error fetching data:", response.statusText);
            }
        } catch (error)
        {
            console.error("Error fetching payments:", error);
            toast.error("Unexpected error occurred");
        }
    };


    const userEmailAccount = session?.user?.email;


    const filterPayments = data.filter(
        (pay) => pay.
            creator === userEmailAccount
    );
    console.log("filter payments", filterPayments)

    useEffect(() =>
    {
        fetchData();

    }, []);
    const showDrawer = () =>
    {
        setOpen(true);
    };
    const onChange = (e) =>
    {
        setPlacement(e.target.value);
    };
    const onClose = () =>
    {
        setOpen(false);
    };
    return (
        <>

            <button onClick={showDrawer} onChange={onChange} className='text-white bg-gray-500 w-full rounded-3xl h-[40px]'>
                Recent Payment
            </button>

            <Drawer

                placement="bottom"
                width={500}
                onClose={onClose}
                open={open}

            >
                <div>
                    {
                        loading ? (<Loader />) : (
                            <div>
                                <div className='flex items-center justify-start gap-4'>
                                    <MdOutlinePayment className='text-2xl' />
                                    <h1 className='text-2xl text-gray-600 font-semibold'>My Recent Payment History</h1>
                                </div>
                                <div className='grid grid-cols-1 place-items-center gap-2 mt-10 md:grid-cols-2 lg:grid-cols-3'>
                                    {
                                        filterPayments.map((e) =>
                                        {
                                            return (
                                                <div key={e.id} className='w-full h-full p-3 flex flex-col gap-1 rounded-2xl shadow-lg '>
                                                    <p ><strong className=" font-semibold text-black">Payment ID:-</strong> {e.id}</p>
                                                    <p ><strong className=" font-semibold text-black">Card Holder Name:-</strong> {e.name}</p>
                                                    <p ><strong className=" font-semibold text-black">Card Number:-</strong> {e.cardNumber}</p>
                                                    <p ><strong className=" font-semibold text-black">To:-</strong> {e.sellerEmailE}</p>
                                                    <p ><strong className=" font-semibold text-black">Payemnt:- Rs.</strong>{e.priceBooking}.oo</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </Drawer>
        </>
    );
};
export default RecentPayment;