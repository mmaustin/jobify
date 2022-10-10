import React from 'react'
import { useAppContext } from '../context/appContext';
import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';


const PageBtnContainer = () => {
    const {numOfPages, page, changePage} = useAppContext();

    const pages = Array.from({length: numOfPages}, (_,index)=>{
        return index + 1;
    })

    const nextPage = () => {
        console.log('next page')
    }

    const prevPage = () => {
        console.log('prev page')
    }

    return (
        <Wrapper>
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft/>
                prev
            </button>
            <div className='btn-container'>
                {pages.map(pageNumber => {
                    return <button
                        key={pageNumber}
                        type='button'
                        className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                        onClick={()=>changePage(pageNumber)}
                    >
                    {pageNumber}
                    </button>
                })}
            </div>
            <button className='next-btn' onClick={nextPage}>
                next
                <HiChevronDoubleRight/>
            </button>            
        </Wrapper>
    )
}

export default PageBtnContainer