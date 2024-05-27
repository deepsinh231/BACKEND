
const asyncHedalar = (responseHadler) => {
    (req, res, next) => {
        Promise.resolve(responseHadler(req, res, next)).catch((error) => next(error))
    }
}

export { asyncHedalar }



// const asyncHedalar = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }