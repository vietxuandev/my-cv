import React, { Fragment } from 'react';
import './style.scss';

const index = (props) => {
    const { period = '', company = '', position = '', description = <Fragment /> } = props;
    return (
        <Fragment>
            <div className='timeline-item clearfix'>
                <h5 className='item-period '>{period}</h5>
                <span className='item-company'>{company}</span>
                <h4 className='item-title'>{position}</h4>
                {description}
            </div>
        </Fragment>
    )
}

export default index
