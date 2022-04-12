import React,{useState , useEffect,useRef} from 'react'

//import styles
import styles from "./adduser.module.css"

const AddUser = () => {


    const [photos , setPhotos]  = useState({
        photo: null,
        photo1: null,
        photo2: null,
        avatar: null,
    })

    const firstFileUpload = useRef(null);
    const secoundFileUpload = useRef(null);
    const thridFileUpload = useRef(null);

    const [data , setData] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        profile: null,
        nationalCode: '',
        job: '',
        state: '',
        city: '',
        address: '',
        plate: '',
        zipCode: '',
        firstImg: null ,
        secoundImg: null,
        thirdImg: null,
    })

     // set state kardan input ha
     const inputsHandler = (event) => {
        if (event.target.name !== "avatar") {
           setData({...data , [event.target.name] : event.target.value})
        }else{
            setPhotos({...photos , avatar:event.target.files[0]})
        }
        console.log(data);
        console.log(photos)
       }
   // 
    // set kardan img ha dar state ha 
    const fileuploadHandler = async (event) =>{
        if(event.target.name === "firstImg"){
            setData({...data , firstImg: URL.createObjectURL(event.target.files[0])})
            setPhotos({...photos , photo:event.target.files[0]})
        }else if(event.target.name === "secoundImg"){
            setData({...data ,secoundImg: URL.createObjectURL(event.target.files[0])})
            setPhotos({...photos , photo1:event.target.files[0]})
        }else if(event.target.name === "thirdImg"){
            setData({...data ,thirdImg: URL.createObjectURL(event.target.files[0])})
            setPhotos({...photos , photo2:event.target.files[0]})
        }
    }
    // 
    
    // baraye inke input hide shode az tarig div karkone
    const firstHandleUpload = () => {
        firstFileUpload.current.click();
        };
    const secoundHandleUpload = () => {
    secoundFileUpload.current.click();
    };
    const thirdHandleUpload = () => {
    thridFileUpload.current.click();
    };
// 


    // in baxsh baraye btn hazf mibashad ke aks preview pakshode va div nemayesh dade shavad
    const clickHandler = (event) =>{
        if(event.target.id === "firstImgBtn"){
        setData({...data , firstImg: null})
        }else if(event.target.id === "secoundImgBtn"){
        setData({...data , secoundImg: null})
        }else if(event.target.id === "thirdImgBtn"){
        setData({...data , thirdImg: null})
        }
    }
    // 


  return (
        <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">ایجاد کاربر</h4>
            <form className='forms-sample'>
                <div className={styles.container}>
                    <div className="form-group">
                    <label htmlFor="usernameInput">نام کاربری</label>
                    <input type="text" name='username' className="form-control form-control-lg" id="usernameInput" placeholder="نام کاربری"  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="emailInput">ایمیل </label>
                    <input type="text" name='email' className="form-control form-control-lg" id="emailInput" placeholder="ایمیل"  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="nameInput">نام </label>
                    <input type="text" name='firstName' className="form-control form-control-lg" id="nameInput" placeholder="نام "  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="familiyNameInput">نام خانوادگی</label>
                    <input type="text" name='lastName' className="form-control form-control-lg" id="familiyNameInput" placeholder="نام خانوادگی" onChange={inputsHandler} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="profileInput">پروفایل </label>
                    <input type="file" name='avatar' className="form-control form-control-lg" id="profileInput" placeholder="پروفایل " onChange={inputsHandler} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="nationalCodeInput">کدملی</label>
                    <input type="text" name='nationalCode' className="form-control form-control-lg" id="nationalCodeInput" placeholder="کدملی "  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="jobInput"> شغل</label>
                    <input type="text" name='job' className="form-control form-control-lg" id="jobInput" placeholder="شغل " onChange={inputsHandler} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="stateInput"> استان</label>
                    <input type="text" name='state' className="form-control form-control-lg" id="stateInput" placeholder=" استان"  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="cityInput"> شهر</label>
                    <input type="text" name='city' className="form-control form-control-lg" id="cityInput" placeholder=" شهر"  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="addressInput"> آدرس</label>
                    <input type="text" name='address' className="form-control form-control-lg" id="addressInput" placeholder=" آدرس"  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="plateInput"> پلاک</label>
                    <input type="text" name='plate' className="form-control form-control-lg" id="plateInput" placeholder=" پلاک"  onChange={inputsHandler}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="zipCodeInput">کد پستی</label>
                    <input type="text" name='zipCode' className="form-control form-control-lg" id="zipCodeInput" placeholder=" کد پستی" onChange={inputsHandler} />
                    </div>
                </div>
                <div className={styles.imageContainer} dir="rtl">
                    {data.firstImg ?/* <button onClick={fileuploadclickHandler}>upload</button> */ 
                        <div className={styles.firstImg}>
                            <img
                            src={data.firstImg}
                            alt="Thumb"
                            />
                            <button id="firstImgBtn" onClick={clickHandler}>حدف عکس</button>
                        </div>
                        :
                        <div className={styles.imgBox}>
                            <input style={{display:"none"}} name="firstImg" onChange={fileuploadHandler} type="file" 
                            ref={firstFileUpload} />
                            <section onClick={() => firstHandleUpload()} className={styles.divImg}>
                                <p>عکس کارت ملی</p>
                            </section>
                        </div>
                    }
                    {data.secoundImg ?/* <button onClick={fileuploadclickHandler}>upload</button> */ 
                        <div className={styles.secoundImg}>
                           
                        <img
                            src={data.secoundImg}
                            alt="Thumb"
                            />
                            <button id="secoundImgBtn" onClick={clickHandler}>حدف عکس</button>
                            
                        </div>
                        :
                        <div className={styles.imgBox}>
                        <input style={{display:"none"}} name="secoundImg" onChange={fileuploadHandler} type="file" 
                        ref={secoundFileUpload} />
                        <section onClick={() => secoundHandleUpload()} className={styles.divImg}>
                            <p>عکس مجوز جوجه ریزی</p>
                        </section>
                        </div>
                    }
                    {data.thirdImg ?/* <button onClick={fileuploadclickHandler}>upload</button> */ 
                        <div className={styles.thirdImg}>
                            <img
                            src={data.thirdImg}
                            alt="Thumb"
                            />
                            <button id="thirdImgBtn" onClick={clickHandler}>حدف عکس</button>
                        </div>
                        :
                        <div className={styles.imgBox}>
                        <input style={{display:"none"}} name="thirdImg" onChange={fileuploadHandler} type="file" 
                        ref={thridFileUpload} />
                        <section onClick={() => thirdHandleUpload()} className={styles.divImg}>
                            <p>سایر</p>
                        </section>
                        </div>
                    }

                    
                </div>
                <button className="btn btn-success mr-2">ثبت</button>
                <button className="btn btn-light">انصراف</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default AddUser