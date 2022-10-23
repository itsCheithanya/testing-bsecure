import { DockerMuiThemeProvider } from '@docker/docker-mui-theme';
import { createDockerDesktopClient } from '@docker/extension-api-client';
import { Box, Button, TextField, Typography} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { useRecoilState } from "recoil";
import { App } from './App';
//import { LoadingButton } from '@mui/lab';


const client = createDockerDesktopClient();

    function useDockerDesktopClient() {
      return client;
    }
export function Scanning(props:any){
    
//    const ddClient = useDockerDesktopClient();
 
    return(
        <>
        
     <h1>Scanning.........please wait</h1>
        </>
    )
}