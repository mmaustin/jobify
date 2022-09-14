import {StatusCodes} from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {

    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: 'Something went wrong, playa!'
    };
    if(err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        //defaultError.msg = err.message
        //or
        defaultError.msg = Object.values(err.errors).map(item => item.message)
        .join(' and ');
    }
    //res.status(defaultError.statusCode).json({msg: err});
    res.status(defaultError.statusCode).json({msg: defaultError.msg});
}

export default errorHandlerMiddleware;