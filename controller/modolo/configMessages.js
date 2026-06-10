const DEFAULT_MESSAGE = {
    api_descrition: 'Api para controlar pizzas',
    development: 'Vertex',
    version:'1.0.4.26',
    status: Boolean,
    status_code: Number,
    response: {}
}

const ERROR_BAD_REQUEST =                   {status: false, status_code:  400, message:''}
const ERROR_INTERNAL_SERVER_MODEL =         {status: false, status_code: 500, message:''}
const ERROR_CONTENT_TYPE =                  {status: false, status_code: 415, message: ''}
const ERROR_INTERNAL_SERVER_CONTROLLER =    {status: false, status_code: 500, message:''}
const ERROR_NOT_FOUND =                     {status:false, status_code: 404, message: ''}
