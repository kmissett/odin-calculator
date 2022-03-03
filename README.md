# odin-calculator

A calculator written in vanilla Javascript, for the fulfillment of another Odin Project.

TODOS:
1. Keypress functionality, especially with the numeric keypad. (I laid the calculator out specifically to match that as best I could.)
2. Add more functions -- powers, roots, logarithms, factorials, permutations, combinations, as well as stored constants (especially e and pi).
3. Formatting using toLocaleString()
4. Precision: I'm currently setting a maximum precision of 12 digits using toPrecision(), which causes a few problems, especially as regards rounding. I know calculators normally store something like 15 digits of precision, especially for stored constants, to account for the rounding errors. Since I'm using the onscreen values as the computed ones, at the moment I can't do that. I'd have to refactor the whole thing to use one set of values and display another set. 