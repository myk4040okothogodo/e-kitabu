import React, {useEffect, useRef , useState} from 'react';
import PageContent from '../PageContent/PageContent';  /*I also import the PageContent container that i will uses to display the double view*/
import { getBookPages } from '../../services';     /*Notice i import the getBookPages asynchronous function that defines my query*/
import {CgArrowLeftR, CgArrowRightR} from 'react-icons/cg';
import './FullpageView.css';
import { images } from '../../constants';


const FullpageView = () => {
    const [pages, setPages ] = useState([]);    /*In the following two lines of code i use Reacts useState Hook to create  pages state to hold rsults from API and pageNo to hold the current page number that our view is renderin*/
    const [pageNo, setPageNo] = useState(0);
    const  scrollRef   =  useRef(0);
  
    useEffect(()  => {                              /*In the useEffect that i have configured to render only once initially is where i invoke the "getBookPages" async function*/
        getBookPages().then((result) => {
            setPages(result);                       /* The returned result from queryin the API is what i set to be held by the pages state variable.*/
        });
    }, []);
    
    const handleClick = (pageNo,direction) => {
         
        if (direction === 'left'  && pageNo > 2){     /* handleClick uses two arguments pagenumber and direction clicked  by user to determine, what page to render next*/
            setPageNo(pageNo - 2);
        }
        if (direction === 'left' && (pageNo === 2 || 1 ) ){
            setPageNo(pageNo - 1);
        }
        if (direction === 'right' && pageNo < (pages.length - 2)) {
            setPageNo(pageNo + 2);
        }
        if (direction === 'right' && (pageNo === (pages.length - 2 ) || (pages.length - 1) )){
            setPageNo(pageNo + 1);
        }
        if (direction === 'right' && (pageNo === pages.length)){
            setPageNo(pageNo)
        }
        scrollRef.current = pageNo;
    };
    
    return (
    <div>
    {pages.length > 0 && (   /* conditional rendering for only the case where apages received are more than zero i use the imported <PageContent /> container to render individual pages*/
    <>
    <div className="app__aboutus app__bg flex__center section_padding " id="about"  ref={scrollRef} >
      <div className = "app__aboutus-content flex__center" >
          <div className = "app__aboutus-content_about">
              <h1 className = "headertext__cormorant">{pageNo}</h1>
              <div className="p__opensans">
                <PageContent  {...pages[pageNo]} />            
              </div>
              {pageNo > 0 && (
              <div className="app__gallery-images_arrows">
                 <CgArrowLeftR className="gallery__arrow-icon" onClick={() =>  handleClick(pageNo-1,'left') } />
               </div>
               )}
          </div>
          <div className="app__aboutus-content_knife flex__center">
              <img src={images.divider2} alt="about_knife" />
          </div>
          <div className="app__aboutus-content_history">
            <h1 className = "headertext__cormorant">{pageNo + 1}</h1>
            <div className="p__opensans">
              <PageContent {...pages[pageNo + 1]} />
            </div>
            {(pageNo + 1) < pages.length - 1  && (
            <div className="app__gallery-images_arrows">
                 <CgArrowRightR className="gallery__arrow-icon" onClick={() => handleClick(pageNo+1 ,'right') } />
            </div>   
            )}
         </div>
         </div>
      </div>
    </>
   )};
   </div>
    );
};

export default FullpageView;
