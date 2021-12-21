import {useState, useEffect, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {AuthContext} from '../../contexts/AuthContext';
import * as carService from '../../services/carService.js';
import { validate } from '../Create/createValidateForm.js';

import './Edit.css';

function Edit(){
    const initialValue = {
        brand: false,
        model: false,
        description: false,
        price: false,
        year: false,
        color: false,
        img: false,
        kilometersTraveled: false
    }
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);
   const {carId} = useParams();
   const [car, setCar] = useState(carId);
   const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});

   useEffect(() => {
    console.log(formError)
    console.log(Object.keys(formError).length)
    if(Object.keys(formError).length === 0){
    
    }
       carService.getOne(carId)
        .then(result => {
            setCar(result)
        })
   },[carId, formError])

   const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value})

    setFormError(validate(formValue))
   
}
   
   const onEditCar = (e) => {
       e.preventDefault();

       if(Object.keys(formError).length > 0){
        return
    }

       let formData = new FormData(e.currentTarget);

        let brand = formData.get('brand');
        let model = formData.get('model');
        let engine = formData.get('engine');
        let transmission = formData.get('transmission');
        let description = formData.get('description');
        let price = formData.get('price');
        let year = formData.get('year');
        let color = formData.get('color');
        let img = formData.get('img');
        let kilometersTraveled = formData.get('kilometersTraveled');

       carService.editCar({
           brand,
           model,
           engine,
           transmission,
           description,
           price,
           year,
           color,
           img,
           kilometersTraveled
       }, user.accessToken, carId)
        .then(() => {
            navigate(`/details/${carId}`)
        })
   }
   
   return(
    <section className='edit'>
        <form id='edit-form' method='POST' onSubmit={onEditCar} >
            <div className='form-header-edit'>
                <h3 className='form-header-edit-title'>Edit car</h3>
            </div>
            <div className='edit-section'>
                <section className='edit-section-first'>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='brand'>Brand</label>
                        <input type='text' className='form-input' name='brand' defaultValue={car.brand} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.brand}</p>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='model'>Model</label>
                        <input type='text' className='form-input' name='model' defaultValue={car.model} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.model}</p>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='color'>Color</label>
                        <input type='text' className='form-input' name='color' defaultValue={car.color} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.color}</p>
                </section>
                <section className='edit-section-second'>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='price'>Price</label>
                        <input type='number' className='form-input' name='price' defaultValue={car.price} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.price}</p>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='year'>Year</label>
                        <input type='number' className='form-input' name='year' defaultValue={car.year} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.year}</p>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='kilometersTraveled'>Kilometers Traveled</label>
                        <input type='number' className='form-input' name='kilometersTraveled' defaultValue={car.kilometersTraveled} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.kilometersTraveled}</p>
                </section>
                <section className='edit-section-three'>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='img'>Img</label>
                        <input type='img' className='form-input' name='img' defaultValue={car.img} onChange={onChangeHandler}/>
                    </div>
                    <p className='p-edit'>{formError.img}</p>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='transmission'>Transmission</label>
                        <select name='transmission' className='form-input' value={car.transmission} onChange={(e) => setCar(t => ({...t, transmission: e.target.value}))}>
                            <option defaultValue={car.transmission}></option>
                            <option value="manual">Manual</option>
                            <option value='automatic'>Automatic</option>
                            <option value='semi-automatic'>Semi-automatic</option>
                        </select>
                    </div>
                    <div className='form-element'>
                        <label className='form-element-label' htmlFor='engine'>Engine</label>
                        <select name='engine' className='form-input' value={car.engine} onChange={(e) => setCar(c =>({...c, engine: e.target.value}))} >
                            <option value="gasoline">Gasoline</option>
                            <option value='diesels'>Diesels</option>
                            <option value='electric'>Electric</option>
                            <option value='hybrid'>Hybrid</option>
                        </select>
                    </div>
                </section>
            </div>
            <section className='edit-section-description'>
                <div className='form-element-description'>
                    <label className='form-element-label' htmlFor='description'>Description</label>
                    <textarea rows='4' cols='100' className='form-element-description' name='description' defaultValue={car.description} onChange={onChangeHandler}/>
                </div>
                <p className='p-edit'>{formError.description}</p>
            </section>
            <input className='button-submit-create' type='submit' value='Save Change' />
        </form>
    </section>
)
       
}
   
export default Edit
