import { Typography } from '@mui/material';
import Timer from '../atoms/Timer';


const ReadTime = () => {
    return (<>
        <Typography 
         variant='caption'
         sx={{
            alignItems: "center",
            display: "flex",
            // fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontSize: "14px",
            fontWeight: 400,
            color: "#6D787E",
            marginLeft: "17.67px",
            marginTop: "17.67px",
         }}
        >
           
                <Timer />
                13-minute read
            </Typography>
    </>);
}


export default ReadTime;