import { DockerMuiThemeProvider } from '@docker/docker-mui-theme';
import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Loading } from './Atom';
import { Scanning } from './Scanning';
import { UrlBox } from './UrlBox';




export function Ladingpage(props:any){
   
//const loading=useRecoilValue(Loading);

    return(
        
          <Box flexDirection='column' alignItems="center" sx={{
            minWidth: 275, m: '4rem', flexDirection: "column", display:props.showLandingpage, justifyContent: 'center', alignItems: "center"
        }}>
            <Box sx={{ display: 'flex' }}>
                <img src="kubescape-by-armo.png" alt="Kubescape" height="160px" />
                <Box sx={{ marginLeft: '0.8rem', marginTop: '1.8rem' }}>
                    <Typography variant="h3" fontFamily='Droplet'>
                        Kubescape
                    </Typography>
                    <Typography variant="h1" fontFamily='Droplet'>
                        By ARMO
                    </Typography>
                </Box>
            </Box>
           
            <Typography variant="h4" component="div" gutterBottom sx={{ marginTop: '2.5rem' }}>
            Open-source kubernetes manifest files scanning tool.
            </Typography>
            <Typography variant="h5" sx={{ marginTop: '2rem' }}>
            Kubescape is a K8s open-source tool providing a multi-cloud K8s single pane of glass, including risk analysis, security compliance, RBAC visualizer and image vulnerabilities scanning. 
            </Typography>
           
            

            <Box flexDirection='column' alignItems="center" >
            <Typography variant="h5" sx={{ marginTop: '2rem' }}>
                Enter the url of the manifest file to scan
            </Typography>
            <Box marginTop='1rem' width='80%' maxWidth='800px'>
                {props.loading? <Scanning/>:  <UrlBox
                     setEnableScan={props.setEnableScan}
                     setLoading={props.setLoading}
                    setFinalUrl={props.setFinalUrl}
                    setResponse={props.setResponse}
                    textAlign='center'
                    /> 
                     } 
                       
            </Box>

          </Box>
        </Box >

        
    )
}