import Mongoose from 'mongoose'

const schema = Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    published: Date
}, {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false
})

const PostsModel = Mongoose.model('Posts', schema)

export default PostsModel