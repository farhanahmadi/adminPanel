import axios from 'axios'
import React,{useState} from 'react'
import { MainLink } from '../BaseUrl/BaseUrl'
import Link from 'next/link'
import { useRouter } from 'next/router';


//import modules
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import * as shamsi from 'shamsi-date-converter';



const ReturnedList = ({returnedList}) => {

  const [pageCount, setPageCount] = useState(returnedList.count / 2);

    //refresh page
    const router = useRouter();
    const refreshData = () => {
      router.replace(router.asPath);
    }

  const handlePageClick = (event) =>{
    router.replace(`/returned/?page=${event.selected + 1}`);
  }

  return (
    <div>
    <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title mb-0">لیست مرجوعی</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>خریدار</th>
                          <th>تاریخ</th>
                          <th>وضعیت</th>
                          <th>عملیات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {returnedList.results.map(item => 
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.user.username}</td>
                            <td>{shamsi.gregorianToJalali(item.created_at.split("-")).join("-")}</td>
                            <td>{item.Confirmation ? <label className="badge badge-success">تایید شده</label> : <label className="badge badge-danger">تایید نشده</label> }</td>
                            <td>
                                <Link href={`/returned/edit_returned/?id=${item.id}`}><label className="badge badge-warning">ویرایش</label></Link>
                            </td>
                        </tr>
                          )}
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div className="styles.pagination">
        <ReactPaginate
          nextLabel="بعدی >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< قبلی"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
      />
        </div>
    <ToastContainer />
</div>
  )
}




export default ReturnedList


