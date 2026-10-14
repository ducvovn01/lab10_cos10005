# Week 10 jQuery lab

Open `regform2.html` in a browser. The included jQuery library works locally.

The completed exercise includes:

- jQuery validation for required fields, the lab's User ID `@` checks, matching passwords, and names containing letters and spaces.
- Independent animated collapse/expand controls for Account Information and User Information.
- An error list in an HTML/CSS popup with a screen overlay. Close or Escape dismisses it.

The two supplied CSS files are used as provided. The User ID checks follow the lab's example; they are not comprehensive email address validation.

## Local verification

`node --check validation.js` passed. All 29 checks in a temporary Chrome browser harness passed, covering required fields, the User ID rules, password matching, name validation, both gender options, independent section toggles, validation of collapsed fields, popup display and dismissal, and keyboard controls. The checks intercepted submission so no data was sent to Mercury.

## Submission

The form retains the starter's action URL (`http://mercury.swin.edu.au/it000000/formtest.php`). Confirm the correct endpoint with your unit before testing a successful submission, and use sample data.

Upload `regform2.html`, `regform2_desktop.css`, `modal.css`, `validation.js`, and `jquery.min.js` to your Mercury `lab10` directory. Commit and push those files to your GitHub repository as instructed by the lab. The reference animation `objective.gif` can also be kept in the repository.

Your Mercury page URL follows the PDF's pattern:

`http://mercury.swin.edu.au/cos10005/s<your-student-id>/lab10/regform2.html`

GitHub and Mercury uploads and online W3C validation have not been performed.
