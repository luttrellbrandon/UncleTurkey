# Co-locate site and backend in one repository

Uncle Turkey needs a public gag site and, from day one, a place to persist Mini Game High Scores. We considered a site-only first ship, a separate backend repo, and a single repo with backend included. We chose one repository that holds both the site and the backend from the start so High Score work does not force a later extract, while still avoiding the overhead of two remotes and two deploy pipelines for a small gag project.
