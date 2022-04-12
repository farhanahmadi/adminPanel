import React from 'react'

const ProductsList = () => {
  return (
    <div>
        <div className="col-md-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mb-0">لیست محصولات</h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>نام محصول</th>
                              <th>دسته بندی</th>
                              <th>قیمت</th>
                              <th>تعداد محصول</th>
                              <th>عملیات</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>لورم ایپسان</td>
                              <td>لورم</td>
                              <td>25000</td>
                              <td>20</td>
                              <td>
                                  <label className="badge badge-warning">ویرایش</label>
                                  <label className="badge badge-danger">حذف</label>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>لورم ایپسان</td>
                              <td>لورم</td>
                              <td>25000</td>
                              <td>20</td>
                              <td>
                                  <label className="badge badge-warning">ویرایش</label>
                                  <label className="badge badge-danger">حذف</label>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>لورم ایپسان</td>
                              <td>لورم</td>
                              <td>25000</td>
                              <td>20</td>
                              <td>
                                  <label className="badge badge-warning">ویرایش</label>
                                  <label className="badge badge-danger">حذف</label>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>لورم ایپسان</td>
                              <td>لورم</td>
                              <td>25000</td>
                              <td>20</td>
                              <td>
                                  <label className="badge badge-warning">ویرایش</label>
                                  <label className="badge badge-danger">حذف</label>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>لورم ایپسان</td>
                              <td>لورم</td>
                              <td>25000</td>
                              <td>20</td>
                              <td>
                                  <label className="badge badge-warning">ویرایش</label>
                                  <label className="badge badge-danger">حذف</label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsList