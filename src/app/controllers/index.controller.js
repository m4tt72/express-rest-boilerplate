/**
 * @api {get} / ping api
 * @apiName PingAPI
 * @apiGroup API
 *
 * @apiSuccess (200 OK) {String} message ping message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "API Working"
 *     }
 */
const index = (req, res) => {
  return res.status(200).json({
    message: 'API Working',
  });
};

module.exports = {
  index,
};
