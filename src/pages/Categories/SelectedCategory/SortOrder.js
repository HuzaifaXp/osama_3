import React, { useState, useEffect} from 'react'

const SortOrder = (sortList,search) => {
 
    var [search,setSearch] = useState();
useEffect(() => {
 setSearch(search);
}, [search])

    
  return (
    <div>
         <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search by asdfsdf" onChange={(e)=> setSearch(e.target.value) } />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4">
                                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Sort by
                                        </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">                                 
                                    <button className="dropdown-item" onClick={()=> sortList(true,false,false)}>Latest</button>
                                    <button className="dropdown-item" onClick={()=> sortList(false,true,false)}>Popularity</button>                            
                                    <button className="dropdown-item" onClick={()=> sortList(false,false,true)}>Best Rating</button>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default SortOrder