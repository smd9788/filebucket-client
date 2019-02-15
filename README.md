## Commits
* Must be present tense
* End with blank line
* `git add` relevant files for the commit
* Use `git diff --staged` after adding files to see changes for commit details
* Example below:

```
Update get image route

- Update router.get in routes/image_routes
- Change .then(console.log) to .then(handle404)
- Issue with catching error messages
    <blank line here>
```
## Branch Naming


## General Git Workflow

* Create feature branch
  - `git checkout develpment`
  - `git pull origin development`
  - `git checkout -b my-feature-branch`
* Integrating a feature
  - `git status` in feature branch to ensure changes are commited
  - `git checkout develpment`
  - `git pull origin development`
  - `git checkout my-feature-branch`
  - `git rebase development`
  - If any conflicts were introduced in the previous step, work through the code with your team and resolve each one; when you finish, run `git commit`.
  - `git push origin my-feature-branch`
  - <b>Within your GitHub repo</b> Create a pull request from your feature branch to the development branch.
  - As a team, review the pull request.
  - Click `Create Pull Request`
  - If there are merge conflicts preventing an automatic merge, a member of your team will need to resolve those conflicts manually on their machine, and then push the newly updated development branch back up to GitHub.
  - Click `Merge pull request` `Confirm merge`
  - Once development has been updated, other members of the team will need to rebase their own feature branches on it (as described in Step 2) before they push up those feature branches up to GitHub.
* Other features
  - `git fetch origin` to see what exists on the remote server. After that, you can checkout a branch.


## Deploying

* General
  - `git checkout develpment`
  - `git pull origin development`
  - Check that application is working and run tests.
  - `git checkout master`
  - `git merge development`
  - `git push origin master`
  - Client specific
    - `grunt build`
    - `grunt deploy`
  - API specific
    - `git push heroku master`
