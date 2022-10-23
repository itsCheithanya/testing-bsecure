import { DockerMuiThemeProvider } from '@docker/docker-mui-theme';
import { Box, Button, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { useRecoilState } from "recoil";
import { App } from './App';
import { scanUrl as scanUrlAtom } from './Atom';




export function UrlBox(props:any){
const [url,setUrl]=React.useState("");
//const [scanUrl,submitScanUrl]=useRecoilState(scanUrlAtom);
    return (
        <Box width='300px' minWidth='450px'>
        <Box display='flex'>

   
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',}}>

        <TextField
        fullWidth
       placeholder="Enter repo url to scan"
      onChange={(e) => {setUrl(e.target.value);
      props.setResponse("");
}
      } 
       value={url}
        >
       </TextField>
 
    </Box>

            <Button sx={{ marginLeft: '3px' }}
                variant="contained"
                onClick={()=>{
             //   submitScanUrl(url);
             props.setFinalUrl(url);
                props.setEnableScan(true);
                props.setLoading(true);
                }}
              >
                Scan Image
            </Button>
        </Box>
    </Box>
);
}