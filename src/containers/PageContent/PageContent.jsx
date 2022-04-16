import React,{useState} from 'react';
import { Sentence } from '../../components';
import './PageContent.css';

/* this component will allow for future individuation of pages, i.e pages can be rendered differently based on some parameter*/



/* in this component i destructure the content and tokens from the page props passed from the parent component <FullpageView />*/
/*I then invoke the subcomponent <Sentence > passing the destrcutrurd props to it*/
const PageContent = ({content , tokens}) => {
        
      
        return (
        <div>
            <Sentence content={content} tokens={tokens} />
        </div>
        );
};


export default PageContent;
