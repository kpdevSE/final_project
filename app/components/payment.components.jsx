'use client'
import {Button, Modal} from 'antd';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import {useState} from 'react';
import toast from 'react-hot-toast';
import card from '../../public/logo/SL-110820-37810-12.jpg';
import cupmup from '../../public/logo/computop.png';
import master from '../../public/logo/mastercard-id-check.png';
import paypal from '../../public/logo/verified-by-visa.png';
import RecentPayment from './paymenthistory';


const PaymentMethod = () =>
{
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const {data: session} = useSession();

    const creator = session?.user?.email;

    const [data, setData] = useState({
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: "",
        creator: creator
    });


    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const requestBody = {...data, creator: creator, };
        try
        {
            setLoading(true);
            const response = await fetch("/api/payemnet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            if (response.ok)
            {
                toast.success("Payment Successfully");
                setLoading(false);
                window.location.reload();
            } else
            {
                toast.error("Payment Failed");
            }
        } catch (error)
        {
            console.error("Email Sending Error:", error);
            toast.error("Something went wrong with a email sending");
        }
    };
    return (
        <>
            <Button className='bg-black text-white w-[100px] h-[40px] hover:text-white text-[16px]' onClick={() => setOpen(true)}>
                Proceed
            </Button>
            <Modal
                title="Payment Section"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className='flex items-center justify-between gap-2 lg:flex-row flex-col'>
                    <div className='flex flex-col w-[50%]'>
                        <Image src={card} alt='' width={500} height={400} className='w-full rounded-2xl' />
                        <div className='flex gap-1 justify-center items-center'>
                            <Image src={master} alt='' width={30} height={10} />
                            <Image src={cupmup} alt='' width={100} height={90} />
                            <Image src={paypal} alt='' width={60} height={90} />
                        </div>
                    </div>
                    <div className='w-[50%]'>


                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Holder Name</label>
                                <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="K K P MUDITHANANDA" required value={data.name} onChange={(e) =>
                                {
                                    setData({...data, name: e.target.value});
                                }} />
                            </div>
                            <div className="mb-5">
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number</label>
                                <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='**** **** **** ****' value={data.cardNumber} onChange={(e) =>
                                {
                                    setData({...data, cardNumber: e.target.value});
                                }} />
                            </div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired</label>

                            <div className="flex items-start mb-5 w-full">
                                <div className="flex items-center h-5 w-ful gap-2 mt-3">
                                    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='MM' value={data.month} onChange={(e) =>
                                    {
                                        setData({...data, month: e.target.value});
                                    }} />
                                    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='YEAR'
                                        value={data.year} onChange={(e) =>
                                        {
                                            setData({...data, year: e.target.value});
                                        }} />
                                    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='CVV' value={data.cvv} onChange={(e) =>
                                    {
                                        setData({...data, cvv: e.target.value});
                                    }} />
                                </div>
                            </div>
                            <button className='bg-black text-white w-full rounded-[20px] h-[50px] hover:text-white text-[16px] mt-2' type='submit'>
                                {
                                    loading ? (<div className='flex items-center justify-center w-full h-full'>
                                        <span className="loading loading-infinity loading-lg"></span>
                                    </div>) : ("Proceed")
                                }
                            </button>
                            <div className='mt-2'>
                                <RecentPayment />
                            </div>
                        </form>

                    </div>

                </div>
            </Modal>
        </>
    );
};
export default PaymentMethod;