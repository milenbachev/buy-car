import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { isAuth } from '../../hoc/isAuth.js'
import { AuthContext } from '../../contexts/AuthContext.js';
import * as carService from '../../services/carService.js';

import './Create.css'

function Create() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const onCarCreate = (e) => {
        e.preventDefault();

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

        carService.createCar({
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
        }, user.accessToken)
            .then(() => {
                navigate('/')
            })
    }
    return (
        <section className='create'>
            <form id='create-form' method='POST' onSubmit={onCarCreate}>
                <div className='form-header-create'>
                    <h3 className='form-header-create-title'>Create car</h3>
                </div>
                <div className='create-section'>
                    <section className='create-section-first'>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='brand'>Brand</label>
                            <input type='text' className='form-input' name='brand' placeholder='Audi' />
                        </div>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='model'>Model</label>
                            <input type='text' className='form-input' name='model' placeholder='RS 6' />
                        </div>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='color'>Color</label>
                            <input type='text' className='form-input' name='color' placeholder='red' />
                        </div>
                    </section>
                    <section className='create-section-second'>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='price'>Price</label>
                            <input type='number' className='form-input' name='price' placeholder='1' />
                        </div>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='year'>Year</label>
                            <input type='number' className='form-input' name='year' placeholder='2000' />
                        </div>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='kilometersTraveled'>Kilometers Traveled</label>
                            <input type='number' className='form-input' name='kilometersTraveled' placeholder='1' />
                        </div>
                    </section>
                    <section className='create-section-three'>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='img'>Img</label>
                            <input type='img' className='form-input' name='img' placeholder='url' />
                        </div>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='transmission'>Transmission</label>
                            <select name='transmission' className='form-input'>
                                <option value="manual">Manual</option>
                                <option value='automatic'>Automatic</option>
                                <option value='semi-automatic'>Semi-automatic</option>
                            </select>
                        </div>
                        <div className='form-element'>
                            <label className='form-element-label' htmlFor='engine'>Engine</label>
                            <select name='engine' className='form-input'>
                                <option value="gasoline">Gasoline</option>
                                <option value='diesels'>Diesels</option>
                                <option value='electric'>Electric</option>
                                <option value='hybrid'>Hybrid</option>
                            </select>
                        </div>
                    </section>
                </div>
                <section className='create-section-description'>
                    <div className='form-element-description'>
                        <label className='form-element-label' htmlFor='description'>Description</label>
                        <textarea rows='4' cols='100' className='form-element-description' name='description' placeholder='best car' />
                    </div>
                </section>
                <input className='button-submit-create' type='submit' value='Create Car' />
            </form>
        </section>
    )
}

export default isAuth(Create);