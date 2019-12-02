import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    //We will pass the data through props
    const {itemsCount,pageSize} =props;
    const pageCount = itemsCount/pageSize;
    const pages = _.range(1,pageCount+1);
    return ( 
    <nav aria-label="Page navigation example">
    <ul class="pagination"> 
       {pages.map(page=><li className="page-item"><a className="page-link" href="#">{page}</a></li>)}
      
    </ul>
  </nav> );
}
 
export default Pagination;