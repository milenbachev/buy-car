export const validate = (value) => {
    const errors = {};

    if (!value.brand){
        errors.brand = 'Brand is required'
    }else if(value.brand.length < 2){
        errors.brand = 'Brand min length is 2 sumbols'
    }else if(value.brand.length > 20){
        errors.brand = 'Brand max length is 20 sumbols'
    }

    if(!value.model){
        errors.model = 'Model is required'
    }else if(value.brand.length > 20){
        errors.model = 'Model max length is 20 sumbols'
    }

    if(!value.description){
        errors.description = 'Description is required'
    }else if(value.description.length < 4){
        errors.description = 'Description min length is 4 sumbols'
    }else if(value.description.length > 500){
        errors.description = 'Description max length is 500 sumbols'
    }

    if(!value.color){
        errors.color = 'Color is required'
    }else if(value.color.length < 2){
        errors.color = 'Color min length is 2 sumbols'
    }else if(value.color.length > 30){
        errors.color = 'Color max length is 30 sumbols'
    }

    if(!value.price){
        errors.price = 'Price is required'
    }else if(Number(value.price) <= 0){
        errors.price = 'Price cannot be negativ number or 0'
    }

    if(!value.kilometersTraveled){
        errors.kilometersTraveled = 'Kilometers Traveled is required'
    }else if(Number(value.kilometersTraveled) < 0){
        errors.kilometersTraveled = 'Kilometers Traveled can not be negative number'
    }

    if(!value.year){
        errors.year = 'Year is required'
    }else if(Number(value.year) <= 2000){
        errors.year = 'Years can not be less than 2000'
    }else if(Number(value.year) > 2021){
        errors.year = 'Years can not be large than 2021'
    }

    if(!value.img){
        errors.img = 'Img is required'
    }

    return errors
}


