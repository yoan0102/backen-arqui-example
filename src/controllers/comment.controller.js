
let _commentService = null

class CommentController {
  constructor({ IdeaService }) {
    _commentService = IdeaService
  }

  async get(req, res) {
    const { commentId } = req.params
    const comment = await _commentService.get(commentId)
    return res.send(comment)
  }

  async getAll(req, res) {
    const comments = await _commentService.getAll()
    return res.send(comments)
  }

  async update(req, res) {
    const { body } = req
    const { commentId } = req.params
    const updateComment = await _commentService.update(commentId, body)
    return res.send(updateComment)
  }

  async delete(req, res) {
    const { commentId } = req.params
    const deleteComment = await _commentService.delete(commentId)
    return res.send(deleteComment)
  }

  async getIdeaComments(req, res) {
    const { ideaId } = req.params
    const comment = await _commentService.getIdeasComments(ideaId)
    return res.send(comment)
  }

  async create(req, res) {
    const { body } = req
    const { ideId } = await req.params
    const createComment = await _commentService.createComment(body, ideId)
    return res.status(201).send(createComment)
  }

}


module.exports = CommentController