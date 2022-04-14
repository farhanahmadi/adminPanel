import axios from 'axios'
import React,{useState} from 'react'
import { MainLink } from '../BaseUrl/BaseUrl'

const UsersList = ({userlist}) => {
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
                          <th>نام</th>
                          <th>نام خانوادگی</th>
                          <th>شماره تلفن</th>
                          <th>ایمیل</th>
                          <th>عملیات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userlist.map(item => 
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <label className="badge badge-warning">ویرایش</label>
                                <label className="badge badge-danger">حذف</label>
                            </td>
                        </tr>
                          )}
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}




export default UsersList


