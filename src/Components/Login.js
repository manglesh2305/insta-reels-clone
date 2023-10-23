import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import './Login.css'
import insta from '../assets/insta-logo.jpg';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link, useNavigate } from 'react-router-dom';
import { useContext, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
    const store = useContext(AuthContext);
    const useStyles = makeStyles({
        text1: {
            color: 'grey',
            textAlign: 'center'
        },
        text2: {
            textAlign: 'center'
        },
        card2: {
            height: '5vh',
            marginTop:'2%'
        }
    })
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const handleClick = async() => {
        try{
            setError('');
            setLoading(true);
            let res = await login(email,password);
            setLoading(false);
            navigate('/');
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setEmail('')
            },2000);
            setLoading(false);
        }
    }

    return (
        <div className="loginWrapper">
            <div className='loginCard'>
                <Card variant='outlined'>
                    <div className='insta-logo'>
                        <img src={insta} alt='insta-logo' />
                    </div>
                    <CardContent>
                        {error!='' && <Alert severity="error">{error}</Alert>}
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size="small" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size="small" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Typography className={classes.text1} color="primary" variant='subtitle1'>
                            Forget Password ?
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant='contained' disabled={loading} onClick={handleClick}>
                            Login
                        </Button>
                    </CardActions>
                </Card>
                <Card variant='outlined' className={classes.card2}>
                    <Typography className={classes.text1} variant='subtitle1'>
                        Don't have an account ? <Link to='/signup'style={{textDecoration:'none'}}>Signup</Link>
                    </Typography>
                </Card>
                
            </div>
        </div>


    );
}