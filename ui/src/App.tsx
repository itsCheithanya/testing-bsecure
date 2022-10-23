import React from 'react';
import Button from '@mui/material/Button';
import { createDockerDesktopClient } from '@docker/extension-api-client';
import { Autocomplete, AutocompleteRenderInputParams, CssBaseline, Stack, TextField, Typography } from '@mui/material';
import { off, stderr, stdout } from 'process';
import { Interface } from 'readline';
import { DockerMuiThemeProvider } from '@docker/docker-mui-theme';

import { useRecoilValue } from 'recoil';
import { scanUrl } from './Atom';
import { Ladingpage } from './Ladingpage';
import { Box} from '@mui/material';
import { UrlBox } from './UrlBox';
import { Scanning } from './Scanning';




const client = createDockerDesktopClient();

function useDockerDesktopClient() {
  return client;
}

 export function App() {
  const [enableScan,setEnableScan]=React.useState<boolean>(false);
  const [loading,setLoading]=React.useState(false);
  const [showLandingpage, setShowLandingpage] = React.useState("flex");
  const [finalUrl,setFinalUrl]=React.useState("");

 const [response,setResponse]=React.useState<string | any>();
 

 const ddClient = useDockerDesktopClient();



 function processOutput(result:any){
  var output = result.stdout;
  var res=JSON.parse(output);
   //    ddClient.desktopUI.toast.success(res)
  //ddClient.desktopUI.toast.success("process fun")
 //setResponse(result)
}  
    

//const url=useRecoilValue(scanUrl);
// Note: This line reliest application.
// If you're running this React app in a browser, it won't work properly.



React.useEffect(() => {
  if (enableScan) {
      runSCAN(finalUrl);
  }
}, [enableScan]);


async function runSCAN(url:string) {
 
  
var stdout="";
var stderr="";
  let cmdParts:string[]=[
  
"ekirmayer/kubescape",
"scan"

  ]

cmdParts.push(url);
cmdParts.push(" --format json ");
//cmdParts.push("--format-version v2");


//ddClient.desktopUI.toast.success(cmdParts.join(" "));
await ddClient.docker.cli.exec("run", cmdParts, {

  stream: {
    onOutput(data: any) {
      stdout += data.stdout;
    //  ddClient.desktopUI.toast.success(stdout+"yayyyy");
    // processOutput(stdout);
      if(data.stderr){
      stderr += data.stderr;
       }   
    },
    onError(error) {
      ddClient.desktopUI.toast.error(`An errror occured while scanning ${url}`);
      console.log(error);
    },
    onClose(exitCode) {
     // ddClient.desktopUI.toast.success(`exitcode $(exitcode)`);
      var result = { stderr: stderr, stdout: stdout };
    
      if (exitCode == 0) {
       
        ddClient.desktopUI.toast.success(`The ${url} scanning was successfull`);
      //  var output = result.stdout;
       // var res=JSON.parse(output);
      setLoading(false);
      setResponse((result.stdout));
      console.log((result.stdout));
 

  
      
      // processOutput(result);
      //  ddClient.desktopUI.toast.success(result.stdout);
        
     
      } else {
        setResponse((result.stderr));
        setLoading(false);
        ddClient.desktopUI.toast.error("Scanning failed");
      
      }

    },
  }
})

}




  return (
    
 

<>
    <Ladingpage
    loading={loading}
    setEnableScan={setEnableScan}
    setLoading={setLoading}
    setFinalUrl={setFinalUrl}
    setResponse={setResponse}
    showLandingpage={showLandingpage}
    />

    <TextField
         label="Scanning response"
         sx={{ width:910}}
         disabled
         multiline
         variant="outlined"
         minRows={5}
         value={response?? ''}
       />
 
  
   
 
  

        </>
    
    
  );
}
