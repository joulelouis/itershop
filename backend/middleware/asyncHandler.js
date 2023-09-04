// 'asyncHandler' is a higher-order function, which means it takes a function ('fn') as an argument and returns a new functionthat wraps around the provided function
// the returned function takes three parameters: 'req' (the request object), 'res' (the response object), and 'next' (a callback function that passes control to the next middleware or route handler).
const asyncHandler = fn => (req, res, next) => {
    // 'fn(req, res, next)' is the asynchronous function (route handler or middleware) that you want to handle
    // 'Promise.resolve' is used to ensure that the result of 'fn(req, res, next)' is always a Promise, regardless of whether 'fn' returns a Promise or note. This is important for consistent error handling
    // '.catch(next)' is chained to the Promise. This part is crucial for error handling:
    /* 
        - if the Promise returned by 'fn(req, res, next)' resolves successfully, it continues the execution of the route handler or middleware without any issues.
        - if the Promise rejects (i.e., an erroroccurs during the execution of 'fn'), the error is caught by '.catch(next)'. This means that the error will be passed to the Express 'next' function, which will then trigger any error handling middleware you've set up in your Express app. This way, you don't have to write explicit error handling code in each route handler or middleware.
    */
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;