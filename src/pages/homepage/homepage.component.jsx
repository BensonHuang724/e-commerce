import React from 'react';
import './homepage.styles.scss';
import {Dir} from '../../components/directory/directory.component.jsx';

export const Homepage = (props) => {
    //usage:
    return  <div className='homepage'>
                <Dir/>
            </div>
}