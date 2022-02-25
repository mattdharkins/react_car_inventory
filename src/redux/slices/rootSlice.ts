import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root', 
    initialState: {
        year: '2011',
        make: "Ferrari",
        model: "458",
        price: 223500.00,
        location: 'Marina Del Ray, California',
        ext_color: 'Yellow',
        int_color: 'Black',
        odometer: '13622',
        vin: 'ZFF67NFA3B0176998'
    },
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseLocation: (state, action) => { state.location = action.payload },
        chooseExtColor: (state, action) => { state.ext_color = action.payload },
        chooseIntColor: (state, action) => { state.int_color = action.payload },
        chooseOdometer: (state, action) => { state.odometer = action.payload },
        chooseVin: (state, action) => { state.vin = action.payload }
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, choosePrice, chooseLocation, 
    chooseExtColor, chooseIntColor, chooseOdometer, chooseVin } = rootSlice.actions;