// 'use client'

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { ImUsers } from "react-icons/im";
import { FaMinus } from "react-icons/fa6";
// import { useRouter } from 'next/navigation';

const CheckOutPage = () => {
    // const router = useRouter();
    return (
        <div className='bg-[#000000] py-[80px] md:py-[100px]'>
            <div className='text-white h-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col-reverse lg:flex-row items-start gap-10'>
                {/* left side  */}
                <div className='w-full lg:w-2/3'>
                    <div className='w-full'>
                        <h6 className='text-2xl font-bold text-[#D0A148] pb-8'>Traveler Details</h6>

                        {/* input feilds  */}
                        <div className='flex flex-col gap-5'>
                            {/* name and nationality */}
                            <div className='flex flex-col lg:flex-row items-center gap-5'>
                                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                        placeholder='Enter your Full name...'
                                    />
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                    <label htmlFor="nationality">Nationality</label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        id="nationality"
                                        className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                        placeholder='Enter your Nationality...'
                                    />
                                </div>
                            </div>

                            {/* email and phone */}
                            <div className='flex flex-col lg:flex-row items-center gap-5'>

                                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                        placeholder='Enter your Email...'
                                    />
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                    <label htmlFor="phone">Phone number</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                        placeholder='Enter your Phone number...'
                                    />
                                </div>
                            </div>

                            {/* Check in Date and Check Out Date */}
                            <div className='flex flex-col lg:flex-row items-center gap-5'>

                                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                    <label htmlFor="date-in">Check in Date</label>
                                    <input
                                        type="date"
                                        name="date-in"
                                        id="date-in"
                                        className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                    // placeholder='Enter your Email...'
                                    />
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                    <label htmlFor="data-out">Check Out Date</label>
                                    <input
                                        type="date"
                                        name="data-out"
                                        id="data-out"
                                        className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                    // placeholder='Enter your Phone number...'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* payment info  */}
                        <div className='pt-12'>
                            <h6 className='text-2xl font-bold text-[#D0A148] pb-8'>Payment Details</h6>

                            {/* card icons  */}
                            <div className='flex items-center gap-4 pb-8'>
                                <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="70" height="48" rx="4" fill="#EBF3FA" />
                                    <path d="M29.9482 32.1656H25.9902L28.4658 16.8584H32.4236L29.9482 32.1656Z" fill="#00579F" />
                                    <path d="M44.2947 17.2327C43.514 16.923 42.2758 16.5811 40.7447 16.5811C36.8361 16.5811 34.0837 18.6653 34.0668 21.6452C34.0343 23.8438 36.0374 25.0649 37.5356 25.798C39.0669 26.5471 39.5874 27.036 39.5874 27.7037C39.5718 28.7292 38.35 29.2019 37.2105 29.2019C35.6303 29.2019 34.7836 28.9581 33.4969 28.3876L32.9757 28.1431L32.4219 31.5792C33.3502 32.0021 35.0604 32.3774 36.8361 32.3939C40.989 32.3939 43.6928 30.3418 43.7248 27.1663C43.7406 25.4238 42.6829 24.0886 40.4025 22.9975C39.0182 22.2971 38.1704 21.8249 38.1704 21.1082C38.1866 20.4568 38.8875 19.7895 40.4501 19.7895C41.7368 19.7568 42.6822 20.0661 43.3984 20.3756L43.7564 20.5381L44.2947 17.2327Z" fill="#00579F" />
                                    <path d="M49.5572 26.7428C49.8832 25.8634 51.1374 22.46 51.1374 22.46C51.121 22.4927 51.4627 21.5644 51.6582 20.9945L51.9348 22.3134C51.9348 22.3134 52.6843 25.9775 52.847 26.7428C52.2285 26.7428 50.339 26.7428 49.5572 26.7428ZM54.4428 16.8584H51.3813C50.4372 16.8584 49.72 17.135 49.3126 18.1284L43.4336 32.1654H47.5866C47.5866 32.1654 48.2703 30.2761 48.4172 29.8692C48.8728 29.8692 52.9128 29.8692 53.4989 29.8692C53.6126 30.4066 53.9712 32.1654 53.9712 32.1654H57.6359L54.4428 16.8584Z" fill="#00579F" />
                                    <path d="M22.684 16.8584L18.8078 27.2964L18.3843 25.1795C17.6676 22.7368 15.4202 20.0829 12.9121 18.7632L16.4625 32.1494H20.648L26.8692 16.8584H22.684Z" fill="#00579F" />
                                    <path d="M15.2085 16.8584H8.84054L8.77539 17.1677C13.7428 18.4379 17.0326 21.4999 18.3843 25.1801L16.9999 18.1451C16.772 17.1675 16.0717 16.8906 15.2085 16.8584Z" fill="#FAA61A" />
                                </svg>
                                <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="70" height="48" rx="4" fill="#F5F4FF" />
                                    <path d="M45.0059 17.8809C47.4849 17.881 49.8227 20.1138 49.8369 24.2119C49.8369 28.6918 47.5271 30.7266 44.9912 30.7266C43.7451 30.7265 42.9943 30.2043 42.4844 29.8369L42.4697 33.8359L38.9277 34.585V18.1064H42.0449L42.2285 18.9834C42.7243 18.5312 43.6175 17.8809 45.0059 17.8809ZM14.7881 17.8809C15.9639 17.8809 17.1259 18.0649 18.3018 18.5312V21.8516C17.2251 21.2722 15.8647 20.9473 14.7881 20.9473C14.0374 20.9473 13.584 21.1598 13.584 21.7109C13.5848 23.2933 18.9819 22.5448 18.9961 26.7559C18.996 29.2854 16.97 30.7412 14.0234 30.7412C12.8052 30.7412 11.4736 30.5007 10.1562 29.9355V26.5723C11.3462 27.2222 12.8478 27.7021 14.0234 27.7021C14.8166 27.7021 15.3826 27.4906 15.3828 26.8408C15.3828 25.1591 10 25.7803 10 21.8799C10.0001 19.3787 11.9125 17.8809 14.7881 17.8809ZM23.1465 18.1211H25.8379V21.1309H23.1465V26.1484C23.1468 28.2389 25.3837 27.5902 25.8379 27.4062V30.2744C25.3704 30.5287 24.5207 30.7412 23.3594 30.7412C21.2628 30.7412 19.6896 29.2007 19.6895 27.1094L19.7041 15.7891L23.1611 15.0547L23.1465 18.1211ZM55.8857 17.8809C59.2432 17.8809 61 20.7357 61 24.3535C61 24.6928 60.9717 25.4277 60.9717 25.6113H54.0439C54.1999 27.2785 55.4181 27.7587 56.792 27.7588C58.1945 27.7588 59.3003 27.4619 60.2637 26.9814V29.8086C59.3003 30.3456 58.0247 30.7266 56.3389 30.7266C52.8824 30.7265 50.4737 28.5787 50.4736 24.3252C50.4736 20.7357 52.5141 17.8809 55.8857 17.8809ZM30.2441 19.167C31.0797 17.6412 32.7366 17.9515 33.1904 18.1211V21.3711C32.7507 21.2157 31.3345 21.0187 30.499 22.1064V30.4863H26.958V18.1211H30.0176L30.2441 19.167ZM37.6104 30.4863H34.0547V18.1211H37.6104V30.4863ZM44.1553 21.0186C43.3479 21.0186 42.838 21.3012 42.4697 21.7109L42.4834 26.9531C42.8234 27.3205 43.3196 27.6181 44.1553 27.6182C45.4586 27.6182 46.3369 26.2042 46.3369 24.3105C46.3368 22.4594 45.4444 21.0186 44.1553 21.0186ZM55.8711 20.75C54.9787 20.7502 54.002 21.4141 54.002 23.0107H57.6562C57.6562 21.4138 56.7353 20.75 55.8711 20.75ZM37.6104 16.2842L34.0547 17.0469V14.1641L37.6104 13.415V16.2842Z" fill="#6461FC" />
                                </svg>
                                <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="70" height="48" rx="4" fill="#F3FBFF" />
                                    <path d="M30.4727 35.5377L30.9017 32.8127L29.9461 32.7905H25.3828L28.5541 12.6822C28.5638 12.6215 28.5959 12.5649 28.6426 12.5247C28.6894 12.4846 28.7494 12.4624 28.8117 12.4624H36.5061C39.0606 12.4624 40.8234 12.994 41.7438 14.0431C42.1753 14.5353 42.4501 15.0497 42.5831 15.6157C42.7224 16.2096 42.725 16.9191 42.5887 17.7846L42.5788 17.8477V18.4023L43.0105 18.6467C43.3739 18.8395 43.6624 19.0602 43.8839 19.3128C44.2532 19.7336 44.492 20.2685 44.5928 20.9026C44.6969 21.5547 44.6625 22.3307 44.492 23.2093C44.295 24.2199 43.9767 25.1001 43.547 25.8203C43.1514 26.484 42.6478 27.0343 42.0499 27.461C41.4789 27.8662 40.8005 28.1739 40.0335 28.3708C39.2902 28.5642 38.4429 28.662 37.5135 28.662H36.9147C36.4865 28.662 36.0705 28.8162 35.7441 29.0927C35.4169 29.3748 35.2001 29.7602 35.1337 30.182L35.0886 30.4273L34.3306 35.23L34.2962 35.4064C34.2872 35.4624 34.2716 35.4902 34.2487 35.5091C34.2282 35.5261 34.1986 35.5377 34.1698 35.5377H30.4727Z" fill="#253B80" />
                                    <path d="M43.4161 17.9128C43.3932 18.0597 43.367 18.2098 43.3375 18.364C42.3226 23.5738 38.8512 25.3736 34.4173 25.3736H32.1598C31.6177 25.3736 31.1608 25.7673 31.0762 26.3021L29.9203 33.6325L29.5931 35.7103C29.538 36.0614 29.8089 36.3781 30.1631 36.3781H34.1672C34.6414 36.3781 35.044 36.0335 35.1186 35.566L35.158 35.3624L35.912 30.5784L35.9604 30.316C36.0341 29.8468 36.4376 29.5023 36.9118 29.5023H37.5106C41.3898 29.5023 44.4268 27.9273 45.3144 23.3695C45.6851 21.4656 45.4932 19.8758 44.512 18.7578C44.2152 18.4206 43.8468 18.1409 43.4161 17.9128Z" fill="#179BD7" />
                                    <path d="M42.3527 17.4882C42.1978 17.4431 42.0377 17.4021 41.8736 17.3652C41.7088 17.3291 41.5397 17.2971 41.3659 17.2692C40.7571 17.1708 40.0903 17.124 39.3757 17.124H33.3449C33.1964 17.124 33.0554 17.1576 32.9291 17.2184C32.6509 17.3521 32.4443 17.6154 32.3942 17.9378L31.1111 26.0638L31.0742 26.3008C31.1588 25.766 31.6157 25.3722 32.1578 25.3722H34.4153C38.8492 25.3722 42.3208 23.5717 43.3355 18.3627C43.3657 18.2085 43.3912 18.0584 43.4141 17.9115C43.1574 17.7754 42.8793 17.6589 42.5799 17.5596C42.5062 17.535 42.4299 17.5112 42.3527 17.4882Z" fill="#222D65" />
                                    <path d="M32.3981 17.9384C32.4481 17.616 32.655 17.3527 32.9329 17.2198C33.0602 17.1591 33.2005 17.1254 33.3488 17.1254H39.3799C40.0944 17.1254 40.7612 17.1722 41.3698 17.2706C41.5438 17.2985 41.7129 17.3305 41.8777 17.3666C42.0418 17.4035 42.2017 17.4445 42.3568 17.4896C42.4338 17.5126 42.51 17.5364 42.5847 17.5602C42.8841 17.6595 43.1623 17.7768 43.4189 17.9121C43.7209 15.9868 43.4166 14.676 42.3757 13.489C41.2281 12.1823 39.1567 11.6228 36.5063 11.6228H28.8117C28.2702 11.6228 27.8086 12.0165 27.7248 12.5522L24.5199 32.8672C24.4567 33.2691 24.7667 33.6318 25.1719 33.6318H29.9225L31.1152 26.0644L32.3981 17.9384Z" fill="#253B80" />
                                </svg>
                                <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="70" height="48" rx="4" fill="#FFF4EE" />
                                    <path d="M44.3525 10C51.8897 10 57.9998 16.181 58 23.8057C58 31.4305 51.8898 37.6123 44.3525 37.6123C40.9742 37.6123 37.8832 36.3694 35.5 34.3125C33.1168 36.3694 30.0258 37.6123 26.6475 37.6123C19.1102 37.6123 13 31.4305 13 23.8057C13.0002 16.181 19.1103 10 26.6475 10C30.0254 10 33.1169 11.2413 35.5 13.2979C37.8831 11.2413 40.9746 10 44.3525 10Z" fill="#ED0006" />
                                    <path d="M44.3525 10C51.8897 10 57.9998 16.181 58 23.8057C58 31.4305 51.8898 37.6123 44.3525 37.6123C40.9742 37.6123 37.8832 36.3694 35.5 34.3125C38.434 31.7802 40.2949 28.013 40.2949 23.8057C40.2948 19.5981 38.4344 15.8301 35.5 13.2979C37.8831 11.2413 40.9746 10 44.3525 10Z" fill="#F9A000" />
                                    <path d="M35.5 13.2981C38.4344 15.8304 40.2949 19.5983 40.2949 23.8059C40.2949 28.0133 38.4341 31.7805 35.5 34.3127C32.566 31.7805 30.7051 28.0132 30.7051 23.8059C30.7051 19.5983 32.5657 15.8304 35.5 13.2981Z" fill="#FF5E00" />
                                </svg>
                                <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="70" height="48" rx="4" fill="#F1F6FF" />
                                    <path d="M54.9932 28.6378H55.0283L57.9473 21.3117H59.999L53.6924 36.0001H51.7461L54.0908 30.8615L49.9521 21.3117H52.0039L54.9932 28.6378ZM45.1221 20.9787C46.5171 20.9787 47.6198 21.3592 48.4287 22.1085C49.2374 22.8578 49.6357 23.9047 49.6357 25.2247V31.5158H47.8301V30.1007H47.748C46.9626 31.2662 45.9311 31.8488 44.6299 31.8488C43.528 31.8487 42.5901 31.5157 41.8516 30.8497C41.1249 30.2313 40.7149 29.3159 40.7383 28.3527C40.7383 27.2942 41.1366 26.4615 41.9219 25.8312C42.7073 25.2009 43.7624 24.8918 45.0752 24.8917C46.2005 24.8917 47.115 25.1056 47.8418 25.5099V25.0695C47.8417 24.4155 47.5606 23.7974 47.0684 23.3693C46.5643 22.9173 45.9192 22.6671 45.251 22.6671C44.1961 22.6672 43.3634 23.1198 42.7539 24.0236L41.0898 22.965C41.9807 21.6449 43.3286 20.9787 45.1221 20.9787ZM36.1777 16.6017C37.3851 16.5779 38.5573 17.0415 39.4131 17.8976C41.1247 19.5151 41.2301 22.2391 39.624 23.9874L39.4131 24.2013C38.5339 25.0457 37.4555 25.4738 36.1777 25.4738H33.0596V31.5158H31.1719V16.6017H36.1777ZM45.3691 26.4376C44.6071 26.4377 43.9621 26.6276 43.4463 26.9962C42.9422 27.3649 42.6846 27.8289 42.6846 28.3878C42.6846 28.8874 42.9188 29.3514 43.3057 29.6369C43.7278 29.9699 44.2439 30.1488 44.7715 30.1369C45.5687 30.1368 46.3308 29.8151 46.8936 29.2443C47.5149 28.6496 47.8311 27.9475 47.8311 27.1388C47.2448 26.6633 46.4241 26.4257 45.3691 26.4376ZM33.0596 23.6427H36.2256C36.929 23.6664 37.6092 23.3806 38.0898 22.8693C39.0744 21.8347 39.0508 20.1701 38.0312 19.171C37.5506 18.6954 36.9055 18.4328 36.2256 18.4328H33.0596V23.6427Z" fill="#3C4043" />
                                    <path d="M26.544 24.1659C26.544 23.5831 26.4971 23.0003 26.4034 22.4294H18.4434V25.7239H23.0037C22.8161 26.7825 22.2065 27.734 21.3155 28.3286V30.4695H24.0353C25.6296 28.9828 26.544 26.7825 26.544 24.1659Z" fill="#4285F4" />
                                    <path d="M18.4442 32.539C20.7185 32.539 22.6411 31.7778 24.0361 30.4695L21.3164 28.3287C20.5544 28.852 19.5814 29.1493 18.4442 29.1493C16.2403 29.1493 14.3763 27.6388 13.7081 25.6169H10.9062V27.8291C12.3365 30.7193 15.2555 32.539 18.4442 32.539Z" fill="#34A853" />
                                    <path d="M13.708 25.6169C13.3563 24.5584 13.3563 23.4048 13.708 22.3343V20.134H10.9058C9.69808 22.5484 9.69808 25.4029 10.9058 27.8172L13.708 25.6169Z" fill="#FBBC04" />
                                    <path d="M18.4442 18.802C19.6517 18.7782 20.8123 19.2421 21.6798 20.0865L24.0948 17.6365C22.559 16.1855 20.5427 15.3886 18.4442 15.4124C15.2555 15.4124 12.3365 17.244 10.9062 20.1341L13.7081 22.3463C14.3763 20.3125 16.2403 18.802 18.4442 18.802Z" fill="#EA4335" />
                                </svg>
                            </div>

                            {/* input feilds  */}
                            <div className='flex flex-col gap-5'>
                                {/* card holder name and card number  */}
                                <div className='flex flex-col lg:flex-row items-center gap-5'>
                                    <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                        <label htmlFor="cardHolderName">Card holder name</label>
                                        <input
                                            type="text"
                                            name="cardHolderName"
                                            id="cardHolderName"
                                            className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                            placeholder='Enter your first name...'
                                        />
                                    </div>
                                    <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                        <label htmlFor="cardNum">Card number</label>
                                        <input
                                            type="number"
                                            name="cardNum"
                                            id="cardNum"
                                            className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                            placeholder='Enter your Card number...'
                                        />
                                    </div>
                                </div>

                                {/* card holder name and card number  */}
                                <div className='flex flex-col lg:flex-row items-center gap-5'>
                                    <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                        <label htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            id="cvv"
                                            className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"
                                            placeholder='Example: 4567'
                                        />
                                    </div>
                                    <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                                        <label htmlFor="expireationDate">Expiration Date</label>
                                        <input
                                            type="month"
                                            name="expiry"
                                            id="expiry"
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full 
             placeholder:text-white text-white 
             focus:outline-none focus:border focus:border-[#D0A1488C]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* btn  */}
                        <div className='flex flex-col lg:flex-row items-center gap-4 pt-16'>
                            <button
                                // onClick={() => router.back()}
                                className='w-full lg:w-1/2 bg-black rounded-lg hover:bg-[#D0A148] hover:text-white border border-[#D0A148] text-[#D0A148] py-3 transition-all duration-300 ease-in-out'>Cancel</button>
                            <button className='w-full lg:w-1/2 bg-[#D0A148] hover:bg-black hover:text-[#D0A148] hover:border hover:border-[#D0A148] rounded-lg text-white py-3'>Complete Booking</button>
                        </div>

                    </div>
                </div>

                {/* right side  */}
                <div className='w-full lg:w-1/3 flex flex-col gap-10'>
                    <div className='flex flex-col items-start gap-3'>
                        <p className='text-base'>Number of People</p>
                        {/* icons  */}
                        <div className='flex items-center gap-4'>
                            <ImUsers className='text-2xl' />
                            <FaMinus className='bg-[#FFFFFF] p-2 rounded-full text-black w-7 h-7 font-bold' />
                            <p className='font-bold'>0</p>
                            <FaPlus className='bg-[#FFFFFF] p-2 rounded-full text-black w-7 h-7 font-bold' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="address" className='text-base'>Address</label>
                        <input type="text" name="address" id="address" placeholder='Enter your Resident Address' className="px-2 py-3 bg-[#D0A1488C] rounded-lg w-full 
             focus:outline-none focus:border placeholder:text-white focus:border-[#D0A1488C]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;