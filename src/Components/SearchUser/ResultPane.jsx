import './searchUser.css'
import { SearchOff  } from '@mui/icons-material'
const ResultPane = () => {
    return(
        <div style={{width: '100%', backgroundColor: 'green'}}>
            <div className="no-result">
                <SearchOff sx={{color: '#808080', fontSize: 72}}/>
                <p>No users found</p>
            </div>
        </div>
    )
}

export default ResultPane