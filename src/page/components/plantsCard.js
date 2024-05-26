import React from 'react';
import {ArrowDown2, Cake} from "iconsax-react";

const PlantsCard = ({info , filmData , index}) => {
    const [openList , setOpenList] = React.useState(-1);
    const handleOpenList = (value) => setOpenList(openList === value ? '' : value);

    return (
        <React.Fragment>
            <div onClick={()=>handleOpenList(index)}
                 className={`flex flex-col justify-center cursor-pointer 
                                           bg-[#27272A] gap-[6px] py-[12px] px-[12px]
                                            w-full rounded-[12px]`}>
                <div className={'flex flex-row items-center w-full'}>
                    <h3 className={'font-light text-[#CCAF61] w-1/2'}>{info?.climate}</h3>
                    <span
                        className={'font-light text-[#CCAF61] text-end w-1/2'}>{(new Date(info?.created)).toLocaleDateString('en-GB')}</span>
                </div>
                <div className={'flex flex-row items-center w-full'}>
                    <div className={'flex flex-row items-center gap-[4px] w-1/2'}>
                        <div className={`flex items-center
                                                justify-center bg-[#3F3F46]
                                                 w-[50px] h-[50px] rounded-[12px]`}>
                            <Cake size="20" color="#FBCB55"/>
                        </div>
                        <h4 className={'text-white text-sm font-bold'}>{info.name}</h4>
                    </div>
                    <div className={'text-gray-500 flex flex-row justify-end w-1/2'}>
                        {info?.climate}
                    </div>
                </div>
                <div
                     className={'flex flex-row items-center w-full'}>
                    <span className={'font-light text-sm text-white w-1/2'}>show plants film list</span>
                    <span
                        className={`flex flex-row 
                        justify-end items-center 
                       
                        font-light text-end w-1/2`}>
                        <ArrowDown2 size={'14'}
                                    className={`transition-all duration-500 
                                            ${(openList === index) ? 'rotate-180' : ''}`}
                                    color={'#ffffff'}/>
                    </span>
                </div>
                {
                    openList === index &&
                    <ul>
                        {
                            filmData.filter(data => data.planets.includes(info?.url)).filter(plants=>plants.species.length !==0).map((filmInfo, index) => (
                                <li key={'film-list-title-and-desc' + index}
                                    className={`text-[#CCAF61] border-b 
                                    border-b-amber-100 pb-3 text-sm my-2`}>
                                    <span className={'text-white font-medium mr-2 text-sm'}>Name:</span>
                                    {filmInfo.title}
                                    <span className={'block mt-2'}>Descriptions:</span>
                                    <p className={'text-justify text-white leading-[24px]'}
                                       dangerouslySetInnerHTML={{__html: filmInfo.opening_crawl}}/>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        </React.Fragment>
    )
}

export default PlantsCard
