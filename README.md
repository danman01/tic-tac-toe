Contents:
1. Links to wireframes & user stories.
2. Technologies used
  2.1 SCSS & SAAS
  2.2 bootstrap
3. Development story
4. Unsolved problems for future releases

1. Links:
• wireframes: to be provided.
• user stories: to be provided.

2. Technologies used

  2.1 SCSS & SASS
  The following files govern the site's appearance.
    - colors: semantic color definitions
    - themes: there are no user-selectable themes in v1.
    - typography: semantic definitions of allowed fonts/faces. In compliance with
        UI/UX and good typographical style, the following rules exist:
        • no view contains more than 4 typefaces (font + size + style)
        • each of the 4 typefaces has a specific purpose. See comments in this
            file for a description of purposes.
        • design for monochrome first.
        • color:
          - use sparingly.
          - each color has a specific meaning.
          - never more than 4 colors (including black) in a view.
    - composition: "Composition", in the classic sense from printing, are the stylistic
        rules governing the placement & appearance of pages, blocks of text, headers,
        footers, etc. The rules are defined semantically & deployed against the relevant classes/tags here. Composition rolls up color & typography together.

  2.2 Bootstrap
  Grid layout & responsive breakpoints driven by bootstrap.

3. Development story
Through the dev cycle, I kept checklists in Wunderlist of tasks yet to be completed.
These ranged from the very detailed (fix a detailed item in code) to the high-level
(derived from the mandatory requirements). These were priotized (level 0, 1, 2) & numbered:
  level 0: urgent & important: essential tasks that must be complete to meet the
    minimum requirements.
  level 1: urgent: not essential to meet minimum requirements, but worthwhile; e.g.,
    apply mixins and bootstrap for responsive design.
  level 3: important: not time-critical; e.g., Atom complains about a missing
    remark-lint module. Also includes thoughts about extra-credit features.

  3.1 Requirements review
  • Combed through the requirements spec in game-project/requirements.md for the
      minimum subset needed for v1 to be fully compliant.

  3.2 User stories
  • Developed user stories that illustrated all the v1 user-facing requirements.
  • Set aside for later any feature not absolutely essential to meet v1 requirements.

  3.3 Wireframes and UX flow
  • Developed a rough wireframe for the UI. This was altered later when bootstrap
      technology was introduced to the class.
  • Developed the basic UX flow from initial landing on the site through log-out
      of the last player.

  3.4 Data structure design
  • Reviewed authentication and game API specs.
  • Identified key objects (classes, really) for operation of the game logic.
      These included:
      - game
      - player
      Game includes two internal representations of the state of play. One is a
      linear array that mirrors the game API, choosen for simplicity of communication
      with the API. This array's state drives the UI depiction of the board, and
      drives a separate set of derivative arrays used to analysis the game state.
      Game state analysis determines:
      - is the game over?
      - are there no remaining plays that could win; i.e, the game will be a draw?
      These derivative arrays can be used in a future release to build a robot
      player.
  • Using the user stories, UX flow, wireframes, and v1 requirements, identified
      essential properties and methods for these objects.

  3.5 Build clean repo
  • Two attempts needed to build a clean repo from the browser template. The first
      attempt was abandoned as it carried the browser-template's commit history, and
      grunt deploy constructed the site at the wrong URL.

  3.6 Layout the UI
  • ui-roughout branch.

4. Unsolved problems for future releases
None to date.