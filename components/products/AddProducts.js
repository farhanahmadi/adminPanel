import React from 'react'

const AddProducts = () => {
  return (
    <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">ایجاد محصول</h4>
            <form className="forms-sample">
                <div className="form-group">
                <label htmlFor="exampleInputName">نام محصول</label>
                <input type="text" className="form-control form-control-lg" id="exampleInputName" placeholder="نام محصول" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputCategory" >دسته بندی</label>
                    <select id='exampleInputCategory' className="form-control form-control-lg">
                    <option>دسته بندی اول</option>
                    <option>دسته بندی دوم</option>
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputSubCategory" >زیر شاخه</label>
                    <select id='exampleInputSubCategory' className="form-control form-control-lg">
                    <option>دسته بندی اول</option>
                    <option>دسته بندی دوم</option>
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputBuyPrice">قیمت خرید</label>
                <input type="text" className="form-control form-control-lg" id="exampleInputBuyPrice" placeholder="قیمت خرید" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputSellPrice">قیمت فروش</label>
                <input type="text" className="form-control form-control-lg" id="exampleInputSellPrice" placeholder="قیمت فروش" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputCreator">تولید کننده</label>
                <input type="text" className="form-control form-control-lg" id="exampleInputCreator" placeholder="تولید کننده" />
                </div>
                <div className="form-group">
                <label htmlFor="exampleTextarea">توضیحات</label>
                <textarea className="form-control form-control-lg" id="exampleTextarea" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-success mr-2">ثبت</button>
                <button className="btn btn-light">انصراف</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default AddProducts