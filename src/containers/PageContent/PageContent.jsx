import React,{useState} from 'react';
import { Sentence } from '../../components';
import './PageContent.css';


const PageContent = ({content , tokens}) => {
        
        const [clicked, setClicked] = useState(false);
        return (
        <div>
            <Sentence content={content} tokens={tokens} clicked={clicked} />
        </div>
        );
};


export default PageContent;
