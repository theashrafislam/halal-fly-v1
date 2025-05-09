import React from 'react';

const CountrySelectorSection = () => {
    return (
        <div>
            <div className='max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
                {/* country you visit */}
                <div
                    className="bg-[url('/images/shadow.png')] bg-no-repeat h-[500px] bg-[#D0A148D9] w-[50%] py-2"
                >
                    {/* text content */}
                    <div className='text-[#FFF]'>
                        <p className='text-lg pb-6'>Countries You can Visit</p>
                        <h3 className='text-3xl md:text-4xl font-bold pb-6'>Select The Country of your Choice</h3>
                        <p className='text-lg pb-5'>Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami </p>
                        <button className='text-sm bg-[#00000040]'>Discover More</button>
                    </div>
                </div>

                {/* we provide best  */}
                <div className='w-[50%]'>

                </div>
            </div>
        </div>
    );
};

export default CountrySelectorSection;