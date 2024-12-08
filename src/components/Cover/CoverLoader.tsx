

export default function CoverLoader() {


    return (
        <section className="relative flex items-center justify-center w-screen h-screen bg-white">
            <div className='max-w-7xl w-full p-4 lg:p-12'>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-4'>
                    <div className='w-3/4 order-2 lg:order-1 flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <div className="h-8 w-48 bg-gray-200 transition-all animate-pulse rounded-md"></div>
                            <div className="h-6  w-40 bg-gray-200 transition-all animate-pulse rounded-md"></div>

                        </div>
                        {
                            Array.from({ length: 4 }, (_, i) => (
                                <div key={i} className='h-4 w-full bg-gray-200 transition-all animate-pulse rounded-md'></div>
                            ))
                        }

                    </div>
                    <div className='w-full lg:w-1/3 order-1 lg:order-2 flex items-center justify-center'>
                        <div className='rounded-full bg-gray-200 transition-all animate-pulse w-32 lg:w-60 h-32 lg:h-60'>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
