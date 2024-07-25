// import React, { useState } from 'react'
// import { TextField, Button } from "@mui/material"

// const AuthForm = ({ onSubmit, buttonText }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit({ email, password });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <TextField
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 fullWidth
//                 required
//             />
//             <TextField
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 fullWidth
//                 required
//             />
//             <Button type="submit" variant="contained" color="primary">
//                 {buttonText}
//             </Button>
//         </form>
//     )
// }

// export default AuthForm;