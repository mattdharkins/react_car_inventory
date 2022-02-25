import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseYear, chooseMake, chooseModel, choosePrice, chooseLocation, 
    chooseExtColor, chooseIntColor, chooseOdometer, chooseVin } from '../../redux/slices/rootSlice'
import { Input } from '../sharedComponents';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps{
    id?: string;
    data?: {}
}

interface CarState{
    // name: string;
    year: string;
    make: string;
    model: string
    price: number;
    location: string;
    ext_color: string;
    int_color: string;
    odometer: string;
    vin: string
}

export const CarForm = (props: CarFormProps) =>{
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore();
    // const name = useSelector<CarState>(state => state.name)
    const year = useSelector<CarState>(state => state.year)
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state => state.model)
    const price = useSelector<CarState>(state => state.price)
    const location = useSelector<CarState>(state => state.location)
    const ext_color = useSelector<CarState>(state => state.ext_color)
    const int_color = useSelector<CarState>(state => state.int_color)
    const odometer = useSelector<CarState>(state => state.odometer)
    const vin = useSelector<CarState>(state => state.vin)

    const { register, handleSubmit } = useForm({ })
    const onSubmit = async ( data: any, event:any ) =>{
        console.log(props.id)

        if (props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated Car: ${props.id}`)
            window.location.reload()
            event.target.result();
        } else {
            dispatch(chooseYear(data.year))
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(choosePrice(data.price))
            dispatch(chooseLocation(data.location))
            dispatch(chooseExtColor(data.ext_color))
            dispatch(chooseIntColor(data.int_color))
            dispatch(chooseOdometer(data.odometer))
            dispatch(chooseVin(data.vin))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder='Year' />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="price"/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <Input {...register('location')} name="location" placeholder="Location"/>
                </div>
                <div>
                    <label htmlFor="ext_color">Ext Color</label>
                    <Input {...register('ext_color')} name="ext_color" placeholder="Ext Color"/>
                </div>
                <div>
                    <label htmlFor="int_color">Int Color</label>
                    <Input {...register('int_color')} name="int_color" placeholder="Int Color"/>
                </div>
                <div>
                    <label htmlFor="odometer">Odometer</label>
                    <Input {...register('odometer')} name="odometer" placeholder="Odometer"/>
                </div>
                <div>
                    <label htmlFor="vin">VIN</label>
                    <Input {...register('vin')} name="vin" placeholder="VIN"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

