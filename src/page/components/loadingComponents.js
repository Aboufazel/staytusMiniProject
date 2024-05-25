const LoadingComponents = () => {

    return(
        <div className={'flex flex-col w-full gap-[16px]'}>
            <div className={'w-full h-[90px] rounded-[12px] bg-gray-200 animate-pulse'}></div>
            <div className={'w-full h-[90px] rounded-[12px] bg-gray-200 animate-pulse'}></div>
            <div className={'w-full h-[90px] rounded-[12px] bg-gray-200 animate-pulse'}></div>
            <div className={'w-full h-[90px] rounded-[12px] bg-gray-200 animate-pulse'}></div>
        </div>
    )
}

export default LoadingComponents
