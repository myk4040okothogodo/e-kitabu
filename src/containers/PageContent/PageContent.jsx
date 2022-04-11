import React,{useState} from 'react';
import { Sentence } from '../../components';
import './PageContent.css';

/* in thie component i destructrure the content and tokes from the page props passed from the parent component <FullpageView />*/
/*I then invoke the subcomponent <Sentence > passing the destrcutrurd props to it*/
const PageContent = ({content , tokens}) => {
        
        const [clicked, setClicked] = useState(false);
        return (
        <div>
            <Sentence content={content} tokens={tokens} clicked={clicked} />
        </div>
        );
};


export default PageContent;
