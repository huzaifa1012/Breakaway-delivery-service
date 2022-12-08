// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import "./basicform.css";

// export default function BasicOrderForm() {
//   return (
//     <div className="form-wrap">
//       <div className="form-main">
//         <h1 className="bscOrdH1">Order Your Parcel Now</h1>
//         <Box
//         className="main-box-of-form"
//           component="form"
//           sx={{
//             "& .MuiTextField-root": { m: 1 },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           {/* <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="Required"

//           />
//         <TextField
//           disabled
//           id="outlined-disabled"
//           label="Disabled"

//           />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Read Only"

//           InputProps={{
//               readOnly: true,
//             }}
//             />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//               shrink: true,
//             }}
//             />
//         <TextField id="outlined-search" label="Search field" type="search" />
//         <TextField

//           id="outlined-helperText"
//           label="Helper text"
//           // defaultValue="Default Value"
//           helperText="Some important text"
//           />
//       </div> */}
//           <div>
//             <TextField
//               required
//               className="backaInp"
//               id="filled-required"
//               label="Name"
//               variant="filled"
//             />

//             <TextField
//               required
//               className="backaInp"
//               type="number"
//               id="filled-required"
//               label="Phone"
//               variant="filled"
//             />

//             <TextField
//               className="backaInp"
//               id="filled-password-input"
//               label="Pick Here"
//               type="text"
//               autoComplete="current-password"
//               variant="filled"
//             />
//             <TextField
//               className="backaInp"
//               id="filled-read-only-input"
//               label="Drop Here"
//               type="text"
//               variant="filled"
//             />
//             <TextField
//               className="backaInp"
//               id="filled-number"
//               label="Number"
//               type="number"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="filled"
//             />
//             <TextField
//               className="backaInp"
//               id="filled-search"
//               label="Search field"
//               type="search"
//               variant="filled"
//             />
//             {/* <TextField
//           className='backaInp'
//           id="filled-helperText"
//           label="Helper text"
//           // defaultValue="Default Value"
//           helperText="Some important text"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           className='backaInp'
//           id="standard-required"
//           label="Required"

//           variant="standard"
//         />
//         <TextField
//           disabled
//           className='backaInp'
//           id="standard-disabled"
//           label="Disabled"

//           variant="standard"
//         />
//         <TextField
//           className='backaInp'
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//         />
//         <TextField
//           className='backaInp'
//           id="standard-read-only-input"
//           label="Read Only"

//           InputProps={{
//             readOnly: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           className='backaInp'
//           id="standard-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           className='backaInp'
//           id="standard-search"
//           label="Search field"
//           type="search"
//           variant="standard"
//         />
//         <TextField
//           id="standard-helperText"
//           label="Helper text"
//           // defaultValue="Default Value"
//           helperText="Some important text"
//           variant="standard"
//         /> */}
//           </div>
//         </Box>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./basicform.css"
export default  function SimplOrderForm  () {


  return (
    <>
    <div className="form-wrap">
      <h1 >Place Your Order</h1>
    <div className="form-main">
      <input type="Text" placeholder="Your Name"  className="myInp01"/>
      <input type="Text" placeholder="Your Name"  className="myInp01"/>
      
      <input type="Text" placeholder="Your Name"  className="myInp01"/>
      <input type="Text" placeholder="Your Name"  className="myInp01"/>
      <input type="Text" placeholder="Your Name"  className="myInp01"/>
      <input type="Text" placeholder="Your Name"  className="myInp01"/>


    </div>
    </div>
    </>
  );
};
