import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { images } from '../../constants';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const Word = ({ value, position, setIsClicked }) => {
  
    
    return (
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            components = "img"
            height = "140"
            image = {images.clicked}
            alt="clicked on"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {value}
             </Typography>
             <Typography variant="body3" color="text.secondary">
                This word has its first letter at index "{position[0]}" and its last letter at index "{position[1]}" in the sentence.
                It has {(position[1]-position[0])} letters.<a href= {`https://www.google.com/search?q=${value}&oq=${value}`}><i>click here</i></a> to check its meaning.
             </Typography>
           </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'end'}}>
          <Button className="buttoning" size="small"   style={{color:"black"}} onClick= {()=>{setIsClicked(false)}}>Close</Button>
          </CardActions>
      </Card>
    )
};

export default Word;

