<div className="app__aboutus app__bg flex__center section_padding " id="about">
      <div className = "app__aboutus-content flex__center">
          <div className = "app__aboutus-content_about">
              <h1 className = "headertext__cormorant">{scrollRef.current}</h1>
              <p className="p__opensans"><PageContent {...pages[scrollRef.current]} /></p>
              <div className="app__gallery-images_arrows">
                 <CgArrowLeftR className="gallery__arrow-icon" onClick={() => scroll('left')} />
               </div>
          </div>
          <div className="app__aboutus-content_knife flex__center">
              <img src={images.divider2} alt="about_knife" />
          </div>
          <div className="app__aboutus-content_history">
            <h1 className = "headertext__cormorant">{scrollRef.current + 1}</h1>
            <p className="p__opensans"><PageContent {...pages[scrollRef.current + 1]} /></p>
            <div className="app__gallery-images_arrows">
                 <CgArrowRightR className="gallery__arrow-icon" onClick={() => scroll('right')} />
               </div>   
         </div>
      </div>
  </div>
  
  
  
  <div className="app__aboutus app__bg flex__center section_padding " id="about"  ref={scrollRef} >
      <div className = "app__aboutus-content flex__center">
          <div className = "app__aboutus-content_about">
              <h1 className = "headertext__cormorant">{pageNo}</h1>
              <p className="p__opensans"><PageContent {...pages[pageNo]} /></p>
              <div className="app__gallery-images_arrows">
                 <CgArrowLeftR className="gallery__arrow-icon" onClick={() => scroll('left')} />
               </div>
          </div>
          <div className="app__aboutus-content_knife flex__center">
              <img src={images.divider2} alt="about_knife" />
          </div>
          <div className="app__aboutus-content_history">
            <h1 className = "headertext__cormorant">{pageNo + 1}</h1>
            <p className="p__opensans"><PageContent {...pages[pageNo + 1]} /></p>
            <div className="app__gallery-images_arrows">
                 <CgArrowRightR className="gallery__arrow-icon" onClick={() => scroll('right')} />
               </div>   
         </div>
      </div>
  </div>    
</>
