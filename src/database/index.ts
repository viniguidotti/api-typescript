import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://viniguidotti:Vini2308*@vinim.q7ak2kx.mongodb.net/?retryWrites=true&w=majority&appName=vinim')

mongoose.Promise = global.Promise;

export default mongoose;