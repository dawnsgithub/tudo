module.exports = function parseIssues (issues) {
  var issuesArray = issues.map(function(element) {
    return {
      id: element.id.toString(),
      created_by: element.user.login,
      owner_name: element.repository.full_name.split('/')[0],
      repo_name: element.repository.full_name.split('/')[1],
      title: element.title,
      first_line: element.body.split('\r\n')[0],
      labels: element.labels.map(function(el) {
          return {
              name: el.name,
              color: el.color
          }
      }),
      updated_at: element.updated_at,
      created_at: element.created_at,
      last_comment: element.comment_items.length > 0 ? element.comment_items[element.comment_items.length - 1].body : "",
      number_of_comments: element.comments.toString(),
      issue_number: element.number.toString(),
      assignee: element.assignee.login,
      avatar_url: element.assignee.avatar_url
    }
  });

  return issuesArray;
}
