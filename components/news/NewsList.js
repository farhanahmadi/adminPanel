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

//import components
import { descreption } from '../functions/SplitText';


const NewsList = ({newsList}) => {
 
    const [pageCount, setPageCount] = useState(newsList.count / 2);

    //refresh page
    const router = useRouter();
    const refreshData = () => {
      router.replace(router.asPath);
    }

  const userDeleteHandler = (id , title) =>{
    if (confirm(`آیا مطمعن هستید که خبر (${title}) پاک شود`)) {
        axios.delete(`${MainLink}/news/rd/${id}/`);
        toast.success("خبر با موفقیت حذف شد");
       setTimeout(() =>{
          refreshData();
       },2500)
    }
  }

  const handlePageClick = (event) =>{
    router.replace(`/users/?page=${event.selected + 1}`);
  }

  return (
    <div>
    <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title mb-0">لیست کاربران</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>نویسنده</th>
                          <th>تیتر خبر</th>
                          <th>متن خبر</th>
                          <th>تاریخ</th>
                          <th>عملیات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newsList.results.map(item => 
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.author.username}</td>
                            <td>{item.title}</td>
                            <td>{descreption(item.body)}</td>
                            <td>{shamsi.gregorianToJalali(item.created_at.split("-")).join("-")}</td>
                            <td>
                                <Link href={`/news/edit_news/?id=${item.id}`}><label className="badge badge-warning">ویرایش</label></Link>
                                <label onClick={() => userDeleteHandler(item.id , item.title)} className="badge badge-danger">حذف</label>
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

export default NewsList