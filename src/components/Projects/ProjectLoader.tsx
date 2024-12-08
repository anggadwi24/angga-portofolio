export default function ProjectLoader({ index }: { index: number }) {
    return (
        <>
            <div className="relative flex flex-col lg:flex-row justify-between w-full  rounded-md w-full bg-white gap-4">

                <div className="lg:w-1/2 w-full h-60 bg-gray-200  transition-all animate-pulse hover:animate-none">

                </div>
                <div className="lg:w-1/2 w-full  flex flex-col gap-2  p-4">
                    <div className="w-48 h-6 rounded-md w-1/2 bg-gray-200 transition-all animate-pulse"></div>
                    <div className="flex flex-col gap-1">
                        {
                            Array.from({ length: 4 }, (_, i) => (
                                <div key={i} className='h-4 w-3/4 bg-gray-200 transition-all animate-pulse rounded-md'></div>
                            ))
                        }

                    </div>
                    <div className="w-24 mt-4 h-8 rounded-md animate-pulse transition-all bg-gray-200"></div>
                </div>





            </div>
        </>
    )
}